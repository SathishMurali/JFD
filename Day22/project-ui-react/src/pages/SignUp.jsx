import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/esm/Image'


import { faCalendar, faPhone, faContactBook, faUser, faKey, faAt } from '@fortawesome/free-solid-svg-icons';
import Credentials from '../components/Credentials';

const SignUp = () => {
  return (
    <div className='mx-5 my-4'>
      <Row>
        <Col className='mx-5 mt-3'>
          <Form className='w-75'>
            <div><h2 className='mb-3 fw-bold'>Sign in</h2></div>
            <Form.Group controlId='formBasicName'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faUser}
                type="text"
                placeHolder="Your Name"
              />
            </Form.Group>
            <Form.Group controlId='formBasicRollNo'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faContactBook}
                type="number"
                placeHolder="Your Roll No"
              />
            </Form.Group>
            <Form.Group controlId='formBasicDOB'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faCalendar}
                type="date"
                placeHolder=""
              />
            </Form.Group>
            <Form.Group controlId='formBasicPhoneNumber'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faPhone}
                type="number"
                placeHolder="Your Phone Number"
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faAt}
                type="email"
                placeHolder="Email"
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faKey}
                type="password"
                placeHolder="Password"
              />
            </Form.Group>
            <Form.Group controlId='formBasicName'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faKey}
                type="password"
                placeHolder="Repeat your Password"
              />
            </Form.Group>
            <button type='submit' className='btn btn-primary mt-2 ms-4 w-50'>Register</button>
          </Form>
        </Col>
        <Col className='mx-5 my-5'>
          <Image src={require('../assets/images/signup_image.jpg')} rounded />
          <h6 className='m-5'><a href='#login' className='text-decoration-underline text-dark'>I have an Account</a></h6>
        </Col>
      </Row>
    </div>
  )
}

export default SignUp