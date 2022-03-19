import { ADD_POST, UPDATE_POST, REMOVE_POST } from '../actions'

const posts = (state = [], action) => {
  const {
    type, postid, name, postText, postImage,
  } = action

  switch (type) {
    case REMOVE_POST: {
      const removedstate = state.filter(obj => obj.postid !== postid)
      return removedstate
    }

    case UPDATE_POST: {
      const newstate = state.map(obj => {
        if (obj.postid === postid) {
          return {
            postid, name, postText, postImage,
          }
        }
        return obj
      })
      return newstate
    }

    case ADD_POST:
      return [...state, {
        postid, name, postText, postImage,
      }]
    default:
      return state
  }
}
export default posts
