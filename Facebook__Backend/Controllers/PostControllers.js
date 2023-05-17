/* route configuration for mefriend client end. You can add more action controller here. 
 Edit this file if you know what you are doing */
import crypto from 'crypto'
//import sanity client
import { client } from '../Clients/index.js'

//import post query client
import { allPostsQuery, postDetailQuery } from '../Queris/querries.js'

//get all posts based on users frineds, tags,serach terms and ...rest
export const getPostRoute = async (req, res) => {
  try {
    //
    const posts = await client.fetch(allPostsQuery())
    //
    if (!posts.length) {
      return res.status(304).json({
        messsage: 'Add friends to see posts',
      })
    }
    //
    //
    let newPosts = []
    for (let index = 0; index < posts.length; index++) {
      newPosts = [
        ...newPosts,
        {
          ...posts[index],
          postfile: [...posts[index].image, ...posts[index].video],
        },
      ]
    }
    //
    return res.status(200).json({
      posts: newPosts,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
      length: posts.length,
    })
  } catch (error) {
    res.status(500).json({ messsage: error.message, error })
  }
}

//get single post
export const getSinglePost = async (req, res) => {
  try {
    //get post id
    const { POST_ID } = req.query
    //
    const post = await client.fetch(postDetailQuery(POST_ID))
    //
    if (!post.length) {
      return res.status(304).json({
        messsage: `No post matching the _id: ${POST_ID}`,
      })
    }
    //
    //
    let newPost = []
    for (let index = 0; index < post.length; index++) {
      newPost = [
        ...newPost,
        {
          ...post[index],
          postfile: [...post[index].image, ...post[index].video],
        },
      ]
    }
    //
    return res.status(200).json({
      posts: newPost,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
      length: post.length,
    })
    //
  } catch (error) {
    res.status(500).json({ messsage: error.message, error })
  }
}

//
export const deletePostRoute = async (req, res) => {
  try {
    //get post id
    const { POST_ID, USER_ID } = req.query
    //get the post to be deleted
    const TO_BE_DELETED = await client.fetch(postDetailQuery(POST_ID))
    //
    if (!TO_BE_DELETED.length) {
      return res
        .status(404)
        .json({ message: 'No post with the specified id was found' })
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
        .json({ message: 'You are not allowed to delete this post' })
      //
    }

    const deletedPost = await client.delete({
      query: `*[_type == "post" && _id == '${TO_BE_DELETED[0]._id}']`,
    })
    //
    const posts = await client.fetch(allPostsQuery())
    //
    res.status(200).json({
      deletedPost,
      posts,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
      length: posts.length,
    })
    //
  } catch (error) {
    //
    res.status(500).json({ messsage: error.message, error })
    //
  }
}

//
export const createPostRoute = async (req, res) => {
  try {
    const documents = req.body.data
    //
    const newPost = await client.create(documents)
    //
    const posts = await client.fetch(allPostsQuery())
    //
    res.status(200).json({
      newPost,
      posts,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
      length: posts.length,
    })
    //
  } catch (error) {
    //
    res.status(500).json({ messsage: error.message, error })
    //
  }
}

//
export const likePostRoute = async (req, res) => {
  try {
    const { USER_ID, POST_ID } = req.body
    //
    const TO_BE_LIKEED_OR_LIKED =
      await client.fetch(`*[_type == "post" && _id == '${POST_ID}']{
      ...,
      likes
    }`)
    //
    if (
      TO_BE_LIKEED_OR_LIKED[0].likes === null ||
      TO_BE_LIKEED_OR_LIKED[0].likes === []
    ) {
      await client
        .patch(POST_ID)
        .setIfMissing({ likes: [] })
        .insert('after', 'likes[-1]', [
          { _type: 'reference', _ref: USER_ID, _key: crypto.randomUUID() },
        ])
        .commit({ autoGenerateArrayKeys: true })
    } else {
      const isLiked = TO_BE_LIKEED_OR_LIKED[0].likes.filter(
        ({ _ref }) => _ref === USER_ID
      )
      if (isLiked.length) {
        await client
          .patch(POST_ID)
          .unset([`likes[_ref=="${USER_ID}"]`])
          .commit()
      } else {
        await client
          .patch(POST_ID)
          .setIfMissing({ likes: [] })
          .insert('after', 'likes[-1]', [
            { _type: 'reference', _ref: USER_ID, _key: crypto.randomUUID() },
          ])
          .commit({ autoGenerateArrayKeys: true })
      }
    }
    //
    const posts = await client.fetch(allPostsQuery())
    //
    res.status(200).json({
      posts,
      likes: TO_BE_LIKEED_OR_LIKED[0].likes,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
    })
    //
  } catch (error) {
    //
    res.status(500).json({ messsage: error.message, error })
    //
  }
}

//
export const makeComentRoute = async (req, res) => {
  try {
    const { COMENT, USER_ID, POST_ID } = req.body
    //
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    var yyyy = today.getFullYear()
    //
    client
      .patch(POST_ID)
      .setIfMissing({ coments: [] })
      .insert('after', 'coments[-1]', [
        {
          _type: 'coment',
          postedBy: {
            _ref: USER_ID,
            _key: crypto.randomUUID(),
            _type: 'postedBy',
          },
          coment: COMENT,
          createdAt: `${yyyy}-${mm}-${dd}`,
        },
      ])
      .commit({ autoGenerateArrayKeys: true })
    //
    const UPDATED_POST =
      await client.fetch(`*[_type == "post" && _id == '${POST_ID}']{
      ...,
      coments
    }`)
    //
    res.status(200).json({
      post: UPDATED_POST,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
    })
    //
  } catch (error) {
    //
    res.status(500).json({ messsage: error.message, error })
    //
  }
}

//shoping route controllers #MARKETPLACE
export const getProduct = async (req, res) => {
  try {
    res.send('get product ')
  } catch (error) {
    console.log(error)
  }
}
//
export const createProduct = async (req, res) => {
  try {
    console.log(req.body)
    res.status(200).send({ data })
  } catch (error) {
    console.log(error)
  }
}
//
