type ResultPageProps = { 
    playerName: string;
    score: number;
}
export const ResultPage = (props: ResultPageProps) => {
  return (
    <div>
        <h2>Congrats!</h2>
        <p>you have completed the Quiz</p>
        <p>Your final score is {props.score} / 5 </p>
    </div>
  )
}
