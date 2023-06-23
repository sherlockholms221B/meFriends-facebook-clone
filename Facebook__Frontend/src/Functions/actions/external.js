//import axios instance from api
import {
  createPostCall,
  getAllChatCall,
  getAllPostCall,
  getPostDetailsCall,
  likeCall,
} from '../api'

//import action type from types
import { GET_ALL_POST, GET_SINGLE_POST, LIKE_POST } from '../type';
import {
  likeSound,
  commentSound,
  messageSound,
  errorSound,
} from '../../Assets/Audio';

const playSound = (soundInstance) => {
  //checking conditions comes latter.
  let audioInstance = new Audio(soundInstance);
  audioInstance.loop = false;
  audioInstance.play();
};

//
export async function getAllPost(dispatch) {
  try {
    //
    const {
      data: { posts }, //returns the length message and sound
    } = await getAllPostCall();
    //
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
    const { likes, posts } = data;

    //dispatch reducer action
    dispatch({ type: LIKE_POST, payload: { posts, likes } });
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
    } = await getAllChatCall(chat_id)
    setChats(chat)
    setSelectedChat(chat[0])
  } catch (e) {
    console.log(e)
  }
}