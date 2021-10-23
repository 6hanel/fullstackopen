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

const StatisticLine = (props) => {
  return ( 
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}

const Statistic = (props) => {
  if (props.content[3].value === 0){
    return(
      <div>No feedback given</div>
    )
  }
  return (
    <>
      <StatisticLine text = {props.content[0].text} value ={props.content[0].value}/>
      <StatisticLine text = {props.content[1].text} value ={props.content[1].value}/>
      <StatisticLine text = {props.content[2].text} value ={props.content[2].value}/>
      <StatisticLine text = {props.content[3].text} value ={props.content[3].value}/>
      <StatisticLine text = {props.content[4].text} value ={props.content[4].value}/>
      <StatisticLine text = {props.content[5].text} value ={props.content[5].value}/>    
    </>
  )
}

const App = () => {
  const title = "give feedback"
  const title2 = "statistic"

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const content  = [
    {
      text: "good ",
      value: good 
    },
    {
      text: "neutral ",
      value:  neutral 
    },
    {
      text: "bad ",
      value: bad 
    },
      {
      text: "all ", 
      value: good + neutral + bad 
    },
    {
      text: "average ",
      value: (good - bad) / (good + neutral + bad)
    },
    {
      text: "positive",
      value: (good/(good + neutral + bad))*100 + "%"
    }
  ]

  return (
    <div>
      <Header title = {title}/>
      <Button handleClick={() => setGood(good + 1)}  text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)}  text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)}  text="bad"/>
      <Header2 title2 = {title2}/>
      <Statistic content = {content}/>
    </div>
  )
}

export default App