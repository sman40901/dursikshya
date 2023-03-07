import React , {useState} from 'react'

const IncrementDecrement = () => {
    const [number,setNumber]=useState(1);
    
    // const increase=()=>{
    //     setNumber(number+1);
    // }
  
    return (
    <>
    <h2 className='text-center'>{number}</h2>
    <center>
        <button 
        // onClick={increase} 
        className='btn btn-primary'
        onClick={()=>{setNumber(number+1)}}
        >Increment</button>
    </center> 
    </>
  )
}

export default IncrementDecrement