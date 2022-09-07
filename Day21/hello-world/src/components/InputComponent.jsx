import React from 'react'

const InputComponent = ({handleAdd}) => {
    
  return (
    <div className='container'>
        <input type="text" id='number' name="message" onChange={handleAdd} />
    </div>
  )
}

export default InputComponent