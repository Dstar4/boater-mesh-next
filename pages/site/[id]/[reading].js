import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

const ReadingsPage = props => {
  return (
    <div>
      <p> name: {props.gauge.siteName}</p>
      <p> siteCode: {props.gauge.siteCode}</p>
      <p> longitude: {props.gauge.geoLocation.longitude}</p>
      <p> latitude: {props.gauge.geoLocation.latitude}</p>
      {/* <p>Reading: {props.readings[0].gaugeReading}</p> */}
    </div>
  )
}

ReadingsPage.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:5000/api/gauges/${query.id}`)
  // const gauge = await fetch(`http://localhost:5000/api/gauges/${query.id}`)
  // const gaugeJson = await gauge.json()
  const data = await res.json()
console.log("data", data)
  return {
    // gauge: gaugeJson[0],
    gauge: data[0]
  }
}
export default ReadingsPage
