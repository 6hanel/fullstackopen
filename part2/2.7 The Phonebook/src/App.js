import React, {useState} from 'react'
import Person from './Person'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      name: newName
    }
    console.log("newname: " + newName)
    const existName = persons.filter(person => (person.name === newName))

    if (existName.length === 1) { //.length = returns the number of elements in that array
      alert(newName + 'is already added to phonebook');
    } else {
    setPersons(persons.concat(nameObject))
    setNewName('')
    }
  }
  
  const handleNameChange = (event) => {
    console.log('event.target.value: ' + event.target.value)
    setNewName(event.target.value)
  }

return(
  <>
    <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person}/>)}
  </>
)
}

export default App