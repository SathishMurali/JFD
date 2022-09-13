import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/esm/Image'

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import examApi from "../api/exam";


import { faCalendar, faPhone, faContactBook, faUser, faKey, faAt } from '@fortawesome/free-solid-svg-icons';
import Credentials from '../components/Credentials';

const SignUp = () => {

  const navigate = useNavigate();
  const [register, setRegister] = useState({
    userEmail: "",
    userPassword: "",
    rollNo: "",
    dob: "",
    candidateName: "",
    phoneNumber: "",
  });

  const registerAPI = (event) => {
    event.preventDefault();

    examApi
      .post(`/auth/register`, {
        userEmail: register.userEmail,
        userPassword: register.userPassword,
        rollNo: register.rollNo,
        dob: register.dob,
        candidateName: register.candidateName,
        phoneNumber: register.phoneNumber,
      })
      .then((res) => {
        if (res.data.data) {
          navigate("/");
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  };


  return (
    <div className='mx-5 my-4'>
      <Row>
        <Col className='mx-5 mt-3'>
          <Form className='w-75'>
            <div><h2 className='mb-4 me-5 fw-bold'>Sign up</h2></div>
            <Form.Group controlId='formBasicName'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faUser}
                type="text"
                value={register.candidateName}
                onChange={(event) => {
                  setRegister({ ...register, candidateName: event.target.value })
                }}
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
                value={register.rollNo}
                onChange={(event) => {
                  setRegister({ ...register, rollNo: event.target.value })
                }}
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
                value={register.dob}
                onChange={(event) => {
                  setRegister({ ...register, dob: event.target.value })
                }}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPhoneNumber'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faPhone}
                type="number"
                value={register.phoneNumber}
                onChange={(event) => {
                  setRegister({ ...register, phoneNumber: event.target.value })
                }}
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
                value={register.userEmail}
                onChange={(event) => {
                  setRegister({ ...register, userEmail: event.target.value });
                }}
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
                value={register.userPassword}
                onChange={(event) => {
                  setRegister({ ...register, userPassword: event.target.value });
                }}
                placeHolder="Password"
              />
            </Form.Group>
            <Form.Group controlId='formBasicConfirmPassword'>
              <Credentials
                classnameProperties0='m-3'
                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                icon={faKey}
                type="password"
                placeHolder="Repeat your Password"
              />
            </Form.Group>
            <button type='submit' className='btn btn-primary mt-2 ms-4 w-50' onClick={(event) => registerAPI(event)}>Register</button>
          </Form>
        </Col>
        <Col className='mx-5 my-5'>
          <Image src={require('../assets/images/signup_image.jpg')} rounded />
          <h6 className='m-5'><Link to='/login' className='text-decoration-underline text-dark'>I have an Account</Link></h6>
        </Col>
      </Row>
    </div>
  )
}

export default SignUp