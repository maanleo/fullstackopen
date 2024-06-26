const Form = ({newName,newNumber,numberChange,nameChange,handleAdd}) => {
    return (
        <form>
        <div>
          name: <input value={newName} onChange={(e)=>nameChange(e)} />
        </div>
        <div>number: <input value={newNumber} onChange={(e)=>numberChange(e)}/></div>
        <div>
          <button type="submit" onClick={(e)=>handleAdd(e)}>add</button>
        </div>
      </form>
    )
  }
  
  export default Form