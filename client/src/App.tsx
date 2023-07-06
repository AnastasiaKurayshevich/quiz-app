
import { useState } from 'react'
import './App.css'
import { QuestionCard } from './Question/QuestionCard'
import { NameInputPage } from './ExtraPages/NameInputPage';

function App() {
  const [gameStarted, setGameStarted] = useState(false); 
  const [playerName, setPlayerName] = useState('');

  const handleGameStart = (name: string) => {
    setGameStarted(true);
    setPlayerName(name);
  }
  

  return (
    <>
    {!gameStarted ? (
      <NameInputPage onStartGame={handleGameStart}/>
    ) : (
    <QuestionCard  playerName = {playerName}/>
    )}
    </>
  )
}

export default App
