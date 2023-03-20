import React from 'react'
import ComB from './ComB';

// props is needed for the flow of data from parent to child component
// context is if we need to pass data to child component who is not immediate child
const ComA = () => {
  return (
    <>
    <ComB/>
    </>
  )
}

export default ComA;