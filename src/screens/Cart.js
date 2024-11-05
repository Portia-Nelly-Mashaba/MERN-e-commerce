import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const Cart = () => {
    const cartreducerstate = useSelector(state => state.addToCartReducer);
    const dispatch = useDispatch();
    const { cartItems } = cartreducerstate;

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
                                    <td>
                                        <select
                                            value={item.quantity}
                                            onChange={(e) => {
                                                const quantity = parseInt(e.target.value, 10);
                                                if (quantity > 0) {
                                                    dispatch(addToCart(item, quantity));
                                                } else {
                                                    dispatch(removeFromCart(item._id));
                                                }
                                            }}
                                        >
                                            {[...Array(item.countInStock).keys()].map((_, i) => (
                                                <option key={i} value={i + 1}>
                                                    {i + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>{item.quantity * item.price}</td>
                                    <td>
                                        <i
                                            className='far fa-trash-alt'
                                            onClick={() => dispatch(removeFromCart(item._id))}
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
