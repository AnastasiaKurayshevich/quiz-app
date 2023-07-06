import { useEffect, useState } from 'react'
import { Question } from './Question';
import { QuestionProp } from './type/QuestionProp';
  
export const QuestionCard = () => {
    const [questions, setQuestions] = useState<QuestionProp[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/question/random');
            const data = await response.json();
            setQuestions(data);
            setCurrentQuestionIndex(0);
          } catch (error) {
            console.error('Error fetching questions:', error);
          }
        };
    
        fetchQuestions();

    }, []);

    const currentQuestion = questions[currentQuestionIndex];
    
  return (
    <div>
        <h4>Here is test question:</h4>
        {currentQuestion && <Question {...currentQuestion}/>}
    </div>
  )
}
