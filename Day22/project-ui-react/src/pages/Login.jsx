import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/esm/Image'

import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons'
import Credentials from '../components/Credentials';


const Login = () => {
  return (
    <div className='mx-5 my-5'>
      <Row>
        <Col className='mx-5 my-4'>
          <Image src={require('../assets/images/login_image.jpg')} rounded />
          <h6 className='m-5'><a href='#register' className='text-decoration-underline text-dark'>Create an Account</a></h6>
        </Col>
        <Col className='mx-5 my-5'>
          <Form className='w-75'>
            <div><h2 className='mb-3 fw-bold'>Sign in</h2></div>
            <Form.Group controlId='formBasicEmail'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faAt}
                type="email"
                placeHolder="Your Email"
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faKey}
                type="password"
                placeHolder="Your Password"
              />
            </Form.Group>
            <button type='submit' className='btn btn-primary mt-2 ms-4 w-50'>Login</button>
          </Form>
        </Col>
      </Row>
    </div >
  )
}

export default Login