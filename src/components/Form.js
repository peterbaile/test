import React, { useState } from 'react'

export const Form = ({
  defaultText, allPosts, setAllPosts, setReplying = null,
}) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [hasInput, setHasInput] = useState(false)

  if (!hasInput && name !== '' && content !== '') {
    setHasInput(true)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (setReplying) {
      setReplying(false)
    }

    setAllPosts([...allPosts, { name, content }])
    setName('')
    setContent('')
    setHasInput(false)
    e.target.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name..."
          onChange={e => setName(e.target.value)}
          className="block w-full p-2 my-4"
        />
        <textarea
          placeholder="Write a new post..."
          defaultValue={defaultText}
          onChange={e => setContent(e.target.value)}
          className="block w-full p-2 my-4"
        />
        <button type="submit" disabled={!hasInput} className="bg-blue-400 text-white p-2 rounded">Submit</button>
      </form>
    </>
  )
}

export const NewPost = ({ allPosts, setAllPosts }) => (
  <div className="shadow-lg object-center p-5 mb-5 rounded">
    <h2 className="font-bold text-xl">New Post</h2>
    <Form defaultText="" allPosts={allPosts} setAllPosts={setAllPosts} />
  </div>
)
