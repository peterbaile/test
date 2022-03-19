import { ADD_INTRO } from '../actions'

const default_state = {}
const intro = (state = default_state, action) => {
  const {
    type, name, introText, introImage,
  } = action

  switch (type) {
    case ADD_INTRO:
      return { name, introText, introImage }
    default:
      return state
  }
}
export default intro
