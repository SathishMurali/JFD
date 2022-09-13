import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Container className='flex-column text-center'>
        <Image src={require('../assets/icons/exam.gif')} width='100'></Image>
        <Image src={require('../assets/icons/pen.gif')} width='100'></Image>
        <Image src={require('../assets/icons/alarm.gif')} width='100'></Image>
        <Image src={require('../assets/icons/paper.gif')} width='100'></Image>
        <Image src={require('../assets/icons/paperclip.gif')} width='100'></Image>
      </Container>
      <Row className='mt-5 mb-5 w-75 text-center m-auto'>
        <Col>
          <Link to="/questions">
            <Card className='rounded-5 shadow'>
              <Card.Img src={require("../assets/images/cplus.png")} />
            </Card>
          </Link>
        </Col>
        <Col className=''>
          <Link to="/questions">
            <Card className='rounded-5 shadow'>
              <Card.Img src={require("../assets/images/cplus.png")} />
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/questions">
            <Card className='rounded-5 shadow'>
              <Card.Img src={require("../assets/images/cplus.png")} />
            </Card>
          </Link>
        </Col>
      </Row>
      <Row className='mt-5 mb-5 w-75 text-center m-auto'>
        <Col className=''>
          <Link to="/questions">
            <Card className='rounded-5 shadow'>
              <Card.Img src={require("../assets/images/cplus.png")} />
            </Card>
          </Link>
        </Col>
        <Col className=''>
          <Link to="/questions">
            <Card className='rounded-5 shadow'>
              <Card.Img src={require("../assets/images/cplus.png")} />
            </Card>
          </Link>
        </Col>
        <Col className=''>
          <Link to="/questions">
            <Card className='rounded-5 shadow'>
              <Card.Img src={require("../assets/images/cplus.png")} />
            </Card>
          </Link>
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

export default HomePage