import { useEffect, useState } from 'react'
import { Question } from './Question';
import { QuestionProp } from './type/QuestionProp';
import { ResultPage } from '../FinalPage/ResultPage';
  
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
        const currentQuestion = questions[currentQuestionIndex];
        const selectedAnswer = currentQuestion.answers.find((answer) => answer.id === answerId);
        if (selectedAnswer && selectedAnswer.correct){
            setScore((prevScore) => prevScore + 1);
        }
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    const handleQuizCompletion = () => {
        setQuizCompleted(true);
    }


    
  return (
    <div>
        {!quizCompleted ? 
        (questions.length > 0 && ( 
        
        <><Question 
        question={questions[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
        hasNextQuestion={currentQuestionIndex < questions.length - 1}
        onQuizCompletion={handleQuizCompletion} 
        />
        <p>Score:{score}/5</p>
        </>
        )) 
        :
        ( <ResultPage score={score}/>)
}
    
    </div>
  )
}
