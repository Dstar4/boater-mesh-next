import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel } from 'antd'
import Link from 'next/link'
import '../style.less'
// import image1 from '../static/images/image1.jpg'
import GaugesHeader from '../components/header'
const { Header, Content } = Layout

export default () => (
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
        <Content>
          <div>
            <div>
              <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src='/static/images/body-of-water-1487031.jpg'
                  style={{ height: '560px' }}
                />
              </h3>
            </div>
          </div>
          <Row gutter={16}>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt='image1'
                    style={{ width: '100%' }}
                    src='/static/images/body-of-water-between-green-leaf-trees-709552.jpg'
                  />
                }
              >
                <Card.Meta
                  title='Menu 1'
                  description='burger with patty and cheese'
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt='image2'
                    style={{ width: '100%' }}
                    src='/static/images/burger2.jpg'
                  />
                }
              >
                <Card.Meta
                  title='Menu 2'
                  description='burger on white ceramic plate'
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt='image3'
                    style={{ width: '100%' }}
                    src='/static/images/burger3.jpg'
                  />
                }
              >
                <Card.Meta
                  title='Menu 3'
                  description='burger with tomato and onion'
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt='image4'
                    style={{ width: '100%' }}
                    src='/static/images/burger4.jpg'
                  />
                }
              >
                <Card.Meta
                  title='Menu 4'
                  description='burger with vegetables'
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Col>
    </Row>
    <Row justify='space-around' type='flex' style={{ background: '#f9f9f9' }}>
      <Col md={8} xs={20} style={{ height: '40px', display: 'flex' }}>
        <div style={{ margin: 'auto 0px' }}>&copy; 2019 nextjs antd now.sh</div>
      </Col>
      <Col md={8} xs={20}>
        <div
          style={{
            margin: 'auto',
            height: '40px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type='facebook' />
          <Icon
            style={{ margin: 'auto 10px', fontSize: 20 }}
            type='instagram'
          />
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type='google' />
        </div>
      </Col>
    </Row>
  </Layout>
)
