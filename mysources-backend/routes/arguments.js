import express from "express";
import { nanoid } from "nanoid";
import { getSupabaseClient } from "../util/SupabaseManager.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send({ title: "Express" });
});

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
