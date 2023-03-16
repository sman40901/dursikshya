import React, { useState, useEffect, Fragment } from 'react';
import { FaTrash } from 'react-icons/fa'
import { json } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Navigate } from 'react-router-dom';

const Cart = () => {
    const [products, setProducts] = useState([]);

    // const navigate=useNavigate();

    useEffect(() => {
        const cartData = localStorage.getItem('cartItems');
        // getting the data we saved to local storage
        const data = JSON.parse(cartData);
        setProducts(data); // add products to the cart
        // }, [])
    }, [products]);

    const removeCartHandler = (id, title) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        const filterCart = cartItems.filter(item => item.id !== id)
        localStorage.setItem('cartItems', JSON.stringify(filterCart));
        setProducts(filterCart);
        toast.success(`$(title) is removed from the cart`);
    }

    const decreaseQty = (id, quantity) => {
        const updateProducts = products.map(item => {
            if (item.id === id) {
                // return item.quantity = Number(item.quantity)+1;
                // ... rest opreator
                // we need to change the state and to change the state we need to overwrite it with new object
                if (Number(item.quantity) > 1) {
                    return { ...item, quantity: Number(item.quantity) - 1 };
                }
            }
            return item; // this value is set to updateProducts variable
        })
        setProducts(updateProducts);
        localStorage.setItem('cartItems', JSON.stringify(updateProducts));
        /* I tried to write this code but was not successful */
        /*
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        const filterCart = cartItems.filter(item => item.id === id);
        if (filterCart) {
            // toast.error('Product already exists in the cart');
            if (filterCart.quantity > 1) {
                filterCart.quantity = filterCart.quantity - 1;
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
        }
        // else {
        //     cartItems.push(productItem);
        //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
        //     // toast.success('Product added in the cart');
        //     toast.success(`${productItem.title} is added to cart`);
        // }
        */
    }

    const increaseQty = (id, quantity) => {
        const updateProducts = products.map(item => {
            if (item.id === id) {
                // return item.quantity = Number(item.quantity)+1;
                // ... rest opreator
                // we need to change the state and to change the state we need to overwrite it with new object
                return { ...item, quantity: Number(item.quantity) + 1 };
            }
            return item; // this value is set to updateProducts variable
        })
        setProducts(updateProducts);
        localStorage.setItem('cartItems', JSON.stringify(updateProducts));
    }

    return (
        <>
            <ToastContainer theme='colored' />
            <div className='container'>
                <div className='row d-flex justify-content-between my-4'>
                    {products.length == 0 ?
                        <h2 className="mt-5 text-danger text-center">
                            Your Cart is Empty.
                        </h2>
                        : (
                            <>
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
                                                            <button className='btn btn-danger'
                                                                onClick={() => decreaseQty(item.id)}>-</button>
                                                            &nbsp;
                                                            <input type='number' value={item.quantity} readOnly className='form-control border-0' />
                                                            &nbsp;
                                                            <button className='btn btn-primary'
                                                                onClick={() => increaseQty(item.id)}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className='col-1'>
                                                        {/* <button className='btn btn-danger'>Delete</button> */}
                                                        <button className='btn btn-danger'
                                                            onClick={() => removeCartHandler(item.id, item.title)}>
                                                            {/* this format is used if we need to pass parameter to avoid extra binding */}
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                </div>

                                            </Fragment>
                                        ))
                                    }
                                </div>
                                <div className='col-md-3'>
                                    <div className='shadow p-2'>
                                        <h5>cart summary</h5>
                                        <hr />
                                        <span><b>Units:</b>{products.reduce((ac, item) => (ac + Number(item.quantity)), 0)} (Units)</span>
                                        <br />
                                        <span><b>Total:</b>{products.reduce((ac, item) => (ac + item.quantity * item.price), 0)}</span>
                                        <hr />
                                        <button className='btn btn-warning'>Check Out</button>
                                    </div>
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