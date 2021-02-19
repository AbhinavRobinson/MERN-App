import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Working");
  console.log(req);
});

export default router;
