import React from 'react'
import NavBar from '../components/NavBar'
import { Card, Container } from 'react-bootstrap'
import HistoryTable from '../components/HistoryTable'

const UserHistory = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h2 className='mt-3 mb-3'>Your History</h2>
      </Container>

      <Card className='m-auto w-75'>
        <div className='d-flex justify-content-evenly p-3'>
          <table className='table table-striped table-bordered table-hover'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Subject</th>
                <th>score</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <HistoryTable sno='1' subject="Java" score='10' dateTime="10/09/2022" />
            <HistoryTable sno='2' subject="Python" score='6' dateTime="10/09/2022" />
          </table>
        </div>
      </Card>
    </>
  )
}

export default UserHistory