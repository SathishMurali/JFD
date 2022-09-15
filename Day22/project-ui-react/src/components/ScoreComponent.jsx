import React from 'react'
import { Button, Card, Container, Image } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

const ScoreComponent = () => {
    let params = useParams();
    return (
        <>
            <Card className='m-5'>
                <Card.Body className='text-center'>
                    <Card.Title>Thank you for taking the exam!</Card.Title>
                    <Card.Text>
                        <h6>You have successfully submitted the exam</h6>
                        <h6>Your score is: {params.score}</h6>
                        <Link to="/history">
                            <Button type='button' variant='outline-warning'>Your Exam History</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Container className='text-center p-4'>
                <Image src={require('../assets/icons/award.gif')} width='150'></Image>
                <Image src={require('../assets/icons/verified.gif')} width='150'></Image>
                <Image src={require('../assets/icons/trophy.gif')} width='150'></Image>
                <h2>Yay!</h2>
            </Container>
        </>
    )
}

export default ScoreComponent