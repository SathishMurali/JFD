import React from 'react'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer';

import QuestionComponent from '../components/QuestionComponent';

const QuestionPage = () => {
  return (
    <>
      <NavBar />
      <QuestionComponent />
      <Footer />
    </>
  )
}

export default QuestionPage