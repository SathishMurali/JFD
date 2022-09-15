import React, { useState } from 'react'
import NavBar from '../components/common/NavBar'
import { Card, Container } from 'react-bootstrap'
import UserHistoryWrapper from '../components/wrapper/UserHistoryWrapper'
import { useEffect } from 'react'
import examApi from '../api/exam'

const UserHistory = () => {
  const [histories, setHistories] = useState([])
  useEffect(() => {
    examApi
      .get(`/history/all`)
      .then((res) => {
        if (res.data.data) {
          setHistories(res.data.data);
          console.log(res.data.data);
        } else if (res.data.data) {
          console.log(res.data.error.messsage);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  }, []);

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
                <th>Score</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            {histories.map((history, index) => {
              return (<UserHistoryWrapper sno={index + 1} subject={history.subjectName} score={history.score} dateTime={history.examDateTime} />
              )
            })}
            {/* <UserHistoryWrapper sno='2' subject="Python" score='6' dateTime="10/09/2022" /> */}
          </table>
        </div>
      </Card>
    </>
  )
}

export default UserHistory