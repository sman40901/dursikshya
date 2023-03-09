import React from 'react'

// props is needed for the flow of data from parent to child component
const Data = (props) => {
  return (
    <>
    <div className='col-md-3'>
        <h1 className='text-muted'>{props.myTitle}</h1>
        <p>{props.myBody}</p>
    </div>
    </>
  )
}

export default Data