import axios from 'axios'

const BASEURL = 'http://localhost:5000/facebook-clone-modern'

const getUserCall = () => {}
const getAllUserCall = () => {}
const getPostDetailsCall = () => {}
const getAllPostCall = (_id) => {
  return axios.get(`${BASEURL}/get-all-post?${_id}`)
}
const createPostCall = () => {}
const commentCall = () => {}
const editCommentCall = () => {}
const deleteCommentCall = () => {}
const likeCall = () => {}
const editPostCall = () => {}
const deletePostCall = () => {}
const friendRequestCall = () => {}
const acceptFriendRequestCall = () => {}
const getStoriesCall = () => {}
const getStoryDetailsCall = () => {}
const deleteStoryCall = () => {}
const createStoryCall = () => {}
const sharePostCall = () => {}

export {
  getUserCall,
  getAllUserCall,
  getPostDetailsCall,
  getAllPostCall,
  createPostCall,
  commentCall,
  editCommentCall,
  deleteCommentCall,
  likeCall,
  editPostCall,
  deletePostCall,
  friendRequestCall,
  acceptFriendRequestCall,
  getStoriesCall,
  getStoryDetailsCall,
  deleteStoryCall,
  createStoryCall,
  sharePostCall,
}
