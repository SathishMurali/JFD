import React, { useContext, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/esm/Image'
import { Link, useNavigate } from 'react-router-dom';

import examApi from '../api/exam';
import { UserContext } from '../context/UserContext';

import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons'
import Credentials from '../components/Credentials';

const LoginComponent = () => {
    const navigate = useNavigate();
    const { setLoggedInUser } = useContext(UserContext);
    const [login, setLogin] = useState({ userEmail: "", userPassword: "" });

    const loginAPI = (event) => {
        event.preventDefault();

        examApi
            .post(`/auth/login`, {
                userEmail: login.userEmail,
                userPassword: login.userPassword,
            })
            .then((res) => {
                if (res.data.data) {
                    let loggedInUser = res.data.data;
                    loggedInUser.isLoggedIn = true;
                    setLoggedInUser(loggedInUser);
                    navigate('/');
                } else if (res.data.data) {
                    console.log(res.data.error.message);
                } else {
                    console.log("Something went wrong");
                }
            })
            .catch((error) => {
                console.log(`Error -> ${error}`)
            });
    };
    return (
        <div className='mx-5 my-5'>
            <Row>
                <Col className='mx-5 my-4'>
                    <Image src={require('../assets/images/login_image.jpg')} rounded />
                    <h6 className='m-5'><Link to='/signup' className='text-decoration-underline text-dark'>Create an Account</Link></h6>
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
                                value={login.userName}
                                placeHolder="Your Email"
                                onChange={(event) => {
                                    setLogin({ ...login, userEmail: event.target.value });
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Credentials
                                classnameProperties0='m-3'
                                classnameProperties1='bg-transparent border-top-0 border-end-0 border-start-0 border-dark'
                                classnameProperties2='shadow-none border-top-0 border-end-0 border-start-0 border-dark'
                                icon={faKey}
                                type="password"
                                value={login.userPassword}
                                placeHolder="Your Password"
                                onChange={(event) => {
                                    setLogin({ ...login, userPassword: event.target.value });
                                }}
                            />
                        </Form.Group>
                        <button type='submit' className='btn btn-primary mt-2 ms-4 w-50' onClick={(event) => loginAPI(event)}>Login</button>
                    </Form>
                </Col>
            </Row>
        </div >
    )
}

export default LoginComponent