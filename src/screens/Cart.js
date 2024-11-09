import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import Checkout from '../components/Checkout';

const Cart = () => {
    const cartreducerstate = useSelector(state => state.addToCartReducer);
    const { cartItems: initialCartItems } = cartreducerstate;
    const dispatch = useDispatch();

    // Manage cartItems locally in state
    const [cartItems, setCartItems] = useState(initialCartItems);

    // Calculate subtotal of cart items
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Define delivery fee
    const deliveryFee = 100;

    // Calculate total amount including delivery fee
    const totalAmount = subtotal + deliveryFee;

    const handleQuantityChange = (itemId, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item._id === itemId
                    ? {
                          ...item,
                          quantity: Math.max(1, Math.min(newQuantity, item.countInStock)), // constrain quantity
                      }
                    : item
            )
        );
    };

    const handleDelete = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item._id !== itemId);
        setCartItems(updatedCartItems);
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
                                    <td>R{item.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            max={item.countInStock}
                                            onChange={(e) =>
                                                handleQuantityChange(item._id, Number(e.target.value))
                                            }
                                            style={{ width: '60px' }}
                                        />
                                    </td>
                                    <td>R{(item.quantity * item.price).toFixed(2)}</td>
                                    <td>
                                        <i
                                            className='far fa-trash-alt'
                                            onClick={() => handleDelete(item._id)}
                                            style={{ cursor: 'pointer', color: 'red' }}
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                    <h1 className='text-end'>Subtotal: R{subtotal.toFixed(2)}</h1>
                    <h1 className='text-end'>
                        <i className="fas fa-truck me-1" style={{ color: "#25b49c" }}></i> Delivery Fee: R{deliveryFee}
                    </h1>
                    <p className='text-end'>(Collect your package at the PEP store nearest to your billing address.)</p>
                    <hr />
                    <h1 className='text-end'>Total Amount: R{totalAmount.toFixed(2)}</h1>
                    <hr />
                    <div className='mb-4 text-end'>
                        <Checkout amount={totalAmount} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
