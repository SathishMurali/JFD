import React from 'react'
import { InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';

const Credentials = ({classnameProperties0, classnameProperties1, classnameProperties2, type, placeHolder, icon, onChange, value}) => {
    return (
        <InputGroup className={classnameProperties0}>
            <InputGroup.Text className={classnameProperties1}><FontAwesomeIcon icon={icon} /></InputGroup.Text>
            <Form.Control type={type} placeholder={placeHolder} onChange={onChange} className={classnameProperties2} value={value} />
        </InputGroup>
    )
}

export default Credentials