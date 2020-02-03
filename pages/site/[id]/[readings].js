import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import {
  Breadcrumb,
  Icon,
  Row,
  Col,
  Layout,
  Card,
  Carousel,
  PageHeader,
  Button,
  Descriptions
} from 'antd'
import { Table } from 'antd'
import Nav from '../../../components/nav'
import Link from 'next/link'
import GaugesHeader from '../../../components/header'

const { Header, Content } = Layout

const columns = [
  {
    title: 'Value',
    dataIndex: 'value',
    sorter: true,
    render: value => `${value}`,
    width: '10%'
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    width: '10%'
  },
  {
    title: 'Timestamp',
    dataIndex: 'timeStamp',
    width: '10%'
  }
]

const ReadingsPage = props => {
  console.log(props)
  let dataSource = []

  props.readings.map(reading => {
    const dataItem = {
      key: reading.timeStamp,
      value: reading.value,
      unit: reading.unit,
      timeStamp: `${reading.timeStamp.time} ${reading.timeStamp.year}`
    }
    dataSource.push(dataItem)
  })
  return (
    <Layout>
      <GaugesHeader />
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
                style={{ marginTop: '2em' }}
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

ReadingsPage.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:5000/api/gauges/${query.id}`)
  // const gauge = await fetch(`http://localhost:5000/api/gauges/${query.id}`)
  // const gaugeJson = await gauge.json()
  const data = await res.json()
  console.log('data', data)
  return {
    site: data.site,
    readings: data.readings
  }
}
export default ReadingsPage
