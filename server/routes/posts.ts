import express from "express";
import { getPosts, createPost } from "../controllers/posts";

const router = express.Router();

// ROUTES

// get posts
router.get("/", getPosts);

// add new posts
router.post("/", createPost);

export default router;
