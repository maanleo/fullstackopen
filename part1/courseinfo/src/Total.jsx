const Total = (props) => {
    const initialValue = 0
    return (
        <p>
            Number of exercises {props.parts.reduce(
                                    (sum,currentValue)=>
                                        sum+currentValue.exercises
                                    ,initialValue)}
        </p>
    )
  }
  
  export default Total