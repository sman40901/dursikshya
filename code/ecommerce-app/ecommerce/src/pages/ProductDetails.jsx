
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL, IMG_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const id = params.productId;

    useEffect(() => {
        axios.get(`${API_URL}/productdetails/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err))
    }, [id])

    // set obj for prodyct data
    const productData = {
        id: product._id,
        name: product.product_name,
        image: product.product_image,
        price: product.product_price,
        stock: product.countInStock,
        quantity: 1
    }

    // add to cart
    const addToCart = () => {
        // fetch item from the localstorage if item exyists else assing empty array
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        // set obj for prodyct data
        const productData = {
            id: product._id,
            name: product.product_name,
            image: product.product_image,
            price: product.product_price,
            stock: product.countInStock,
            quantity: 1
        }
        // check if item is already exist in the cart
        const existingItem = cartItems.find(item => item.id === product._id);
        if (existingItem) {
            toast.error('product already exists int he cart');
        } else {
            cartItems.push(productData);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            toast.success(`${productData.name} is added to cart`);
        }
    }

    return (
        <>
            <Helmet>
                <title>{product.product_name}</title>
            </Helmet>
            <ToastContainer theme="colored" position="top-center"/>
            <div className="row d-flex justify-content-around align-items-center">
                <div className="col-md-3">
                    <img src={`${IMG_URL}/${product.product_image}`} alt={product.product_name} />
                </div>
                <div className="col-md-8">
                    <h1>{product.product_name}</h1>
                    <h1>{product.product_price}</h1>
                    <p>
                        <strong>
                            Category:{product.category && product.category.category_name}
                            {/* category must be present */}
                        </strong>
                    </p>
                    <p>
                        <strong>
                            Available stock:{product.countInStock}
                        </strong>
                    </p>
                    <p>
                        {product.product_description}
                    </p>
                    <div className="my-3">
                        <button className="btn btn-warning" onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
