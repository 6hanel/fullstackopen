import React from 'react'

const App = ({courses}) => {
  
  const Header = (props) => {
    return <h1>{props.name}</h1>
  }

  const Content = (props) => {
    return <>{props.part}</>
  }

  const Total = (props) => {
    return (
    <b>total of {props.exercises} exercises</b> 

    )
  }

  const Course = ({courses}) => {
    return(
    <>
    <Header name = {courses.name}/>
    <Content 
      part = {courses.parts.map(course => <div>{course.name}  {course.exercises}<br/><br/></div>)}
    />
    <Total exercises = {courses.parts.reduce((sum, course) => sum + course.exercises, 0)}/>
    </>
    )
  }
  
  return (
    <>
    <Course courses = {courses}/>
    </>
  )
}
export default App