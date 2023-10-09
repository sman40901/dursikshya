import React, { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(5);

  useEffect(() => {
    // removed the alert for sometime 
    // alert("this is effect");
    // this func is called at page load
  }, [count]); // pass empty array this func wont be called in any event change
  // will be called only once at page load
  // if passed some variable it will be called everytime when the state of that object changes
  return (
    <>
      <h2>{count}</h2>
      <button className="btn btn-primary" onClick={() => setCount(1 + count)}>
        Increment by 1
      </button>
      <hr />
      <h2>{num}</h2>
      <button className="btn btn-success" onClick={() => setNum(3 + num)}>
        Increment by 3
      </button>
    </>
  );
};

export default Effect;
