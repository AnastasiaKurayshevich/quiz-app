import { useState } from 'react'

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
        <h1>Welcome to Quiz Game!</h1>
        <h3>You will be given 10 questions to answer, each has 3 options to chose from</h3>
        <h3>Good luck!</h3>
        <h2 className='input__name'>Please enter your name</h2>
        <input className='input'
        type='text'
        placeholder='Your name..'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button className='input_button' onClick={handleGameStart}>Start Game</button>
    </div>
  )
}
