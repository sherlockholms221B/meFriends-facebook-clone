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

//post routes
router.get("/facebook-clone-modern/get-all-post", getPostRoute);
router.post("/facebook-clone-modern/create-post", makePostRoute);
router.put("/facebook-clone-modern/like-post", likePostRoute);
router.post("/facebook-clone-modern/comment-on-post", makeComentRoute);
router.delete("/facebook-clone-modern/delete-post", deletePostRoute);
//shoping routes
router.get("/facebook-clone-modern/get-all/product/home", getProduct);
router.post("/facebook-clone-modern/create-product", createProduct);

// export functons
export default router;
