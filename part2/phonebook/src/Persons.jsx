const Persons = ({persons,handleDelete}) => {
    return (
        persons.map((person)=>
            <div key={person.id} style={{display:"flex",gap:'5px'}}>
                <span>
                    {person.name} {person.number}
                </span>
                <button onClick={()=>handleDelete(person.id)}>
                    delete
                </button>
            </div>)
    )
  }
  
  export default Persons