export const ADD_TO_DO = 'ADD_TO_DO'
export const TOGGLE_STATUS = 'TOGGLE_STATUS'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UODATE_POST'
export const ADD_INTRO = 'ADD_INTRO'
export const REMOVE_POST = 'REMOVE_POST'
export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS'

let tempid = 0
export const addPost = (name, postText, postImage) => ({
  type: ADD_POST,
  postid: tempid++,
  name,
  postText,
  postImage,

})

export const removePost = (postid, name, postText, postImage) => ({
  type: REMOVE_POST,
  postid,
  name,
  postText,
  postImage,

})

export const updatePost = (postid, name, postText, postImage) => ({
  type: UPDATE_POST,
  postid,
  name,
  postText,
  postImage,

})

export const addIntro = (name, introText, introImage) => ({
  type: ADD_INTRO,
  name,
  introText,
  introImage,
})

export const STATUS_MAP = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  INCOMPLETE: 'INCOMPLETE',
}
