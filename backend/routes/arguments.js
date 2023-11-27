import express from "express";
import {nanoid} from "nanoid";
import {getSupabaseClient} from "../util/SupabaseManager.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  res.send({ title: "Express" });
});

// GET BY SLUG
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    const sbClient = getSupabaseClient();

    const { data: argumentData, error: argumentError } = await sbClient
      .from("arguments")
      .select()
      .eq("slug", slug)
      .single();

    if (argumentError) {
      console.error("argument error:", argumentError);
      return res.status(400).json({
        errorMessage: "Couldn't get argument.",
        details: argumentError.message,
      });
    }

    const { data: sourcesData, error: sourcesError } = await sbClient
      .from("sources")
      .select()
      .eq("argument_id", argumentData.id);

    if (sourcesError) {
      console.error("sources error:", sourcesError);
      return res.status(400).json({
        errorMessage: "Couldn't get sources.",
        details: sourcesError.message,
      });
    }

    sourcesData.forEach((source) => {
      source.imageUrl = source.image_url;
      source.siteName = source.site_name;
      source.quoteVerified = source.quote_verified;
      delete source.image_url;
      delete source.site_name;
      delete source.quote_verified;
    });

    res.json({ ...argumentData, sources: sourcesData });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ errorMessage: "Server error occurred." });
  }
});

// POST
router.post("/", async (req, res) => {
  const { title, sourceIds } = req.body;
  const slug = nanoid(8);

  if (!title) {
    return res
      .status(400)
      .json({ errorMessage: "Title parameter is required." });
  }
  if (!Array.isArray(sourceIds) || sourceIds.length === 0) {
    return res
      .status(400)
      .json({ errorMessage: "sourceIds must be a non-empty array." });
  }

  try {
    const sbClient = getSupabaseClient();

    const { data: argumentData, error: argumentError } = await sbClient
      .from("arguments")
      .insert([{ title, slug }])
      .select()
      .single();

    if (argumentError) {
      console.error("argument error:", argumentError);
      return res.status(400).json({
        errorMessage: "Couldn't insert argument.",
        details: argumentError.message,
      });
    }

    const newArgumentId = argumentData.id;

    const { error: sourcesError } = await Promise.all(
      sourceIds.map((sourceId) =>
        sbClient
          .from("sources")
          .update({ argument_id: newArgumentId })
          .eq("id", sourceId),
      ),
    );

    if (sourcesError) {
      console.error("Update sources error:", sourcesError);
      return res.status(400).json({
        errorMessage: "Couldn't update sources.",
        details: sourcesError.message,
      });
    }

    res.status(201).json(argumentData);
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ errorMessage: "Server error occurred." });
  }
});

export default router;
