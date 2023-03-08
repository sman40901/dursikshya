import React from 'react'
import Layouts from '../components/Layouts'
import Slider from '../components/Slider'
import Card from '../components/Card'
import IncrementDecrement from '../hooks/IncrementDecrement'
import Effect from '../hooks/Effect'
import DataFetch from '../hooks/DataFetch'

const Home = () => {
  return (
    <>
    <Slider/>
    <Card/>
    <IncrementDecrement/>
    <Effect/>
    <DataFetch/>
    </>
  )
}

export default Home