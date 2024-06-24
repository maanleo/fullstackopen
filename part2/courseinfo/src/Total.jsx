const Total = (props) => {
    const initialValue = 0
    return (
        <p style={{fontWeight:600}}>
            total of {props.parts.reduce(
                                    (sum,currentValue)=>
                                        sum+currentValue.exercises
                                    ,initialValue)} exercises
        </p>
    )
  }
  
  export default Total