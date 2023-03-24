import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const StudentForm = () => {
    const [name,setName]=useState('');
    const dispatch=useDispatch();
    const change=()=>{
        dispatch({type:'CHANGE',payload:name})
    }
    return (
        <>
           <input type='text' placeholder="Type Student Name" onChange={(e)=>setName(e.target.value)}/> 
           {/* e is event, e.target.value is input that is typed in the text field */}
           <button onClick={change}>Change student name</button>
        </>
    );
};

export default StudentForm;
