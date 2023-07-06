import { useEffect, useState } from 'react'
import { QuestionProp } from './type/QuestionProp'
import { AnswerProp } from './type/AnswerProp';

type QuestionCardProp = {
    question: QuestionProp;
    onAnswerSelect: (answerId: number) => void;
    hasNextQuestion: boolean;
    onQuizCompletion: () => void;
}


export const Question = (props: QuestionCardProp) => {
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



    }, [props.question]);

    const handleAnswerSelect = (answerId: number) => {
        setSelectedAnswer(answerId);

        setTimeout(() => {
            setSelectedAnswer(null);
            setShowAnswer(false);

        if (props.hasNextQuestion){
            props.onAnswerSelect(answerId);
        } else {
            props.onQuizCompletion();
        }
        
        }, 2000);
      };

      const getAnswerClass = (answer: AnswerProp) => {
        if (selectedAnswer !== null){
            if (answer.id === selectedAnswer && answer.correct){
                return 'correct';
            }else if (answer.id === selectedAnswer && !answer.correct){
                return 'incorrect';
            } else if (answer.correct){
                return 'correct-answer';
            }
        }
        return '';

      }
  return (
    <>
    <p>{props.question.question}</p>
    {showAnswers && (
    <ul>{props.question.answers.map(answer => (
    <li key={answer.id}>
        <button 
        className={getAnswerClass(answer)}
        onClick={() => handleAnswerSelect(answer.id)}>
            {answer.answer}
            </button>
        </li>
        ))}
        </ul>)}
    {selectedAnswer !== null && (
    <p>
        {props.question.answers.find((answer) => answer.id === selectedAnswer)
                ?.correct
                ? 'Correct!'
                : 'Incorrect!'}
            </p>)}
    
    </>
  )
}