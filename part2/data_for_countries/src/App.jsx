import { useEffect, useState } from 'react'
import Countries from './Countries';
import Filter from './Filter';
import axios from 'axios'
import './App.css'
import OneCountry from './OneCountry';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [errorMsg,setErrorMsg] = useState(null);
  const [oneCountry,setOneCountry] = useState(null);
  const [weather,setWeather] = useState(null);
  const api_key = import.meta.env.VITE_API_KEY

  useEffect(()=>{
    getData();
  },[])

  function getData(){
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then((res)=>{
      setCountries(res.data);
    })
    .catch((error)=>
      console.error(error)
    )
  }

  const handleShow = (data)=>{
    fetchOne(data)
  }

  const fetchOne = async(name)=>{
    if(!oneCountry){
    const country = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`);
    setOneCountry(country.data);
    const weatherData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country.data.capital[0]}&APPID=${api_key}`);
    setWeather(weatherData.data);
    }
  }

  const handleChangeFilter=(e)=>{
    setFilter(e.target.value);
    const filtered = [...countries];
    const data = filtered.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
    if(data.length>10){
      setErrorMsg('Too many matches, specify another filter.');
      setOneCountry(null);
    }
    else if(data.length === 1){
      setErrorMsg(null);
      fetchOne(data[0].name.common);
    }
    else{
      setErrorMsg(null)
      setFilteredCountries(data);
      setOneCountry(null);
    }
  }

  return (
    <div>
      <h2>Countries</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter}/>
      {errorMsg? <p>{errorMsg}</p>
      :
      oneCountry?
      <OneCountry weather={weather} country={oneCountry}/>
      :
      <Countries countries={filteredCountries} handleShow={handleShow}/>
      }
    </div>
  )
}

export default App