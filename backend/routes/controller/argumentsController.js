import { getSupabaseClient } from "../../util/SupabaseManager.js";
import { nanoid } from "nanoid";

const getAllArgumentsByUserId = async (userId) => {
  const sbClient = getSupabaseClient();
  const { data: argumentsData, error: argumentsError } = await sbClient
    .from("arguments")
    .select()
    .eq("user_id", userId);

  if (argumentsError) throw argumentsError;

  const { data: sourcesData, error: sourcesError } = await sbClient
    .from("sources")
    .select()
    .in(
      "argument_id",
      argumentsData.map((argument) => argument.id),
    );

  if (sourcesError) throw sourcesError;

  const argumentsWithSources = argumentsData.map((argument) => {
    const sources = sourcesData.filter(
      (source) => source.argument_id === argument.id,
    );
    return { ...argument, sources };
  });

  return { data: argumentsWithSources };
};

const getArgumentBySlug = async (slug) => {
  const sbClient = getSupabaseClient();

  const { data: argumentData, error: argumentError } = await sbClient
    .from("arguments")
    .select()
    .eq("slug", slug)
    .single();

  if (argumentError) throw argumentError;

  const { data: sourcesData, error: sourcesError } = await sbClient
    .from("sources")
    .select()
    .eq("argument_id", argumentData.id);

  if (sourcesError) throw sourcesError;

  sourcesData.forEach((source) => {
    source.imageUrl = source.image_url;
    source.siteName = source.site_name;
    source.quoteVerified = source.quote_verified;
    delete source.image_url;
    delete source.site_name;
    delete source.quote_verified;
  });

  return { data: { ...argumentData, sources: sourcesData } };
};

const insertArgument = async (title, sourceIds, user_id) => {
  if (!title) {
    throw { status: 400, message: "Title parameter is required." };
  }
  if (!Array.isArray(sourceIds) || sourceIds.length === 0) {
    throw { status: 400, message: "SourceIds parameter is required." };
  }

  const sbClient = getSupabaseClient();
  const slug = nanoid(8);

  const { data, error: argumentError } = await sbClient
    .from("arguments")
    .insert([{ title, slug, user_id }])
    .select()
    .single();

  if (argumentError) throw argumentError;

  const newArgumentId = data.id;
  const { error: sourcesError } = await Promise.all(
    sourceIds.map((sourceId) =>
      sbClient
        .from("sources")
        .update({ argument_id: newArgumentId })
        .eq("id", sourceId),
    ),
  );

  if (sourcesError) throw sourcesError;
  return { data };
};

const updateArgument = async (userId, slug, title, sourceIds) => {
  if (!title) {
    throw { status: 400, message: "Title parameter is required." };
  }
  if (!Array.isArray(sourceIds)) {
    throw { status: 400, message: "SourceIds parameter is required." };
  }

  const sbClient = getSupabaseClient();

  const { data, error: updateError } = await sbClient
    .from("arguments")
    .update({ title })
    .eq("user_id", userId)
    .eq("slug", slug)
    .select()
    .single();

  if (updateError) throw updateError;

  const { data: sourcesData, error: sourcesError } = await sbClient
    .from("sources")
    .select()
    .eq("argument_id", data.id);

  if (sourcesError) throw sourcesError;

  const sourcesToDelete = sourcesData.filter(
    (source) => !sourceIds.includes(source.id),
  );

  const { error: deleteSourcesError } = await sbClient
    .from("sources")
    .delete()
    .in(
      "id",
      sourcesToDelete.map((source) => source.id),
    );

  if (deleteSourcesError) throw deleteSourcesError;
  return { data };
};

export {
  getArgumentBySlug,
  insertArgument,
  updateArgument,
  getAllArgumentsByUserId,
};
