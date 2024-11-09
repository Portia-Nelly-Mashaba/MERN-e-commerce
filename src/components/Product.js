import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { addToCart } from '../redux/actions/cartActions';

function Product({ product }) {
  const dispatch = useDispatch();

  // Function to add item to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product, 1)); // Adds product with a quantity of 1
  };

  return (
    <div>
      <div>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <img src={product.image} alt={product.name} className="img-fluid mb-3" />
          <hr />
          <h1>{product.name}</h1>
          <h6 className="text-start mt-3" style={{ color: 'gray', textDecoration: 'none' }}>
            {product.description}
          </h6>
          <div className="d-flex mt-4">
            <Rating
              style={{ color: 'orange' }}
              initialRating={product.rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            />
          </div>
        </Link>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="h5 mb-0 text-gray">R{product.price}</span>
          <button
            className="btn btn-xs"
            
            onClick={handleAddToCart}
          >
            <span className="fas fa-cart-plus mr-2"></span> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
