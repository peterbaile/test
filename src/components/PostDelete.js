import React from 'react'
import { connect } from 'react-redux'
import { removePost } from '../actions'

const PostDelete = ({ removePost: removePost2, postid }) => {
  const [state, setState] = React.useState({
    postid,
    name: '',
    postText: '',
    postImage: '',
  })

  const clickhandle = e => {
    removePost2(postid, state.name, state.postText, state.postImage)
  }

  return (
    <button type="submit" onClick={() => clickhandle()}> Delete Post </button>
  )
}

const mapDispatchToProps = dispatch => ({
  removePost: (postid, name, postText, postImage) => dispatch(removePost(postid, name, postText, postImage)),
})

export default connect(null, mapDispatchToProps)(PostDelete)
