import React from 'react'
import { connect } from 'react-redux'
import { updatePost } from '../actions'

const PostEdit = ({ updatePost: updatePost2, postid }) => {
  const [state, setState] = React.useState({
    postid,
    name: '',
    postText: '',
    postImage: '',
  })
  const [tracker, setTracker] = React.useState({
    postid,
    name: '',
    postText: '',
    postImage: '',
  })

  const updateinputs = e => {
    const { target } = e
    const { value } = target
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  const submitinputs = e => {
    const { name, postText, postImage } = state
    setTracker({
      ...state,
    })
    e.preventDefault()
    updatePost2(postid, state.name, state.postText, state.postImage)
  }

  const clickhandle1 = e => {
    const targetDiv1 = document.getElementById(`${postid}`)
    const btn1 = document.getElementById('toggle3')
    if (targetDiv1.style.display !== 'none') {
      targetDiv1.style.display = 'none'
      btn1.innerText = 'Edit your Post'
      setState({
        name: '',
        postText: '',
        postImage: '',
      })
    } else {
      targetDiv1.style.display = 'block'
      btn1.innerText = 'Cancel'
      setState({
        ...tracker,
      })
    }
  }

  return (
    <>
      <form
        id={postid}
        onSubmit={submitinputs}
        style={{ display: 'none' }}
      >
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder="Edit post name"
          onChange={updateinputs}
        />
        <br />
        <input
          type="text"
          name="postText"
          value={state.postText}
          placeholder="Edit post content"
          onChange={updateinputs}
        />
        <br />
        <input
          type="text"
          name="postImage"
          value={state.postImage}
          placeholder="Edit post image"
          onChange={updateinputs}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <button type="submit" id="toggle3" onClick={() => clickhandle1()}>Edit your Post</button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  updatePost: (postid, name, postText, postImage) => dispatch(updatePost(postid, name, postText, postImage)),
})

export default connect(null, mapDispatchToProps)(PostEdit)
