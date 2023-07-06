import { useEffect, useState } from 'react'
import { QuestionProp } from './type/QuestionProp'


export const Question = (props: QuestionProp) => {
    const [showAnswers, setShowAnswer] = useState(false); 

    useEffect(() => {
        const waitWithAnswers = setTimeout(() => {
            setShowAnswer(true);
        }, 5000);

        return () => clearTimeout(waitWithAnswers);

    }, []);
  return (
    <>
    <p>{props.question}</p>
    {showAnswers && (<ul>{props.answers.map(answer => 
    <li key={answer.id}><button>{answer.answer}</button></li>)}</ul>)}
    </>
  )
}