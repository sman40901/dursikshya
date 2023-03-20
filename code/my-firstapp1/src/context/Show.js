import React from 'react'
import ComA from './ComA';
import GlobalContextProvider from './GlobalContext';

// props is needed for the flow of data from parent to child component
// context is if we need to pass data to child component who is not immediate child
const Show = () => {
  return (
    <GlobalContextProvider>
      <ComA />
    </GlobalContextProvider>
  )
}

export default Show;