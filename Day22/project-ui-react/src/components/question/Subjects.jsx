import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import examApi from '../../api/exam';

const Subjects = () => {

    const [questions, setQuestions] = useState({
        subjectId: "",
        question: "",
        correctAnswer: "",
        choiceList: "",
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const questionAPI = (event) => {
        event.preventDefault();

        examApi
            .post(`/question/add`, {
                subjectId: questions.subjectId,
                question: questions.question,
                correctAnswer: questions.correctAnswer,
                choiceList: questions.choiceList,
            })
            .then((res) => {
                if (res.data.data) {
                    console.log(res.data);
                } else if (res.data.data) {
                    console.log(res.data.error.message);
                } else {
                    console.log("Something went wrong");
                }
            })
            .catch((error) => {
                console.log(`Error -> ${error}`)
            });
    }
    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="ms-3">
                Subjects
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Subject & Questions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Subject ID</h6>
                    <input
                        type="text"
                        placeholder="Subject ID"
                        value={questions.subjectName}
                        onChange={(event) => {
                            setQuestions({ ...questions, subjectId: event.target.value })
                        }}>
                    </input>
                    <hr></hr>
                    <h6>Question</h6>
                    <input
                        type="text"
                        placeholder="Add Question"
                        className='w-100 mb-2'
                        value={questions.question}
                        onChange={(event) => {
                            setQuestions({ ...questions, question: event.target.value })
                        }}
                    />
                    <div className='m-2'>
                        <input
                            type="text"
                            placeholder='Option 1'
                            value={questions.choiceList}
                            onChange={(event) => {
                                setQuestions({ ...questions, choiceList: event.target.value })
                            }}
                        />
                        <input
                            type="text"
                            placeholder='Option 2'
                            value={questions.choiceList}
                            onChange={(event) => {
                                setQuestions({ ...questions, choiceList: event.target.value })
                            }}
                        />
                        <input
                            type="text"
                            placeholder='Option 3'
                            value={questions.choiceList}
                            onChange={(event) => {
                                setQuestions({ ...questions, choiceList: event.target.value })
                            }}
                        />
                        <input
                            type="text"
                            placeholder='Option 4'
                            value={questions.choiceList}
                            onChange={(event) => {
                                setQuestions({ ...questions, choiceList: event.target.value })
                            }}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(event) => questionAPI(event)}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Subjects