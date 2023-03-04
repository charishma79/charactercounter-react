import './index.css'

const CounterCard = props => {
  const {cardDetails} = props
  const {textInput, textLength} = cardDetails
  return (
    <li className="list-item">
      <p className="text">
        {textInput} : <span className="length">{textLength}</span>
      </p>
    </li>
  )
}

export default CounterCard
