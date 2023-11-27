import express from "express";
import { checkAuth, resolveToken } from "../util/AuthMiddleware.js";
import {
  getAllArgumentsByUserId,
  getArgumentBySlug,
  insertArgument,
  updateArgument,
} from "./controller/argumentsController.js";

const router = express.Router();

// GET
router.get("/", checkAuth, async (req, res) => {
  const { user } = req;
  console.log(user);
  const { id: userId } = user;

  try {
    const { data, error } = await getAllArgumentsByUserId(userId);

    if (error) {
      console.error("argument error:", error);
      return res.status(400).json({
        errorMessage: "Couldn't get argument.",
        details: error.message,
      });
    }

    res.json({ data });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ errorMessage: "Server error occurred." });
  }
});

// GET BY SLUG
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    const { data, error } = await getArgumentBySlug(slug);

    if (error) {
      console.error("argument error:", error);
      return res.status(400).json({
        errorMessage: "Couldn't get argument.",
        details: error.message,
      });
    }

    res.json({ data });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ errorMessage: "Server error occurred." });
  }
});

// get all arguments from one user

// POST
router.post("/", resolveToken, async (req, res) => {
  const { title, sourceIds } = req.body;
  const user_id = req.user ? req.user.id : null;

  try {
    const { data, error } = await insertArgument(title, sourceIds, user_id);

    if (error) {
      console.error("argument error:", error);
      return res.status(400).json({
        errorMessage: "Couldn't insert argument.",
        details: error.message,
      });
    }

    res.status(201).json(data);
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ errorMessage: "Server error occurred." });
  }
});

router.put("/:slug", checkAuth, async (req, res) => {
  try {
    const { slug } = req.params;
    const { id: userId } = req.user;
    const { title, sourceIds } = req.body;
    const { data, error } = await updateArgument(
      userId,
      slug,
      title,
      sourceIds,
    );

    if (error) {
      console.error("argument error:", error);
      return res.status(400).json({
        errorMessage: "Couldn't save argument.",
        details: error.message,
      });
    }

    res.json({ data });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ errorMessage: "Server error occurred." });
  }
});

export default router;
