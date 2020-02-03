import fetch from 'isomorphic-unfetch'
import { Table, Row, Col, Layout, PageHeader, Button, Descriptions } from 'antd'
import GaugesHeader from '../../../components/header'
import Chart from '../../../components/readingsChart'

const { Content } = Layout

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
      <div
        style={{
          backgroundColor: '#F5F5F5',
          padding: 24
        }}
      >
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title={props.site.siteName}
          // subTitle='This is a subtitle'
          // extra={[
          //   <Button key='3'>Operation</Button>,
          //   <Button key='2'>Operation</Button>,
          //   <Button key='1' type='primary'>
          //     Primary
          //   </Button>
          // ]}
        >
          <Descriptions size='small' column={3}>
            <Descriptions.Item label='Value Type'>
              {props.site.valueType}
            </Descriptions.Item>
            <Descriptions.Item label='Most Recent Reading'>
              {props.readings[0].value} {props.readings[0].unit}
            </Descriptions.Item>
            <Descriptions.Item label='TimeStamp'>
              {props.readings[0].timeStamp.time}{' '}
              {props.readings[0].timeStamp.year}
            </Descriptions.Item>
            <Descriptions.Item label='USGS ID'>
              {props.site.name}
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
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
            <Chart data={props.readings} unit={props.readings.unit} />
          </div>
        </Col>
        <Content style={{ display: 'flex', justifyContent: 'center' }}>
          <Col span={15}>
            <Row>
              <Table
                style={{ marginTop: '2em' }}
                columns={columns}
                dataSource={dataSource}
                pagination={false}
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
  return {
    site: data.site,
    readings: data.readings
  }
}
export default ReadingsPage
