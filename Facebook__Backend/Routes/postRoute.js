import express from 'express'
import {
  getPostRoute,
  getSinglePost,
  createPostRoute,
  likePostRoute,
  makeComentRoute,
  deletePostRoute,
} from '../Controllers/PostControllers.js'

const router = express.Router()

//post routes
router.get('/get-all-post', getPostRoute).get('/get-single-post', getSinglePost)
router
  .post('/create-one-post', createPostRoute)
  .post('/comment-on-post', makeComentRoute)
router.delete('/delete-post', deletePostRoute)
router.put('/like-post', likePostRoute)

// export functons
export default router
