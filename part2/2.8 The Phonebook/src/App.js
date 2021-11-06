import React, {useState} from 'react'
import Person from './Person'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas',
     number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      name: newName,
      number: newNumber
    }
    console.log("newname: " + newName)
    console.log("new number: " + newNumber)
    const existName = persons.filter(person => (person.name === newName))
    const existNumber = persons.filter(person => (person.number === newNumber))

    if (existName.length === 1) { //.length = returns the number of elements in that array
      alert(newName + ' is already added to phonebook');
    } else if (existNumber.length === 1) { 
      alert(newNumber + ' is already added to phonebook');
    } else {
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    }
  }
  
  const handleNameChange = (event) => {
    console.log('event.target.value: ' + event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('event.target.value: ' + event.target.value)
    setNewNumber(event.target.value)
  }

return(
  <>
    <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person}/>)}
  </>
)
}

export default App