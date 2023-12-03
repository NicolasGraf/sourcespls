import express from "express";
import { deleteSource, insertSource } from "./controller/sourcesController.js";
import { resolveToken } from "../util/AuthMiddleware.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { url, quote } = req.body;

  try {
    const parsedUrl = new URL(url);
    const { data } = await insertSource(parsedUrl, quote);
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", resolveToken, async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user ? req.user.id : null;

    const { data } = await deleteSource(id, userId);
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
});

export default router;
