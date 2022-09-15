import React from 'react'
import { Form } from 'react-bootstrap'

const Questions = ({ question, choices, answers, setAnswers }) => {
    return (
        <Form.Group className='m-3'>
            <Form.Label>{question}</Form.Label>
            <div className='d-flex justify-content-evenly'>
                {choices.map(choice => {
                    return (
                        <Form.Check type='radio' name={question} label={choice.choiceName}
                            value={choice.choiceName}
                            className='px-4'
                            onChange={(e) => {
                                setAnswers([...answers, e.target.value])
                                console.log(e.target.value);
                            }}></Form.Check>
                    )
                })}
            </div>
        </Form.Group >
    )
}

export default Questions