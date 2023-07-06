import React, { useEffect, useState } from 'react'
import { Question } from './Question';

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
    const [currentQuestion, setQuestion] = useState<Question>();

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await fetch('/api/quiz/questions');
            const data = await response.json();
            setQuestion(data);
          
          } catch (error) {
            console.error('Error fetching questions:', error);
          }
        };
    
        fetchQuestions();

    }, []);

    
  return (
    <div>
        <h4>Here is test question:</h4>
        {currentQuestion && <Question {...currentQuestion}/>}
    </div>
  )
}
