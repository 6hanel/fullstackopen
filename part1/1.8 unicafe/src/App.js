import React from 'react'
import {useState} from 'react';

const Header = (props) => {
  return <h1>{props.title}</h1>
}

const Header2 = (props) => {
  return <h1>{props.title2}</h1>
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const title = "give feedback"
  const title2 = "statistic"

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad 
  const average = (good - bad) / (good + neutral + bad)
  const positive = (good/(good + neutral + bad))*100 + "%"

  const Statistic  = (props) => {
    return(
      <>
      <p>{props.text} {props.value}</p>
      </>
    )
  }

  return (
    <div>
      <Header title = {title}/>
      <Button handleClick={() => setGood(good + 1)}  text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)}  text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)}  text="bad"/>
      <Header2 title2 = {title2}/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistic text ="all" value={all}/>
      <Statistic text ="average" value={average}/>
      <Statistic text ="positive" value={positive}/>
    </div>
  )
}

export default App