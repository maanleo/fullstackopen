const StatisticLine = ({text,value}) =>{
    return(
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    return(
      <table>
        <tbody>
            <StatisticLine text="good" value ={1} />
            <StatisticLine text="neutral" value ={2} />
            <StatisticLine text="bad" value ={3} />
        </tbody>
      </table>
    )
  }