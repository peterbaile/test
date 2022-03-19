import React from 'react'
import IntroInput from './components/IntroInput'
import Intro from './components/Intro'
import Posts from './components/Posts'
import PostInput from './components/PostInput'

const clickhandle1 = e => {
  const targetDiv1 = document.getElementById('IntroInput')
  const btn1 = document.getElementById('toggle1')
  if (targetDiv1.style.display !== 'none') {
    targetDiv1.style.display = 'none'
    btn1.innerText = 'Edit or Create your Intro'
  } else {
    targetDiv1.style.display = 'block'
    btn1.innerText = 'Cancel'
  }
}

const clickhandle2 = e => {
  const targetDiv2 = document.getElementById('PostInput')
  const btn2 = document.getElementById('toggle2')
  if (targetDiv2.style.display !== 'none') {
    targetDiv2.style.display = 'none'
    btn2.innerText = 'Create a Post'
  } else {
    targetDiv2.style.display = 'block'
    btn2.innerText = 'Cancel'
  }
}

export function App() {
  return (
    <>
      <div style={{ display: 'none' }} id="IntroInput">
        <IntroInput />
      </div>
      <button style={{ float: 'right' }} type="submit" id="toggle1" onClick={() => clickhandle1()}>Edit or Create your Intro</button>
      <Intro />

      <div style={{ display: 'none' }} id="PostInput">
        <PostInput />
      </div>
      <button style={{ float: 'right' }} type="submit" id="toggle2" onClick={() => clickhandle2()}>Create a Post</button>
      <Posts />

    </>
  )
}

export default App
