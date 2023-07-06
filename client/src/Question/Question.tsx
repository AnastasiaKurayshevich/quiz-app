import { useEffect, useState } from 'react'
import { QuestionProp } from './type/QuestionProp'


export const Question = (props: QuestionProp) => {
    const [showAnswers, setShowAnswer] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); 

    useEffect(() => {
        const waitWithAnswers = setTimeout(() => {
            setShowAnswer(true);
        }, 5000);

        const showOnClick = () => {
            setShowAnswer(true);
        };

        window.addEventListener('click', showOnClick);

        return () => {
            clearTimeout(waitWithAnswers);
            window.removeEventListener('click', showOnClick);
        };



    }, []);

    const handleAnswerSelect = (answerId: number) => {
        setSelectedAnswer(answerId);
      };
  return (
    <>
    <p>{props.question}</p>
    {showAnswers && (<ul>{props.answers.map(answer => 
    <li key={answer.id}>
        <button onClick={() => handleAnswerSelect(answer.id)}>{answer.answer}</button>
        </li>)}</ul>)}
    {selectedAnswer !== null && (<p>
              {props.answers.find((answer) => answer.id === selectedAnswer)
                ?.correct
                ? 'Correct!'
                : 'Incorrect!'}
            </p>)}
    
    </>
  )
}