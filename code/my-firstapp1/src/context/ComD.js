import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext';

// props is needed for the flow of data from parent to child component
// context is if we need to pass data to child component who is not immediate child
const ComD = () => {
  const js = useContext(GlobalContext);
  return (
    <>
      <h2>the js libaray we are learning {js}</h2>
    </>
  )
}

export default ComD;