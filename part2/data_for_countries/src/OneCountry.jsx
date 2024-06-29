const OneCountry = ({country,weather}) => {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <h2>{country.name.common}</h2>
            <div>
                capital {country.capital[0]}
            </div>
            <div>
                area {country.area}
            </div>
            <h4>Languages</h4>
            <ul>
            {
                Object.values(country.languages).map((lang,index)=>{
                    return <li key={index}>{lang}</li>
                })
            }
            </ul>
            <img src={country.flags.svg} width={200} height={100} style={{border:'1px solid black',objectFit:'cover'}}></img>
            <h4>{`Weather in ${country.capital[0]}`}</h4>
            {weather &&
            <div>
            <div>
                temperature {(weather.main.temp -273.15).toFixed(2)} Celcius
            </div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width={100} height={100}></img>
            <div>wind {weather.wind.speed} m/s</div>
            </div>
            }
        </div>)
  }
  
  export default OneCountry