import React from 'react'

const Table = ({ sno, candidateName, subject, score, dateTime }) => {
    return (
        <tbody>
            <tr>
                <td>{sno}</td>
                <td>{candidateName}</td>
                <td>{subject}</td>
                <td>{score}</td>
                <td>{dateTime}</td>
            </tr>
        </tbody>
    )
}

export default Table