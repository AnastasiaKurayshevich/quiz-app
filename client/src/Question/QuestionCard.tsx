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
  
export const QuestionCard = () => {
    
  return (
    <div>QuestionCard</div>
  )
}
