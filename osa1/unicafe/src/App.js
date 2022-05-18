import { useState } from 'react'

const Header = () => <div><h1>give feedback</h1></div>

const Statistics = () => <div><h1>statistics</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const DisplayGood = props => <div>good {props.value}</div>
const DisplayNeutral = props => <div>neutral {props.value}</div>
const DisplayBad = props => <div>bad {props.value}</div>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    console.log('value now:', newValue)
    setGood(newValue)
  }
  const setToNeutral = newValue => {
    console.log('value now:', newValue)
    setNeutral(newValue)
  }
  const setToBad = newValue => {
    console.log('value now:', newValue)
    setBad(newValue)
  }    
  return (
    <div>
      <Header/>
      <Button handleClick={() => setToGood(good+1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setToBad(bad+1)} text="bad" />
      <Statistics/>
      <DisplayGood value={good} />
      <DisplayNeutral value={bad} />
      <DisplayBad value={neutral} />
    </div>
  )
}

export default App
