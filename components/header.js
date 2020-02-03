import { Row, Col, Layout } from 'antd'
import Link from 'next/link'

const { Header } = Layout
const GaugesHeader = () => {
  return (
    <Header>
      <Row justify='space-between' type='flex'>
        <Col span={12} md={8} xs={24} style={{ marginLeft: '20px' }}>
          <span>Welcome to Boater Mesh</span>
        </Col>
        <Col span={8} md={8} xs={12}>
          <Row justify='space-around' type='flex'>
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
        </Col>
      </Row>
      <Row />
    </Header>
  )
}
export default GaugesHeader
