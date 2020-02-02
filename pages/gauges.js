import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const GaugesPage = props => {
  // console.log(props)
  return (
    <div>
      {props.sites.map(site => (
        <Link href={`/site/${site.siteCode}/reading`}>
          <div className='list-item' key={site.id}>
            <p> name: {site.siteName}</p>
            <p> siteCode: {site.siteCode}</p>
            <p> longitude: {site.geoLocation.longitude}</p>
            <p> latitude: {site.geoLocation.latitude}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

GaugesPage.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:5000/api/gauges`)
  const data = await res.json()
  // console.log('data', data.value.timeSeries)
  return {
    sites: data.map(entry => entry)
  }
}
export default GaugesPage
