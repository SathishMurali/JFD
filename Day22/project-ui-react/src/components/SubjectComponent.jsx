import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import examApi from '../api/exam';

const SubjectComponent = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        examApi
            .get(`/subjects/all`)
            .then((res) => {
                if (res.data.data) {
                    setSubjects(res.data.data);
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
        <div className='rounded-5 p-3' style={{ background: "radial-gradient(circle, rgba(238,174,202,1) 23%, rgba(148,187,233,1) 96%)" }}>
            {/* <Container className='flex-column text-center'>
                <Image src={require('../assets/icons/exam.gif')} width='100' bg='transparent'></Image>
                <Image src={require('../assets/icons/pen.gif')} width='100'></Image>
                <Image src={require('../assets/icons/alarm.gif')} width='100'></Image>
                <Image src={require('../assets/icons/paper.gif')} width='100'></Image>
                <Image src={require('../assets/icons/paperclip.gif')} width='100'></Image>
            </Container> */}
            <Row className='mt-5 mb-5 w-75 text-center m-auto'>

                <Col className='md-4'>
                    <div className='w-25 h-25 mx-auto'>
                        {subjects.map((subject) => (
                            <Link className='text-decoration-none text-dark w-25' to={`/questions/${subject.subjectId}`}>
                                <Card className='rounded-5 shadow m-3'>
                                    <Card.Img src={require("../assets/images/cplus.png")} />
                                    <Card.Title key={subject.subjectId}>{subject.subjectName}</Card.Title>
                                </Card>
                            </Link>
                        ))}

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SubjectComponent