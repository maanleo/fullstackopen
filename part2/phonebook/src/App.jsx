import { useEffect, useState } from 'react'
import Persons from './Persons';
import Form from './Form';
import Filter from './Filter';
import axios from 'axios'
import './App.css'

const App = () => {
  const [originalData,setOriginalData] = useState([]);
  const [persons, setPersons] = useState(originalData);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [successMsg,setSuccessMsg] = useState(null);
  const [errorMsg,setErrorMsg] = useState(null);

  useEffect(()=>{
    getData();
  },[])

  function getData(){
    axios.get('http://localhost:3001/persons')
    .then((res)=>{
      setOriginalData(res.data);
      setPersons(res.data);
    })
    .catch((error)=>
      console.error(error)
    )
  }

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
  const handleAdd =async(e)=>{
    try{
    e.preventDefault();
    const names = persons.map((person)=>person.name)
    if(!names.includes(newName)){
      await axios.post(`http://localhost:3001/persons`,{name:newName,number:newNumber});
      getData();
      setSuccessMsg(`${newName} has been added successfully`);
      setTimeout(() => {
        setSuccessMsg(null);
      }, 2000);
    setNewName('');
    setNewNumber('');
    }
    else{
      const existingId = persons.find((name)=>name.name===newName).id;
      if(window.confirm(`${newName} is already added to phonebook, replace the old phone number with new one?`)){
        await axios.patch(`http://localhost:3001/persons/${existingId}`,{number:newNumber});
        getData();
        setSuccessMsg(`Phone number for ${newName} has been added updated`);
      setTimeout(() => {
        setSuccessMsg(null);
      }, 2000);
      setNewName('');
    setNewNumber('');
      }
    }
  }catch(error){
    console.log(error);
  }
  }

  const handleDelete = async(id)=>{
    try{
    const newData = await axios.delete(`http://localhost:3001/persons/${id}`);
    setSuccessMsg(`Record has been removed successfully`);
      setTimeout(() => {
        setSuccessMsg(null);
      }, 2000);
    getData();
    }
    catch(error){
      console.log(error);
      setErrorMsg(`Record has been removed already`);
      setTimeout(() => {
        setErrorMsg(null);
      }, 2000);
    }
  }

  return (
    <div>
      {successMsg && <p className='success'>{successMsg}</p>}
      {errorMsg && <p className='error'>{errorMsg}</p>}
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter}/>
      <h2>Add a new</h2>
      <Form newName={newName} newNumber={newNumber} handleAdd={handleAdd} nameChange={handleChange} numberChange={handleChangeNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App