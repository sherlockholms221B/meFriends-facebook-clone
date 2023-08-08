import axios from 'axios'
import { getUrl } from '../../config';

const BASEURL = `${getUrl()}/facebook-clone-modern`;
const API = axios.create({
  baseURL: BASEURL,
});

export const getUserCall = () => {};
export const getAllUserCall = () => {};
export const getAllPostCall = (_id) => {
  return API.get(`/get-all-post?${_id}`);
};
export const getPostDetailsCall = (Id) => {
  return API.get(`/get-single-post?POST_ID=${Id}`);
};
 export const createPostCall = (data) => {
   return API.post('/create-one-post', { data })
 }
 export const likeCall = ({ userId, postId }) => {
   return API.put('/like-post', { USER_ID: userId, POST_ID: postId })
 }
export const commentCall = ({ userId, postId, commentText }) => {
  return API.put('/comment-on-post', {
    USER_ID: userId,
    POST_ID: postId,
    COMMENT: commentText,
  });
};
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

//
export const getAllChatCall = (chat_id) => {
  return API.get(`/api/chat`, { CHAT_ID: chat_id })
}

