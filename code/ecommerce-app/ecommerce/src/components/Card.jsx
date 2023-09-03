
import React from "react";
import { IMG_URL } from "../config";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { _id, product_name, product_price, product_image } = props.data
  return (
    <>
      {/* <div classNameName="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 g-4"> */}
      <div className="col">
        <div className="card">
          <img src={`${IMG_URL}/${product_image}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product_name}</h5>
            <h5>{product_price}</h5>
            {/* <button className="btn btn-success">View details</button> */}
            <Link to={`/productdetails/${_id}`} className="btn btn-success">View details</Link>
          </div>
        </div>
      </div>


      {/* </div>
      </div> */}
    </>
  );
}

export default Card;
