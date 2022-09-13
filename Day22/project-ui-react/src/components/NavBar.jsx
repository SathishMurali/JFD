import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const NavBar = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <Navbar style={{ background: "linear-gradient(to left, rgba(233, 171, 255, 100), rgba(255, 251, 211, 100))" }} className="rounded-pill" variant='dark'>
            <Container >
                <Navbar.Brand href='/home' className='w-25'><Image src={require("../assets/images/dex_logo.png")} className='w-50' /></Navbar.Brand>
                <Nav className='ms-auto'>
                    <div className='d-flex'>
                        <h5 className='my-auto'>Hi, {loggedInUser.candidateName}</h5>
                        <Nav.Link href='#logout'>
                            <Link to="/login">
                                <Button variant='btn btn-outline-danger' className='border-radius-0'>Logout</Button>
                            </Link>
                        </Nav.Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar