import express from 'express'
import {
  getPostRoute,
  getSinglePost,
  createPostRoute,
  likePostRoute,
  makeComentRoute,
  deletePostRoute,
  getProduct,
  createProduct,
} from '../Controllers/PostControllers.js'

const router = express.Router()

//post routes
router
  .get('/facebook-clone-modern/get-all-post', getPostRoute)
  .get('/facebook-clone-modern/get-single-post', getSinglePost)
router
  .post('/facebook-clone-modern/create-one-post', createPostRoute)
  .post('/facebook-clone-modern/comment-on-post', makeComentRoute)
router.delete('/facebook-clone-modern/delete-post', deletePostRoute)
router.put('/facebook-clone-modern/like-post', likePostRoute)
//shoping routes
router.get('/facebook-clone-modern/get-all/product/home', getProduct)
router.post('/facebook-clone-modern/create-product', createProduct)

// export functons
export default router
