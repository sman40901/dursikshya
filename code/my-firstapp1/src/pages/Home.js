import React, {useState} from 'react'
import Layouts from '../components/Layouts'
import Slider from '../components/Slider'
import Card from '../components/Card'
import IncrementDecrement from '../hooks/IncrementDecrement'

const Home = () => {
  return (
    <>
    <Slider/>
    <Card/>
    <IncrementDecrement/>
    </>
  )
}

export default Home