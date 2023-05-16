import axios from 'axios'

 const BASEURL = 'http://localhost:8080/facebook-clone-modern'
 const API = axios.create({
   baseURL: BASEURL,
   //  timeout: 9000,
 })

 export const getUserCall = () => {}
 export const getAllUserCall = () => {}
export const getPostDetailsCall = (Id) => {
  return API.get(`/get-single-post?POST_ID=${Id}`)
}
 export const getAllPostCall = (_id) => {
   return API.get(`/get-all-post?${_id}`)
 }
 export const createPostCall = (data) => {
   return API.post('/create-one-post', { data })
 }
 export const likeCall = ({ userId, postId }) => {
   return API.put('/like-post', { USER_ID: userId, POST_ID: postId })
 }
 export const commentCall = () => {}
 export const editCommentCall = () => {}
 export const deleteCommentCall = () => {}
 export const editPostCall = () => {}
 export const deletePostCall = () => {}
 export const friendRequestCall = () => {}
 export const acceptFriendRequestCall = () => {}
 export const getStoriesCall = () => {}
 export const getStoryDetailsCall = () => {}
 export const deleteStoryCall = () => {}
 export const createStoryCall = () => {}
 export const sharePostCall = () => {}

