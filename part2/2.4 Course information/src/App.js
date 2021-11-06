import React from 'react'

const App = ({courses}) => {

  const Course = ({courses}) => {

    const Header = (props) => {
      return <h1>{props.name}</h1>
    }
  
    const Content = (props) => {
      const content = 
        props.part.map(course => <div key={courses.id} note={courses}>{course.name} {course.exercises}<br/><br/></div>)
      return <>{content}</>
    }
  
    const Total = (props) => {
      const total = 
        props.parts.reduce((sum, course) => sum + course.exercises, 0)
      return <b>total of {total} exercises</b>;
    }

    return(
    <>
    <Header name = {courses[0].name}/>
    <Content part = {courses[0].parts}/>
    <Total parts={courses[0].parts}/>
    <Header name = {courses[1].name}/>
    <Content part = {courses[1].parts}/>
    <Total parts={courses[1].parts}/>
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