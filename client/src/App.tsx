
import { useState } from 'react'
import './App.css'
import { QuestionCard } from './Question/QuestionCard'
import { NameInputPage } from './ExtraPages/NameInputPage';

function App() {
  const [gameStarted, setGameStarted] = useState(false); 

  const handleGameStart = () => {
    setGameStarted(true);
  }
  

  return (
    <>
    {!gameStarted ? (
      <NameInputPage onStartGame={handleGameStart}/>
    ) : (
    <QuestionCard  />
    )}
    </>
  )
}

export default App
