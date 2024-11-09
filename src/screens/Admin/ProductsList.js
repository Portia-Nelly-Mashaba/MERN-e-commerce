// ProductsList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts, deleteProduct } from '../../redux/actions/productActions'; // Import deleteProduct action
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const ProductsList = () => {
    const getAllProductsState = useSelector((state) => state.getAllProductsReducer);
    const { loading, products = [], error } = getAllProductsState; // Set default empty array for products

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    // Handler for deleting a product
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(deleteProduct(id));
        }
    };

    return (
        <div>
            {loading && <Loader />}
            {error && <Error error="Something went wrong while loading products" />}
            <h2 className='mt-4'>Products List</h2>
            <div className="text-end">
                <Link to="/admin/addnewproduct">
                    <button type="button" className="btn btn-dark mt-3 mb-4">
                        Add Product
                    </button>
                </Link>
            </div>
            <table className="table table-bordered table-responsive-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map(product => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.countInStock}</td>
                                <td>{product._id}</td>
                                <td>
                                    <i
                                        className="far fa-trash-alt"
                                        style={{ marginRight: '10px', color: 'red', cursor: 'pointer' }}
                                        onClick={() => handleDelete(product._id)}
                                    ></i>
                                    <Link to={`/admin/editproduct/${product._id}`}>
                                        <i className="fas fa-edit"></i>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No products available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsList;
