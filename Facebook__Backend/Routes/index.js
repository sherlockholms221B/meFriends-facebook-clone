import express from "express";
import {
  getPostRoute,
  makePostRoute,
  likePostRoute,
  makeComentRoute,
  deletePostRoute,
  getProduct,
  createProduct,
} from "../Controllers/index.js";

const router = express.Router();

//socials routes
router.get("/shantlemartha/get-all/post/home", getPostRoute);
router.post("/shantlemartha/create-post", makePostRoute);
router.put("/shantlemartha/like-post", likePostRoute);
router.post("/shantlemartha/comment-on-post", makeComentRoute);
router.delete("/shantlemartha/delete-post", deletePostRoute);
//shoping routes
router.get("/shantlemartha/get-all/product/home", getProduct);
router.post("/shantlemartha/create-product", createProduct);

// export functons
export default router;
