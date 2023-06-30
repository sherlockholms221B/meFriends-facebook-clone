const express = require('express');
const {
  getPostRoute,
  getSinglePost,
  createPostRoute,
  likePostRoute,
  makeComentRoute,
  deletePostRoute,
} = require('../Controllers/PostControllers.js');

const router = express.Router();

//post routes
router
  .get('/get-all-post', getPostRoute)
  .get('/get-single-post', getSinglePost);
router
  .post('/create-one-post', createPostRoute)
  .post('/comment-on-post', makeComentRoute);
router.delete('/delete-post', deletePostRoute);
router.put('/like-post', likePostRoute);

// export functons
module.exports = router;
