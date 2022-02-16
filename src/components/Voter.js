import React, { useState } from 'react'

const Voter = () => {
  const [vote, setVote] = useState(0)

  return (
    <div className="float-right">
      <button type="button" onClick={() => setVote(vote + 1)}>^</button>
      <p className="font-bold">{vote}</p>
      <button type="button" onClick={() => setVote(vote - 1)}>v</button>
    </div>
  )
}

export default Voter
