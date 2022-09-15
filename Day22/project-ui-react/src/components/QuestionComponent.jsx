import React, { useContext, useEffect, useState } from 'react'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import Clock from 'react-live-clock';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

import Questions from '../components/question/Questions';
import { UserContext } from '../context/UserContext'
import examApi from '../api/exam'

const QuestionComponent = () => {
    let params = useParams()
    const navigate = useNavigate()
    const { loggedInUser } = useContext(UserContext);
    const [answers, setAnswers] = useState([])
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (params.id !== undefined) {
            examApi
                .get(`/subjects/${params.id}`)
                .then((res) => {
                    if (res.data.data) {
                        setQuestions(res.data.data.subjectQuestions);
                    } else if (res.data.error) {
                        console.log(res.data.error.message);
                    } else {
                        console.log("Something went wrong");
                    }
                })
                .catch((error) => {
                    console.log(`Error -> ${error}`);
                });
        }
    }, []);

    const historyAPI = (event) => {
        event.preventDefault();
        let score = 0;

        for (let i = 0; i < questions.length; i++) {
            if (questions[i].correctAnswer === answers[i]) {
                score++;
            }
        }
        navigate(`/score/${score}`)
    }

    return (
        <div className='rounded-5 p-3' style={{ background: "radial-gradient(circle, rgba(238,174,202,1) 23%, rgba(148,187,233,1) 96%)" }}>
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
                            <Clock format={'HH:mm:ss'} ticking={true} timezone={''} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr></hr>
            <br></br>

            <Form>
                {/* subjectQuestions */}
                {questions.map((question, index) => (
                    <Questions key={index} question={index + 1 + ". " + question.question}
                        setAnswers={setAnswers}
                        answers={answers}
                        choices={question.choiceList} />
                ))}
            </Form>
            <div className='mb-3 ms-3 text-center'>
                <Link to="/score" >
                    <Button type='submit' variant='outline-success' className='w-25' onClick={(event) => historyAPI(event)}>Submit</Button>
                </Link>
            </div>
        </div>
    )
}

export default QuestionComponent