//external api call

//action types
import {
  GET_ALL_POST,
  GET_SINGLE_POST,
  LEAVE_A_COMMENT,
  LIKE_POST,
} from '../../Functions/type';

export default function externalReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_POST:
      return [...action.payload];
    case GET_SINGLE_POST:
      if (state.length) {
        return [...state.filter((post) => post._id === action.payload[0]._id)];
      }
      return [...state, ...action.payload];
    //
    case LIKE_POST:
      return state.map((post) => {
        if (post._id === action.payload.postId) {
          // Check if the user has already liked the post
          const alreadyLiked = post.likes.some(
            (like) => like._ref === action.payload.userId
          );

          if (alreadyLiked) {
            // User already liked, so remove their like
            return {
              ...post,
              likes: post.likes.filter(
                (like) => like._ref !== action.payload.userId
              ),
            };
          } else {
            // User hasn't liked, so add their like
            return {
              ...post,
              likes: [
                ...action.payload.likes
              ],
            };
          }
        }
        return post;
      });

    case LEAVE_A_COMMENT:
      return state?.map((post) => {
        if (post._id === action.payload.postId) {
          // Create a new array of comments with the new comment at the top
          const comments = post?.comments === null ?[]:post?.comments
          const updatedComments = [action.payload.comment, ...comments];        

          return {
            ...post,
            comments: updatedComments,
          };
        }
        return post;
      });
    default:
      throw new Error('Unhandled action type');
  }
}
