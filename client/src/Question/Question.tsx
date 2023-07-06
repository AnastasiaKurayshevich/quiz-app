import { QuestionProp } from './type/QuestionProp'


export const Question = (props: QuestionProp) => {
  return (
    <>
    <p>{props.question}</p>
    <p>{props.answers.map(answer => 
    <li key={answer.id}><button>{answer.answer}</button></li>)}</p>
    </>
  )
}