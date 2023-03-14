import React, { useState, useEffect, Fragment } from 'react';
import { json } from 'react-router-dom';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const cartData = localStorage.getItem('cartItems');
        // getting the data we saved to local storage
        const data = JSON.parse(cartData);
        setProducts(data);
    }, [])

    return (
        <>
            <div className='container'>
                <div className='row d-flex justify-content-between my-4'>
                    <h2 className='text-center'>Your Cart Items</h2>
                    <div className='col-md-6 shadow'>
                        {
                            products.map((item, i) => (
                                <Fragment key={i}>
                                    <hr />
                                    <div className='row d-flex aligh-items-center'>
                                        <div className='col-3'>
                                            <img src={item.image} alt={item.title} width='50' />
                                        </div>
                                        <div className='col-3'>
                                            <b><span>{item.title}</span></b>
                                        </div>
                                        <div className='col-2 text-warning'>
                                            <b><span>${item.price}</span></b>
                                        </div>
                                        <div className='col-3'>
                                            <div className='d-flex'>
                                                <button className='btn btn-danger'>-</button>
                                                &nbsp;
                                                <input type='number' value={item.quantity} readOnly className='form-control border-0' />
                                                &nbsp;
                                                <button className='btn btn-primary'>+</button>
                                            </div>
                                        </div>
                                        <div className='col-1'>
                                            <button className='btn btn-danger'>Delete</button>
                                        </div>
                                    </div>

                                </Fragment>
                            ))
                        }
                    </div>
                    <div className='col-md-3'>
                        <div className='shadow p-2'>
                            <h5>cart summary</h5>
                            <hr/>
                            <span><b>Units:</b></span>
                            <span><b>Total:</b></span>
                            <hr/>
                            <button className='btn btn-warning'>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;