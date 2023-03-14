import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // to get id of the product as parameter
// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icon/fa'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import RatingStar from "../components/RatingStar";

import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {

    const [product, setProduct] = useState({});
    const params = useParams();
    useEffect(() => {
        const productId = params.productId;
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [params.productId]); // useEffect is called everytime productId changes

    // handling add to cart click
    const clickAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // if cart items already exist then get it or else create an empty array
        const productItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            category: product.category,
            rating: product.rating,
            quantity: 1
        };
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            toast.error('Product already exists in the cart');
        }
        else {
            cartItems.push(productItem);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            // toast.success('Product added in the cart');
            toast.success(`${productItem.title} is added to cart`);
        }
    }

    return (
        <>
            <ToastContainer theme='colored' position="top-center" />
            <div className='card shadow-lg my-4 offset-md-3' styles={{ maxwidth: '800 px' }}>
                <div className="row">
                    <div className="col-md-6 my-3 p-3">
                        <img src={product.image} alt={product.title} className='img-fluid' />
                    </div>
                </div>
                <div className="col-md-6 my-3">
                    <div className="card-body">
                        <h5 className="card-tile">{product.title}</h5>
                        <h5 className="card-text">${product.price}</h5>
                        <h5 className="card-text">{product.description}</h5>
                    </div>
                </div>
                {product.rating &&
                    <RatingStar rating={product.rating.rate} />
                }
                {product.rating && <>({product.rating.count})</>}
                <br />
                <button className="btn btn-success" onClick={clickAddToCart}>Add to cart</button>
            </div>
        </>
    );
};

export default ProductDetails;
