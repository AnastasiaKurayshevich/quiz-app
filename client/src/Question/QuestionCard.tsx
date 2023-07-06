import { useEffect, useState } from 'react'
import { Question } from './Question';
import { QuestionProp } from './type/QuestionProp';
  
export const QuestionCard = () => {
    const [questions, setQuestions] = useState<QuestionProp[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/question/random');
            const data = await response.json();
            setQuestions(data.questions);
            console.log(data);
          } catch (error) {
            console.error('Error fetching questions:', error);
          }
        };
    
        fetchQuestions();

    }, []);

    const handleAnswerSelect = (answerId: number) => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    const handleQuizCompletion = () => {
        setQuizCompleted(true);
    }


    
  return (
    <div>
        {questions.length > 0 && ( 
        <Question 
        question={questions[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
        hasNextQuestion={currentQuestionIndex < questions.length - 1}
        onQuizCompletion={handleQuizCompletion} 
        />
        )}
    </div>
  )
}
