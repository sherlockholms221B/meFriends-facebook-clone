//import axios instance from api
import {
  commentCall,
  createPostCall,
  getAllChatCall,
  getAllPostCall,
  getPostDetailsCall,
  likeCall,
} from '../api';

//import action type from types
import {
  GET_ALL_POST,
  GET_SINGLE_POST,
  LEAVE_A_COMMENT,
  LIKE_POST,
} from '../type';
import {
  likeSound,
  commentSound,
  messageSound,
  errorSound,
} from '../../Assets/Audio';

const playSound = (soundInstance) => {
  // Mute the audio element to prevent sound from playing out loud
  const audioElement = new Audio(soundInstance);
  audioElement.loop = false;

  // Add 'playsinline' attribute to prevent the speaker icon from appearing
  audioElement.setAttribute('playsinline', '');

  // Play the audio
  audioElement.play();
};

//
export async function getAllPost(dispatch) {
  try {
    //
    const {
      data: {
        data: { posts },
      }, //returns the length message and sound
    } = await getAllPostCall();
    //
    console.log(posts);
    dispatch({ type: GET_ALL_POST, payload: posts });
    //
  } catch (error) {
    console.log(error);
  }
}

//
export async function getSinglePost(dispatch, postId) {
  try {
    //
    const {
      data: { posts, length, sound, message },
    } = await getPostDetailsCall(postId);
    //
    dispatch({ type: GET_SINGLE_POST, payload: posts });
    //
  } catch (error) {
    console.log(error);
  }
}

//
export const createPost = async (dispatch, document) => {
  try {
    const {
      topic,
      audience,
      file: { postfile },
      _creatorId,
    } = document;
    const VIDEO_TEMPLETE = postfile
      .filter((file) => file.filename.match('video'))
      .map((postfile) => {
        let template = {};
        template = {
          _key: postfile.assetId.concat(postfile.sha1hash),
          // extension: postfile.extension,
          filetype: postfile.filename,
          url: postfile.url,
          file: {
            _type: 'file',
            asset: {
              _type: 'reference',
              _ref: postfile?._id,
              _key: postfile.assetId.concat(postfile.sha1hash),
            },
          },
        };
        return { ...template };
      });
    const IMAGE_TEMPLETE = postfile
      .filter((file) => file.filename.match('image'))
      .map((postfile) => {
        let template = {};
        template = {
          _key: postfile.assetId.concat(postfile.sha1hash),
          // extension: postfile.extension,
          filetype: postfile.filename,
          url: postfile.url,
          file: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: postfile?._id,
              _key: postfile.assetId.concat(postfile.sha1hash),
            },
          },
        };
        return { ...template };
      });
    const documents = {
      _type: 'post',
      audience,
      topic,
      video: VIDEO_TEMPLETE,
      image: IMAGE_TEMPLETE,
      creatorId: _creatorId,
      postedBy: {
        _type: 'postedBy',
        _ref: _creatorId,
      },
    };
    const data = await createPostCall(documents);
    console.log(data);
    // dispatch({ type: GET_SINGLE_POST, payload: data })
  } catch (error) {}
};

export const likePost = async (dispatch, { userId, postId }) => {
  try {
    playSound(likeSound);
    const { data } = await likeCall({ userId, postId });
    const { likes, post } = data;

    // console.log(likes, post);
    //dispatch reducer action
    dispatch({ type: LIKE_POST, payload: { post, likes, postId, userId } });
  } catch (error) {
    console.log(error);
  }
};

//

export const createComment = async (
  dispatch,
  { userId, postId, commentText }
) => {
  try {
    console.log(userId, postId, commentText);
    // Make the API call to create a new comment
    const {
      data: { post, comment },
    } = await commentCall({ userId, postId, commentText });

    // Dispatch reducer action to update the state with the new comment
    dispatch({
      type: LEAVE_A_COMMENT,
      payload: { comment: comment, postId: post[0]._id },
    });
  } catch (error) {
    console.log(error);
  }
};

//

export async function getAllChat(setChats, setSelectedChat, chat_id) {
  try {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${user.token}`,
    //   },
    // }

    const {
      data: { chat },
    } = await getAllChatCall(chat_id);
    setChats(chat);
    setSelectedChat(chat[0]);
  } catch (e) {
    console.log(e);
  }
}

