import React, { useEffect, useState } from 'react'
import { Question } from './Question';
import { QuestionProp } from './type/QuestionProp';
  
export const QuestionCard = () => {
    const [currentQuestion, setQuestion] = useState<QuestionProp>();

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/question/random');
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
