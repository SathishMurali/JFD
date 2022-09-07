import React from 'react'

const ButtonComponent = (props) => {
  return (
    <button type='button' className='btn btn-success mt-3' onClick={props.results}>Calculate</button>
  )
}

export default ButtonComponent