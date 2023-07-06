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

   
        const fetchQuestions = async () => {
          try {
            const response = await fetch('/api/quiz/questions');
            const data = await response.json();
          
          } catch (error) {
            console.error('Error fetching questions:', error);
          }
        };
    
        fetchQuestions();
        

    
  return (
    <div>QuestionCard</div>
  )
}
