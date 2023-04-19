import React, { useState, useEffect } from "react";
// we are importing useState and useEffect to transfer data from parent to child componet
import Layouts from "../components/Layouts";
import Slider from "../components/Slider";
import Card from "../components/Card";
import IncrementDecrement from "../hooks/IncrementDecrement";
import Effect from "../hooks/Effect";
import DataFetch from "../hooks/DataFetch";
import axios from "axios";
import Show from "../context/Show";

const Home = () => {
  const stdLimit = 8;
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(stdLimit);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res)
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []); // show effect on page load
  //empty arry is passed to show effect only once
  return (
    <>
      <Slider />
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products && products.map((product, index) => {
            return <Card key={index}
              productName={product.title}
              productPrice={product.price}
              productImage={product.image}
              id={product.id} />
          })}
        </div>
      </div>
      <IncrementDecrement />
      <Effect />
      <DataFetch />
      <Show />
    </>
  );
};

export default Home;
