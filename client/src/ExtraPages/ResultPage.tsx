import { useEffect, useState } from "react";

type ResultPageProps = { 
    playerName: string;
    score: number;
}
export const ResultPage = (props: ResultPageProps) => {
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  useEffect(() => {
    const submitResult = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/save_result', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: props.playerName, score: props.score + "/ 5"}),
        });

        if (response.ok) {
          setSubmissionStatus('Success');
        } else {
          setSubmissionStatus('Error');
        }
      } catch (error) {
        console.error('Error submitting result:', error);
        setSubmissionStatus('Error');
      }
    };

    submitResult();
  }, [props.playerName, props.score]);
  return (
    <div>
        <h2>Congrats!</h2>
        <p>{props.playerName}, you have completed the Quiz</p>
        <p>Your final score is {props.score} / 5 </p>
        {submissionStatus && <p>Submission status: {submissionStatus}</p>}
    </div>
  )
}
