import { useEffect, useState } from "react";
import { AllResultsPage } from "./AllResultsPage";

type ResultPageProps = { 
    playerName: string;
    score: number;
}
export const ResultPage = (props: ResultPageProps) => {
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  const [showAllResults, setShowAllResults] = useState(false);

  useEffect(() => {
    const submitResult = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/question/save_result', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: props.playerName, score: props.score}),
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

    if (submissionStatus === '') {
      submitResult();
    }
  }, [submissionStatus]);

  const handleToggleResults = () => {
    setShowAllResults((prevShowAllResults) => !prevShowAllResults);
  };
  return (
    <div>
        <h2 className="congrats">Congrats!</h2>
        <h4>{props.playerName}, you have completed the Quiz</h4>
        <p className="final-score">Your final score is {props.score} / 10 </p>
        <button className="result-button" onClick={handleToggleResults}>{showAllResults ? 'Hide Results' : 'Show All Results'}</button>
      {showAllResults && <AllResultsPage />}
    </div>
  )
}
