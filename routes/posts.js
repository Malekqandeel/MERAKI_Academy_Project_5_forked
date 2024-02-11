const express = require("express");
const { getAllPost, updatePost, getPostById,deletePostById } = require("../controller/posts");
const postRouter = express.Router();
postRouter.get("/", getAllPost);
postRouter.get("/:id",getPostById);
postRouter.put("/:id", updatePost);
postRouter.delete('/:id',deletePostById)
postRouter.use("*", (req, res) => {
  res.json("postRouter is working");
});

module.exports = postRouter;
