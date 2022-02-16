import React, { useState } from 'react'
import { Form } from './Form'
import Voter from './Voter'

export const Post = ({ thread, depth }) => {
  const [replying, setReplying] = useState(false)
  const [replies, setReplies] = useState([])

  const handleReply = () => {
    setReplying(true)
  }

  return (
    <div className="shadow-md p-5 rounded">
      <Voter />
      <p className="text-blue-600 font-bold">{thread.name}</p>
      <p className="py-2">{thread.content}</p>
      {depth < 3 && <button type="button" onClick={handleReply} className="text-gray-400 text-sm">Reply</button>}
      <Replies replies={replies} depth={depth} />
      {replying
      && (
      <Form
        defaultText={`@${thread.name} `}
        allPosts={replies}
        setAllPosts={setReplies}
        setReplying={setReplying}
      />
      )}
    </div>
  )
}

export const Replies = ({ replies, depth }) => {
  let id = 0

  return (
    <>
      {replies.map(reply => <Post key={id++} thread={reply} depth={depth + 1} />)}
    </>
  )
}
