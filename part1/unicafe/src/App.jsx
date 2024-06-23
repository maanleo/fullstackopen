import { useState } from 'react'

const StatisticLine = ({text,value}) =>{
  return(
      <tr>
          <td>{text}</td>
          <td>{value}</td>
      </tr>
  )
}

const Statistics = ({good,bad,neutral}) => {
  const sum = good+bad+neutral;
  const positive = ((100.0*good)/sum).toFixed(2);
  const average = ((good*1.0+neutral*0.0+bad*-1.0)/sum).toFixed(2);
  if(sum===0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <table>
      <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={sum} />
          <StatisticLine text="average" value ={average} />
          <StatisticLine text="positive" value ={positive} />
      </tbody>
    </table>
  )
}

const Button = ({text,action}) => {
  return(
    <button onClick={action}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = ()=>{
    setGood((prev)=>prev+1);
  }
  const handleBad = ()=>{
    setBad((prev)=>prev+1);
  }
  const handleNeutral = ()=>{
    setNeutral((prev)=>prev+1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{display:'flex', gap:'10px'}}>
        <Button text='good' action={handleGood}></Button>
        <Button text='neutral' action={handleNeutral}></Button>
        <Button text='bad' action={handleBad}></Button>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App