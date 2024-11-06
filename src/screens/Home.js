import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Product from '../components/Product';
import { getAllProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions'; // Import addToCart action
import Loader from '../components/Loader';
import Error from '../components/Error';

const Home = () => {
  const dispatch = useDispatch();
  const getAllProductsState = useSelector((state) => state.getAllProductsReducer);
  const { loading, products, error } = getAllProductsState;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Handler function to add an item to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product, Number(1))); // Adds product with a default quantity of 1
  };

  return (
    <div className='content-center'>
      <div className='row justify-content-center mt-4 g-4'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error ='Something went wrong...' />
        ) : (
          products.map((product) => (
            <div className='col-md-3 mb-5 card p-3' style={{ margin: '0 20px' }} key={product._id}>
              <Product product={product} />
              <button
                className='btn btn-dark mt-3'
                onClick={() => handleAddToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;


// useEffect(() => {
//   axios.get('http://localhost:5000/getproducts').then(result => {
//     console.log(result)
//     setProducts(result.data);
//   })
//     .catch(err => console.log(err));

//   dispatch(getAllProducts());
// }, []);
