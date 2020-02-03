import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { Table, Breadcrumb, Icon, Layout, Row, Col } from 'antd'
import Link from 'next/link'
import GaugesHeader from '../components/header'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name}`,
    width: '33%'
  },
  {
    title: 'Longitude',
    dataIndex: 'longitude',
    width: '33%'
  },
  {
    title: 'Latitude',
    dataIndex: 'latitude',
    width: '33%'
  }
]

const {  Content } = Layout

const GaugesPage = props => {
  const handleClick = (router, rowIndex) => {
    router.push(`/site/${rowIndex.key}/readings`)
  }
  const router = useRouter()

  let dataSource = []
  props.sites.map(site => {
    const dataItem = {
      key: site.siteCode,
      name: site.siteName,
      longitude: site.geoLocation.longitude,
      latitude: site.geoLocation.latitude
    }
    dataSource.push(dataItem)
  })
  return (
    <Layout>
      <GaugesHeader/>
      <Row justify='space-around' type='flex'>
      <Col
        span={20}
        style={{
          paddingTop: '30px',
          paddingBottom: '30px',
          minHeight: '500px'
        }}
      >
        <div>
          <h3 style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src='/static/images/body-of-water-1487031.jpg'
              style={{ height: '560px' }}
            />
          </h3>
        </div>
      </Col>
        <Content style={{ display: 'flex', justifyContent: 'center' }}>
          <Col span={15}>
            <Row>
              <Table
                onRow={rowIndex => {
                  return {
                    onClick: () => {
                      handleClick(router, rowIndex)
                    }
                  }
                }}
                columns={columns}
                dataSource={dataSource}
              />
            </Row>
          </Col>
        </Content>
      </Row>
    </Layout>
  )
}

GaugesPage.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:5000/api/gauges`)
  const data = await res.json()
  return {
    sites: data.map(entry => entry)
  }
}
export default GaugesPage
