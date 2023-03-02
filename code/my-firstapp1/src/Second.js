import React from 'react'
import NavMenu from './NavMenu'
import { TestThird, Third } from './Third'

const Second = () => {
  return (
    <>
    <NavMenu/>
    <div>This is Second</div>
    <Third/>
    <TestThird/>
    </>
  )
}

export default Second