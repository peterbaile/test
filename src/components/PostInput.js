import React from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import { addPost } from '../actions'

const PostInput = ({ addPost: addPost2 }) => {
  const tracker = {
    name: 'Enter post name',
    postText: 'Enter post description',
    postImage: 'Add an image',

  }
  const [state, setState] = React.useState({
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
    // console.log(postid)
    e.preventDefault()
    addPost2(state.name, state.postText, state.postImage)
  }

  const clickhandle = e => {
    setState({
      name: '',
      postText: '',
      postImage: '',
    })
  }

  return (
    <Wrapper>
      <form
        onSubmit={submitinputs}
      >
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder={tracker.name}
          onChange={updateinputs}
        />
        <br />
        <input
          type="text"
          name="postText"
          value={state.postText}
          placeholder={tracker.postText}
          onChange={updateinputs}
        />
        <br />
        <input
          type="text"
          name="postImage"
          value={state.postImage}
          placeholder={tracker.postImage}
          onChange={updateinputs}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  addPost: (name, postText, postImage) => dispatch(addPost(name, postText, postImage)),
})

export default connect(null, mapDispatchToProps)(PostInput)

const Wrapper = s.div`
  border: 10px solid grey;
  padding: 5;
`
