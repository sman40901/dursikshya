
import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, IMG_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import { FaTrash } from 'react-icons/fa';


const Cart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData && cartData.length > 0) {
      setProducts(cartData);
    }
    else {
      setProducts([]);
    }
  }, []);

  const increaseQty = id => {
    const updateProducts = products.map(item => {
      if (item.id == id && item.quantity < item.stock) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item;
    })
    setProducts(updateProducts);
    localStorage.setItem('cart', JSON.stringify(updateProducts));
  }

  const decreaseQty = id => {
    const updateProducts = products.map(item => {
      if (item.id == id && item.quantity < item.stock) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item;
    })
    setProducts(updateProducts);
    localStorage.setItem('cart', JSON.stringify(updateProducts));
  }

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <ToastContainer theme='colored' position="top-center" />
      <div className="container">
        <div className="row d-flex justify-content-between my-5">
          {products && products.length === 0 ?
            <h2 className="text-center textp-danger mt-3">Your cart is empty</h2>
            : (
              <>
                <h2 className="text-center">
                  Your cart items
                </h2>
                <div className="col-md-8 shadow-lg">
                  {products && products.map((item, i) => (
                    <Fragment key={i}>
                      <div className="d-flex p-3 align-items-center">
                        <div className="col-3">
                          <img src={`${IMG_URL}/${item.image}`} alt={item.name} width={'50'} />
                        </div>
                        <div className="col-3">
                          <strong>{item.name}</strong>
                        </div>
                        <div className="col-2">
                          <span className="text-warning">RS. {item.price}</span>
                        </div>
                        <div className="col-3">
                          <div className="d-flex">
                            <button className="btn btn-danger" onClick={() => decreaseQty(item.id)}>-</button>
                            &nbsp;
                            <span>{item.quantity}</span>
                            &nbsp;
                            <button className="btn btn-primary" onClick={() => increaseQty(item.id)}>+</button>
                            {/* todo need to work on this  */}
                          </div>
                        </div>
                        <div className="col-1">
                          <button className="btn btn-danger"><FaTrash /></button>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div className="col-md-3">
                  <div className="shadow p-3">
                    <h5>Cart Summary</h5>
                  </div>
                  <p><strong>Units:</strong>{products.reduce((ac, item) => (ac + Number(item.quantity)), 0)}</p>
                  <p><strong>Total:</strong>Rs {products &&
                    products.reduce((ac, item) => (ac + (item.quantity * item.price)), 0)}</p>
                  <hr />
                  <button className="btn btn-warning">Checkout</button>
                </div>
              </>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Cart;
