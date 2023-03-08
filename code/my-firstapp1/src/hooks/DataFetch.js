import React, {useState,useEffect} from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [post,setPost]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data);
            setPost(res.data);
            
        },[])
        .catch(err=>console.log(err))
    })
  return (
    <>
    {
    post.map((p)=>{
       return <h1>{p.title}</h1>
})
}
    </>
  )
}

export default DataFetch