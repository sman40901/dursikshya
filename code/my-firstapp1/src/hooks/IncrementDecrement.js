import React, { useState } from "react";

const IncrementDecrement = () => {
  const [number, setNumber] = useState(1);

  // const increase=()=>{
  //     setNumber(number+1);
  // }

  return (
    <>
      <h2 className="text-center">{number}</h2>
      <center>
        {number < 10 && (
          <button
            // onClick={increase}
            className="btn btn-primary"
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            Increment
          </button>
        )}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {number > 0 && (
          <button
            id="decrement"
            // onClick={increase}
            // disabled={!number==1}
            className="btn btn-primary"
            onClick={() => {
              if (number > 1) {
                setNumber(number - 1);
              }
            }}
          >
            Decrement
          </button>
        )}
      </center>
    </>
  );
};

export default IncrementDecrement;
