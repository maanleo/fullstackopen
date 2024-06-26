import { useState } from 'react'
import Persons from './Persons';
import Form from './Form';
import Filter from './Filter';

const App = () => {
  const [originalData,setOriginalData] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [persons, setPersons] = useState(originalData);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleChange=(e)=>{
    setNewName(e.target.value);
  }
  const handleChangeFilter=(e)=>{
    setFilter(e.target.value);
    const filtered = [...originalData];
    setPersons(filtered.filter((person)=>person.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  const handleChangeNumber=(e)=>{
    setNewNumber(e.target.value);
  }
  const handleAdd =(e)=>{
    e.preventDefault();
    const names = persons.map((person)=>person.name)
    if(!names.includes(newName)){
    setPersons((prev)=>{return [...prev,{name:newName,number:newNumber,id:persons.length+1}]});
    setOriginalData((prev)=>{return [...prev,{name:newName,number:newNumber,id:persons.length+1}]})
    setNewName('');
    }
    else{
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter}/>
      <h2>Add a new</h2>
      <Form newName={newName} newNumber={newNumber} handleAdd={handleAdd} nameChange={handleChange} numberChange={handleChangeNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App