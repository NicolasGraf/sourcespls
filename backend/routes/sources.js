import express from "express";
import { insertSource } from "./controller/sourcesController.js";

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

export default router;
