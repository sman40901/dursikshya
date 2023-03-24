import React from 'react'
import Items from './Items'
import { useSelector } from 'react-redux'
import Student from './Student';


const TestNav = () => {
    const data = useSelector(store => store);
    return (
        <>
            <h2 className='text-info'>Number of items in the cart is {data.cartcount}</h2>
            <Items />
            <Student />
        </>
    )
}

export default TestNav