import React, { useContext, useEffect, useState } from 'react'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Clock from 'react-live-clock';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

import examApi from '../api/exam'

const QuestionPage = () => {

  const { loggedInUser } = useContext(UserContext);
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    examApi
      .get(`/question/all`)
      .then((res) => {
        if (res.data.data) {
          setQuestions(res.data.data);
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className='rounded-5 p-3' style={{ background: "#f8e4ff" }}>
        <Row className='m-2'>
          <Col>
            <Card className='flex-row'>
              <Card.Img src={require('../assets/icons/face-scan.gif')} className='w-25 ms-auto'></Card.Img>
              <Card.Body>
                <Card.Title>{loggedInUser.candidateName}</Card.Title>
                <Card.Text>
                  <p><b>Roll No:</b> {loggedInUser.rollNo}</p>
                  <p><b>DOB:</b> {loggedInUser.dob}</p>
                  <p><b>Phone Number:</b> {loggedInUser.phoneNumber}</p>
                  <p><b>Email:</b> {loggedInUser.userEmail}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className='text-center'>
                <Card.Title>Timing</Card.Title>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'INDIA/IST'} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr></hr>
        <br></br>

        <Form>
          {questions.map((question) => (
            <Questions question={question.questionId + ". " + question.question} choice1={question.questionChoice} choice2={question.questionChoice} choice3={question.questionChoice} choice4={question.questionChoice} />
          ))}

        </Form>
        <div className='mb-3 ms-3 text-center'>
          <Link to="/score" >
            <Button type='submit' variant='outline-success' className='w-25'>Submit</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default QuestionPage