import React, { useState } from 'react'

export const NameInputPage = () => {
    const [name, setName] = useState('');
  return (
    <div>
        <h2>Please enter your name</h2>
        <input
        type='text'
        placeholder='Your name..'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button>Start Game</button>
    </div>
  )
}
