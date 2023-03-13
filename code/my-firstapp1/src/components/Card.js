import React from "react";
import './card.css'

const Card = (props) => {
  const { productName, productPrice, productImage } = props;
  // above statement is equivalent to
  // const productName=props.productName;
  return (
    <>
      {/* we are moving these 2 div tags to upper component 
     so that iteration thru items would be easier */}
      {/* <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4"> */}
      <div className="col">
        <div className="card shadow p-1">
          <img
            src={productImage}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{productName.slice(0,20)}</h5>
            <h5>${productPrice}</h5>
            <a href="" className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
      </div>
      {/* not used any more all the col code below this line */}
      {/* <div className="col">
            <div className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1661913022485-f5931b1f4d56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div> */}
      {/* <div className="col">
            <div className="card">
              <img
                src="https://unsplash.com/photos/PjVB8R9Jm-8"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div> */}
      {/* <div className="col">
            <div className="card">
              <img
                src="https://unsplash.com/photos/Z_LQcnGO7sM"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div> */}
      {/* </div>
      </div> */}
    </>
  );
};

export default Card;
