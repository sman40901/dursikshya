import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./Data";

const DataFetch = () => {
  const standardLimit = 8;
  const [post, setPost] = useState([]);
  // creating a page limit system using limit
  const [limit, setLimit] = useState(standardLimit);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      }, [])
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className="continer-fluid">
        <div className="row">
          {post.slice(0, limit).map((p, index) => {
            // slice is added to create a paging limit effect
            // return <h1>{p.title}</h1>;
            return <Data key={index} myTitle={p.title} myBody={p.body} />;
            // if you miss return here, nothing will be showed
          })}
          <center>
            {/* we need to show limited content on clicking show more button not all the items */}
            {limit < post.length && (
              <button
                className="btn btn-warning mb-3"
                onClick={() => setLimit(limit + standardLimit)}
              >
                Show More
              </button>
            )}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {limit > standardLimit && (
              <button
                className="btn btn-warning mb-3"
                onClick={() => setLimit(limit - standardLimit)}
              >
                Show Less
              </button>
            )}
          </center>
        </div>
      </div>
    </>
  );
};

export default DataFetch;

// https://fakestoreapi.com/products - use this to create a new data 
