import React from 'react'
import { Post } from './Post'

const AllPosts = ({ allPosts }) => {
  let id = 0

  return (
    <>
      {allPosts.map(post => <Post key={id++} thread={post} depth={1} />)}
    </>
  )
}

export default AllPosts
