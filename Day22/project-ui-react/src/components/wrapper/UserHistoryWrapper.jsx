import React from 'react'

const UserHistoryWrapper = ({ sno, subject, score, dateTime }) => {
    console.log(sno);
    console.log(subject);
    console.log(dateTime);
    return (
        <tbody>
            <tr>
                <td>{sno}</td>
                <td>{subject}</td>
                <td>{score}</td>
                <td>{dateTime}</td>
            </tr>
        </tbody>
    )
}

export default UserHistoryWrapper