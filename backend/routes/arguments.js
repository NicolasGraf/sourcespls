import express from "express";
import { checkAuth, resolveToken } from "../util/AuthMiddleware.js";
import {
  deleteArgumentById,
  getAllArgumentsByUserId,
  getArgumentBySlug,
  insertArgument,
  updateArgument,
} from "./controller/argumentsController.js";

const router = express.Router();

// GET
router.get("/", checkAuth, async (req, res, next) => {
  const { user } = req;
  const { id: userId } = user;

  try {
    const { data } = await getAllArgumentsByUserId(userId);
    res.json({ data });
  } catch (error) {
    next(error);
  }
});

// GET BY SLUG
router.get("/:slug", async (req, res, next) => {
  const { slug } = req.params;

  try {
    const { data } = await getArgumentBySlug(slug);
    res.json({ data });
  } catch (error) {
    next(error);
  }
});

// POST
router.post("/", resolveToken, async (req, res, next) => {
  const { title, sourceIds } = req.body;
  const user_id = req.user ? req.user.id : null;

  try {
    const { data } = await insertArgument(title, sourceIds, user_id);
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
});

router.put("/:slug", resolveToken, async (req, res, next) => {
  const { slug } = req.params;
  const { title, sourceIds } = req.body;
  const userId = req.user ? req.user.id : null;

  try {
    const { data } = await updateArgument(userId, slug, title, sourceIds);

    res.json({ data });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", checkAuth, async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  try {
    const { data } = await deleteArgumentById(id, userId);
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
});

export default router;
