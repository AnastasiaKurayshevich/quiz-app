import React, { useEffect, useState } from 'react';

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

type Props  = {
  question: Question;
}

const TestComponent: React.FC<> = () => {
  const [test, setTest] = useState<any>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/question/random');
        const data = await response.json();
        setTest(data);
      } catch (error) {
        console.error('Error fetching test:', error);
      }
    };

    fetchTest();
  }, []);

  return (
    <div>
      {test ? (
        <div>
          <h1>Test Question Data</h1>
          <p>Question: {test.question}</p>
          <p>{test.answers.map(answer => (
          <li key={answer.id}>{answer.answer}</li>
          ))}</p>
        </div>
      ) : (
        <p>Loading test data...</p>
      )}
    </div>
  );
};

export default TestComponent;








