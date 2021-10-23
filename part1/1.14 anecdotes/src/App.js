import React, { useState } from 'react'

const Header = (props) => {
  return <h1>{props.contents}</h1>
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
) 

const Vote = ({vote}) => (
<p>has {vote} votes</p>
)

const App = () => {

  const contents = {
      text1: "Anecdote of the day",
      text2: "Anecdote with most votes"
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const random = () => (
    Math.floor(Math.random() * 7)
  )

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const Anecdotevoting = () => {
    const copy = [...vote];
      copy[selected] += 1;
      setVote(copy);
  }

  const Mostvote = () => (
    <p>has {Math.max(...vote)} votes</p>
  )

  const BestAnecdote = () => (
    <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
  )
  
  return (
    <div>
      <Header contents = {contents.text1}/>
      {anecdotes[selected]}<br/>
      <Vote vote = {vote[selected]}></Vote>
      <Button handleClick={Anecdotevoting} text = 'vote'/>
      <Button handleClick={() => setSelected(random)} text = 'next anecdote'/>
      <Header contents = {contents.text2}/>
      <BestAnecdote anecdotes = {BestAnecdote}/>
      <Mostvote vote = {Mostvote}/>
    </div>
  )
}

export default App