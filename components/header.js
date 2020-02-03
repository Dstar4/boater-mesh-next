import { Breadcrumb, Icon, Row, Col,Layout } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'

const {Header} = Layout
const GaugesHeader = () => {
  const router = useRouter()
  return (
    <>
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
        </Row>
      </Header>
      <Row justify='space-around' type='flex'>
        <Col
          span={20}
          style={{
            textAlign: 'right',
            height: 50,
            display: 'flex',
            justifyContent: 'flex-end',
            textTransform: 'uppercase'
          }}
        >
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
        </Col>
      </Row>
      <Row justify='space-around' type='flex'>
        <Col span={20}>
          <Breadcrumb>
            <Breadcrumb.Item href='/'>
              <Icon type='home' />
            </Breadcrumb.Item>
            <Breadcrumb.Item >
              <Icon type='user' />
              <span> {router.route.slice(1).toUpperCase()}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </>
  )
}
export default GaugesHeader
