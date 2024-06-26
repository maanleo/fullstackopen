const Filter = ({filter,handleChangeFilter}) => {
    return (
        <div>
          filter shown with: <input value={filter} onChange={(e)=>handleChangeFilter(e)} />
        </div>
    )
  }
  
  export default Filter