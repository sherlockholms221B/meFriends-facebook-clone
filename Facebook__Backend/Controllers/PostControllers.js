/* route configuration for mefriend client end. You can add more action controller here. 
 Edit this file if you know what you are doing */


// Import required modules
const NodeCache = require('node-cache');
 
const crypto = require('crypto');
//const   sanity client
const client = require('../Clients/client.js');
//const   post query client
const {
  allPostsQuery,
  postDetailQuery,
  singleUserQuery,
} = require('../Queris/querries.js');

//get all posts based on users frineds, tags,serach terms and ...rest
const cache = new NodeCache({ stdTTL: 60 }); // Cache posts for 60 seconds

const getPostRoute = async (req, res) => {
  try {
    const cacheKey = 'posts';
    let posts = cache.get(cacheKey);

    if (!posts) {
      // If the data is not available in the cache, fetch it from the data source
      posts = await client.fetch(allPostsQuery());

      if (!posts.length) {
        return res.status(204).json({
          message: 'No posts found. Add friends to see posts.',
        });
      }

      // Save the fetched data to the cache
      cache.set(cacheKey, posts);
    }

    const processedPosts = posts.map((post) => ({
      ...post,
      postfile: [...post.image, ...post.video],
    }));

    return res.status(200).json({
      status: 'success',
      data: {
        posts: processedPosts,
        length: posts.length,
      },
      message: 'Success',
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch posts. Please try again later.',
    });
  }
};

// const getPostRoute = async (req, res) => {
//   try {
//     //
//     const posts = await client.fetch(allPostsQuery());
//     //
//     if (!posts.length) {
//       return res.status(304).json({
//         messsage: 'Add friends to see posts',
//       });
//     }
//     //
//     //
//     let newPosts = [];
//     for (let index = 0; index < posts.length; index++) {
//       newPosts = [
//         ...newPosts,
//         {
//           ...posts[index],
//           postfile: [...posts[index].image, ...posts[index].video],
//         },
//       ];
//     }
//     //
//     return res.status(200).json({
//       posts: newPosts,
//       sound: 'ALL_POST_TUNING_SOUND',
//       message: 'Success',
//       length: posts.length,
//     });
//   } catch (error) {
//     res.status(500).json({ messsage: error.message, error });
//   }
// };

// get single post

const getSinglePost = async (req, res) => {
  try {
    //get post id
    const { POST_ID } = req.query;
    //
    const post = await client.fetch(postDetailQuery(POST_ID));
    //
    if (!post.length) {
      return res.status(304).json({
        messsage: `No post matching the _id: ${POST_ID}`,
      });
    }
    //
    //
    let newPost = [];
    for (let index = 0; index < post.length; index++) {
      newPost = [
        ...newPost,
        {
          ...post[index],
          postfile: [...post[index].image, ...post[index].video],
        },
      ];
    }
    //
    return res.status(200).json({
      posts: newPost,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
      length: post.length,
    });
    //
  } catch (error) {
    res.status(500).json({ messsage: error.message, error });
  }
};

//
const deletePostRoute = async (req, res) => {
  try {
    //get post id
    const { POST_ID, USER_ID } = req.query;
    //get the post to be deleted
    const TO_BE_DELETED = await client.fetch(postDetailQuery(POST_ID));
    //
    if (!TO_BE_DELETED.length) {
      return res
        .status(404)
        .json({ message: 'No post with the specified id was found' });
    }
    //
    if (
      !(
        TO_BE_DELETED[0]._id === POST_ID &&
        TO_BE_DELETED[0].postedBy._id === USER_ID
      )
    ) {
      //
      return res
        .status(403)
        .json({ message: 'You are not allowed to delete this post' });
      //
    }

    const deletedPost = await client.delete({
      query: `*[_type == "post" && _id == '${TO_BE_DELETED[0]._id}']`,
    });
    //
    const posts = await client.fetch(allPostsQuery());
    //
    res.status(200).json({
      deletedPost,
      posts,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
      length: posts.length,
    });
    //
  } catch (error) {
    //
    res.status(500).json({ messsage: error.message, error });
    //
  }
};

