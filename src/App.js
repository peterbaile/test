import React, { useState } from 'react'
import Title from './components/Title'
import { NewPost } from './components/Form'
import AllPosts from './components/AllPosts'

const App = () => {
  const [allPosts, setAllPosts] = useState([])

  return (
    <div className="mx-auto my-12 w-3/5">
      <Title />
      <NewPost allPosts={allPosts} setAllPosts={setAllPosts} />
      <AllPosts allPosts={allPosts} />
    </div>
  )
}

export default App
