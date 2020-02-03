import { LineChart, Line, XAxis, YAxis, Label } from 'recharts'

const ReadingsChart = (props) => {
  const transformData = arr => {

    let returnArr = []
    arr.forEach(el => {
      returnArr.push(createData(el.rawTimeStamp, el.value))
    })
    return returnArr
  }
  return (
    <div className='chart-wrapper'>
      <LineChart
        width={1250}
        height={450}
        data={transformData(props.data)}
        margin={{
          top: 50,
          left: 50
        }}
      >
        <XAxis dataKey='time'>
          <Label angle={90} position='middle' style={{ textAnchor: 'middle' }}>
            Time
          </Label>
        </XAxis>
        <YAxis>
          <Label angle={90} position='left' style={{ textAnchor: 'middle' }}>
            {props.unit}
          </Label>
        </YAxis>
        <Line type='monotone' dataKey='amount' stroke='#556CD6' dot={false} />
      </LineChart>
    </div>
  )
}
export default ReadingsChart

function createData (time, amount) {
  if (time) {
    let newTime = time
      .split('')
      .slice(11, 16)
      .join('')
    return { newTime, amount }
  }
  return { time, amount }
}
