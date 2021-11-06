import React from 'react'

const App = ({courses}) => {
  
  const Header = (props) => {
    return <h1>{props.name}</h1>
  }

  const Content = (props) => {
    return <>{props.part}</>
  }

  const Total = (props) => {
    const total = 
      props.parts.reduce((sum, course) => sum + course.exercises, 0)
    return <p>total of {total} exercises</p>;
  }

  const Course = ({courses}) => {
    return(
    <>
    <Header name = {courses.name}/>
    <Content 
      part = {courses.parts.map(course => <div key={courses.id} note={courses}>{course.name}  {course.exercises}<br/><br/></div>)}
    />
    <b><Total parts={courses.parts}/></b>
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