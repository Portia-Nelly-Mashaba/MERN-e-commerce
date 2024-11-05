import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const Cart = () => {
    // Fetch initial cart items from Redux store
    const cartreducerstate = useSelector(state => state.addToCartReducer);
    const { cartItems: initialCartItems } = cartreducerstate;
    const dispatch = useDispatch();

    // Manage cartItems locally in state
    const [cartItems, setCartItems] = useState(initialCartItems);

    // Local delete function
    const handleDelete = (itemId) => {
        // Filter out the deleted item
        const updatedCartItems = cartItems.filter(item => item._id !== itemId);
        
        // Update the local state with filtered items
        setCartItems(updatedCartItems);

        // Clear specific cart data from localStorage
        localStorage.removeItem('cartData');

        // Optional: save the updated cart back to localStorage if needed
        localStorage.setItem('cartData', JSON.stringify(updatedCartItems));
    };

    return (
        <div className='container'>
            <div className='row justify-content-center mt-3'>
                <div className='col-md-8'>
                    <h1 className='m-5'>MY CART</h1>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Name of the Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.quantity * item.price}</td>
                                    <td>
                                        <i
                                            className='far fa-trash-alt'
                                            onClick={() => handleDelete(item._id)}
                                            style={{ cursor: 'pointer' }}
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
