import React from 'react'
import { Form } from 'react-bootstrap'

const Questions = ({ question, choice1, choice2,choice3,choice4}) => {
    return (
        <Form.Group className='m-3'>
            <Form.Label>{question}</Form.Label>
            <div className='d-flex justify-content-evenly'>
                <Form.Check type='radio' name="option" label={choice1} className='px-4'></Form.Check>
                <Form.Check type='radio' name="option" label={choice2}className='px-4'></Form.Check>
                <Form.Check type='radio' name="option" label={choice3} className='px-4'></Form.Check>
                <Form.Check type='radio' name="option" label={choice4} className='px-4'></Form.Check>
            </div>
        </Form.Group>
    )
}

export default Questions