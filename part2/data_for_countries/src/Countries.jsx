const Countries = ({countries,handleShow}) => {
    return (
        countries.map((country,index)=>
            <div key={index} style={{display:"flex",gap:'5px'}}>
                <span>
                    {country.name.common}
                </span>
                <button onClick={()=>handleShow(country.name.common)}>
                    show
                </button>
            </div>)
    )
  }
  
  export default Countries