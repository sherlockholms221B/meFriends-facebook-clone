//in most case the error asociated with this file is hard to detect.
//Don't edith this file if you dont know what you are doning.

//ui loading state
const LOADING = 'LOADING'

//external call to web baseed api types
const CREATTE_POST = 'CREATTE_POST'
const DELETE_POST_ID = 'DELETE_POST_ID'
const EDIT_POST_ID = 'EDIT_POST_ID'
const GET_ALL_POST = 'GET_ALL_POST'
const GET_SINGLE_POST = 'GET_SINGLE_POST'
const GET_POST_DETAILS = 'GET_POST_DETAILS'
const LEAVE_A_COMMENT = 'LEAVE_A_COMMENT'
const DELETE_YOUR_COMMENT = 'DELETE_YOUR_COMMENT'
const EDIT_YOUR_COMMENT = 'EDIT_YOUR_COMMENT'
const LIKE_POST = 'LIKE_POST'
const GET_SINGLE_USER = 'EDIT_YOUR_COMMENT'
const GET_ALL_USER = 'GET_ALL_USER'
const SIGN_IN_A_USER = 'SIGN_IN_A_USER'
const SIGN_UP_A_USER = 'SIGN_UP_A_USER'

//file type
//video file type
const FILE_MP4_VIDEO = 'mp4'
const FILE_MOV_VIDEO = 'mov'
const FILE_WMV_VIDEO = 'wmv'
const FILE_AVI_VIDEO = 'avi'
const FILE_MKV_VIDEO = 'mkv'
const FILE_WEBM_VIDEO = 'webm'

//video file action type
const ADD_VIDEO_FILE = 'ADD_VIDEO_FILE'

//image file type
//

//image file action type
const ADD_iMAGE_FILE = 'ADD_iMAGE_FILE'

//defult ui actions
const SIDE_MENU = 'SIDE_MENU'
const SIDE_SHORT_CUT = 'SIDE_SHORT_CUT'
const SIDE_GROUP = 'SIDE_GROUP'

export {
  LOADING,
  SIDE_GROUP,
  SIDE_MENU,
  SIDE_SHORT_CUT,
  SIGN_UP_A_USER,
  SIGN_IN_A_USER,
  ADD_VIDEO_FILE,
  ADD_iMAGE_FILE,
  CREATTE_POST,
  DELETE_POST_ID,
  DELETE_YOUR_COMMENT,
  GET_ALL_POST,
  GET_SINGLE_POST,
  GET_ALL_USER,
  GET_POST_DETAILS,
  GET_SINGLE_USER,
  EDIT_POST_ID,
  EDIT_YOUR_COMMENT,
  LEAVE_A_COMMENT,
  LIKE_POST,

  /*/video file type/*/
  FILE_MP4_VIDEO,
  FILE_MOV_VIDEO,
  FILE_WMV_VIDEO,
  FILE_AVI_VIDEO,
  FILE_MKV_VIDEO,
  FILE_WEBM_VIDEO,
}
