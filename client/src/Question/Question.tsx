import { useState } from 'react'
import { QuestionProp } from './type/QuestionProp'


export const Question = (props: QuestionProp) => {
    const [showAnswers, setShowAnswer] = useState(false); 
  return (
    <>
    <p>{props.question}</p>
    <ul>{props.answers.map(answer => 
    <li key={answer.id}><button>{answer.answer}</button></li>)}</ul>
    </>
  )
}