//
const createPostRoute = async (req, res) => {
  try {
    const documents = req.body.data;
    //
    const newPost = await client.create(documents);
    //
    const posts = await client.fetch(allPostsQuery());
    //
    res.status(200).json({
      newPost,
      posts,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
      length: posts.length,
    });
    //
  } catch (error) {
    //
    res.status(500).json({ messsage: error.message, error });
    //
  }
};

//
const likePostRoute = async (req, res) => {
  try {
    const { USER_ID, POST_ID } = req.body;

    // Validation: Check if USER_ID and POST_ID are provided and properly formatted
    if (!USER_ID || !POST_ID) {
      return res
        .status(400)
        .json({ message: 'USER_ID and POST_ID are required.' });
    }

    // Fetch the post to be liked or unliked
    const TO_BE_LIKED_OR_LIKED = await client.fetch(
      `*[_type == "post" && _id == '${POST_ID}']{
        ...,
        likes
      }`
    );

    // Validation: Check if the post exists
    if (!TO_BE_LIKED_OR_LIKED[0]) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    const existingLikes = TO_BE_LIKED_OR_LIKED[0].likes || [];
    const isLiked = existingLikes.some((like) => like._ref === USER_ID);

    if (isLiked) {
      // Unlike the post
      await client
        .patch(POST_ID)
        .unset([`likes[_ref=="${USER_ID}"]`])
        .commit();
    } else {
      // Like the post
      const newLikeObject = {
        _type: 'reference',
        _ref: USER_ID,
        _key: crypto.randomUUID(),
      };

      await client
        .patch(POST_ID)
        .setIfMissing({ likes: [] })
        .insert('after', 'likes[-1]', [newLikeObject])
        .commit({ autoGenerateArrayKeys: true });
    }

    // Fetch the updated post with comments and likes
    const UPDATED_POST = await client.fetch(
      `*[_type == "post" && _id == '${POST_ID}']{
        ...,
      }`
    );

    // Respond with the updated post and likes
    res.status(200).json({
      post: UPDATED_POST,
      likes: UPDATED_POST[0].likes,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//
const makeComentRoute = async (req, res) => {
  try {
    const { COMMENT, USER_ID, POST_ID } = req.body;
    //
    //getting the current users post date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    //
    await client
      .patch(POST_ID)
      .setIfMissing({ comments: [] })
      .insert('after', 'comments[-1]', [
        {
          _type: 'comment',
          postedBy: {
            _ref: USER_ID,
            _key: crypto.randomUUID(),
            _type: 'postedBy',
          },
          comment: COMMENT,
          createdAt: `${yyyy}-${mm}-${dd}`,
        },
      ])
      .commit({ autoGenerateArrayKeys: true });
    //

    const UPDATED_POST =
      await client.fetch(`*[_type == "post" && _id == '${POST_ID}']{
      ...,
      comments[] | order(createdAt desc){
      comment,
      _key,
      createdAt,
      postedBy->{
        userName,
        profileImage,
        email,
      },
    },
    }`);
    //
    res.status(200).json({
      comment: UPDATED_POST[0].comments.reverse()[0],
      post: UPDATED_POST,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Comment created successfully.',
    });
    //
  } catch (error) {
    //
    console.error('Error creating comment:', error);

    // Check for specific error types and handle accordingly
    if (error.name === 'SanityClientError') {
      return res.status(500).json({
        message: 'Failed to communicate with the database.',
        error,
      });
    } else if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Invalid input data.', error });
    }

    // For unhandled errors, provide a generic error message
    res.status(500).json({
      message: 'An error occurred while creating the comment.',
      error,
    });
  }
};

module.exports = {
  getSinglePost,
  getPostRoute,
  deletePostRoute,
  createPostRoute,
  likePostRoute,
  makeComentRoute,
};