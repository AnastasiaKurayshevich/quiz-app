import React from 'react'

type Answer = {
    id: number;
    question_id: number;
    answer: string;
    isCorrect: boolean; 
  }
  
  type Question = {
    id: number;
    question: string;
    answers: Answer[];
  }

export const Question = (props: Question) => {
  return (
    <>
    <p>{props.question}</p>
    <p>{props.answers.map(answer => 
    <li key={answer.id}>{answer.answer}</li>)}</p>
    </>
  )
}