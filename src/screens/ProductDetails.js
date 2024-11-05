import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { id: productid } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);  // Default to 1 as a number
  const dispatch = useDispatch();

  function addcart() {
    dispatch(addToCart(product, quantity));
  }

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/getproductbyid/${productid}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productid]);

  return (
    <div className="container mt-5">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : product ? (
        <div className="row">
          <div className="col-md-6 p-2">
            <div className="card">
              <h1 className="mt-3">{product.name}</h1>
              <img
                src={product.image}
                className="img-fluid m-3 big-img"
                alt={product.name}
              />
              <p>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <div className="m-2">
              <h1 className="product-h1">Price: R{product.price}</h1>
              <hr />
              <h1 className="product-h1">Select Quantity</h1>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}  // Convert here
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                ))}
              </select>
              <hr />
              <button
                className="btn btn-dark my-2 my-sm-0 text-end"
                type="submit"
                onClick={addcart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
    </div>
  );
};

export default ProductDetails;
