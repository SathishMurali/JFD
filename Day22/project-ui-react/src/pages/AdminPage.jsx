import React from 'react'
import { Container, Navbar, Nav, Row, Card, Col, Image } from 'react-bootstrap'
import Footer from '../components/Footer'
import Table from '../components/Table'
import { Link } from 'react-router-dom'
import Subjects from '../components/Subjects'

const AdminPage = () => {
    // `auth/all`
    return (
        <div style={{ background: "#f8e4ff" }}>
            <Navbar style={{ background: 'linear-gradient(to right, rgba(233, 171, 255, 100), rgba(255, 251, 211, 100))' }} className='mb-5'>
                <Container>
                    <Nav className='ms-auto'>
                        <h4>HELLO, ADMIN</h4>
                        <Link to="">
                            <Subjects />
                        </Link>
                    </Nav>
                </Container>
            </Navbar>

            <Row className='text-center m-auto'>
                <Col>
                    <Card>
                        <Card.Body>Candidates</Card.Body>
                        <Card.Text><b>240</b></Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>Subjects</Card.Body>
                        <Card.Text><b>10</b></Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>Questions</Card.Body>
                        <Card.Text><b>560</b></Card.Text>
                    </Card>
                </Col>
            </Row>

            <Row className='mt-5 m-auto'>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ background: 'linear-gradient(to right, rgba(71, 26, 88, 100), rgba(144, 28, 147, 100))' }} className='text-white w-75 shadow'>
                        <div className='d-flex justify-content-center'>
                            <Image src={require('../assets/icons/face-scan.gif')} width='60' roundedCircle></Image>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>Sathish Murali</Card.Title>
                            <Card.Text>Roll No: 06151</Card.Text>
                            <Card.Text>DOB: 11/07/2000</Card.Text>
                            <Card.Text>Phone Number: 8525898825</Card.Text>
                            <Card.Text><b>No of Exams taken: 7</b></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ background: 'linear-gradient(to right, rgba(71, 26, 88, 100), rgba(144, 28, 147, 100))' }} className='text-white w-75 shadow '>
                        <div className='d-flex justify-content-center'>
                            <Image src={require('../assets/icons/face-scan.gif')} width='60' roundedCircle></Image>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>Sathish Murali</Card.Title>
                            <Card.Text>Roll No: 06151</Card.Text>
                            <Card.Text>DOB: 11/07/2000</Card.Text>
                            <Card.Text>Phone Number: 8525898825</Card.Text>
                            <Card.Text><b>No of Exams taken: 7</b></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Card className='m-auto mt-5 mb-5 w-75' style={{ background: "linear-gradient(to left, rgba(233, 171, 255, 100), rgba(255, 251, 211, 100))" }}>
                <div className='p-4'>
                    <h3>Candidate History</h3>
                    <table className='table table-striped table-bordered table-hover' bgcolor='#ffffff'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Candidate Name</th>
                                <th>Subject</th>
                                <th>score</th>
                                <th>Date & Time</th>
                            </tr>
                        </thead>
                        <Table sno='1' candidateName='Sathish Murali' subject='Physics' score='10' dateTime='10/09/2022' />
                        <Table sno='1' candidateName='Sathish Murali' subject='Physics' score='10' dateTime='10/09/2022' />
                        <Table sno='1' candidateName='Sathish Murali' subject='Physics' score='10' dateTime='10/09/2022' />
                        <Table sno='1' candidateName='Sathish Murali' subject='Physics' score='10' dateTime='10/09/2022' />
                        <Table sno='1' candidateName='Sathish Murali' subject='Physics' score='10' dateTime='10/09/2022' />
                        <Table sno='1' candidateName='Sathish Murali' subject='Physics' score='10' dateTime='10/09/2022' />
                        <Table sno='1' candidateName='Sathish Murali' subject='Physics' score='10' dateTime='10/09/2022' />
                    </table>
                </div>
            </Card>
            <Footer />
        </div>

    )
}

export default AdminPage