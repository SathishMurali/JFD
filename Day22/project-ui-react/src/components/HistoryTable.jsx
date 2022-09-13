import React from 'react'

const HistoryTable = ({sno, subject, score, dateTime}) => {
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

export default HistoryTable