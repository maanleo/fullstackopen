const Filter = ({filter,handleChangeFilter}) => {
    return (
        <div>
          find countries: <input value={filter} onChange={(e)=>handleChangeFilter(e)} />
        </div>
    )
  }
  
  export default Filter