import { Row, Col, Layout } from 'antd'
import Link from 'next/link'

const { Header } = Layout
const GaugesHeader = () => {
  return (
    <Header>
      <Row justify='space-around' type='flex'>
        <Col span={20}>
          <Row justify='space-around' type='flex'>
            <Col span={12} md={12} xs={24}>
              <span>Welcome to Boater Mesh</span>
            </Col>
            <Col span={12} md={12} xs={0}>
              <span className='ml-30 float-right'></span>
            </Col>
          </Row>
        </Col>

        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href='/gauges'>
            <a>Gauges</a>
          </Link>
        </div>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href='/about'>
            <a>About us</a>
          </Link>
        </div>
      </Row>
    </Header>
  )
}
export default GaugesHeader
