export type QuestionProp = {
    id: number;
    question: string;
    answers: {
        id: number;
        question_id: number;
        answer: string;
        correct: boolean; 
      }[];
  }