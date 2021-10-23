import React from 'react'
const Header = (props) => {
    return ( 
        <h1>Half Stack application development </h1> 
    )
}
const Part = (props) => {
    return ( 
        <p> {props.part} {props.exercise} </p> 
    )
}
const Content = (props) => {
    return ( 
        <>
        <Part part = 'Fundamentals of React'
        exercise = {10}/> 
	    <Part part = 'Using props to pass data'
        exercise = {7}/> 
	    <Part part = 'State of a component'
        exercise = {14}/> 
		</>
    )
}
const Total = (props) => {
    return ( 
        <p>Number of exercises { props.total } </p> 
    )
}
const App = () => {
   return ( 
    <>
    <Header/>
    <Content/>
    <Total total = { 10 + 7 + 14 }/> 
	</>
)
}
export default App
