import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import Loader from '../components/Loader';
import Error from '../components/Error';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const { id: productid } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
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
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb p-2">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-dark">
                <i className="fas fa-home me-1" style={{ color: "#25b49c" }}></i> Home
              </Link>
            </li>
            {product && (
              <li className="breadcrumb-item active text-dark" aria-current="page">
                {product.name}
              </li>
            )}
          </ol>
        </nav>
      </div>
      
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error='Something went wrong' />
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
                onChange={(e) => setQuantity(Number(e.target.value))}
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
              <Link to="/cart" className="btn btn-outline-success ms-3 custom-hover">
                VIEW CART
              </Link>
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
