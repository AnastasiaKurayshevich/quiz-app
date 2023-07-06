import React, { useState } from 'react'

type NameInputPageProps = {
    onStartGame: (name: string) => void;
  }

export const NameInputPage = (props : NameInputPageProps) => {
    const [name, setName] = useState('');
    const handleGameStart = () => {
        if (name.trim()) {
            props.onStartGame(name);

        }
    };

  return (
    <div>
        <h2>Please enter your name</h2>
        <input
        type='text'
        placeholder='Your name..'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleGameStart}>Start Game</button>
    </div>
  )
}
