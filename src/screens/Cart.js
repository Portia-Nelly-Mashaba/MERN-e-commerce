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

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

   
    const handleDelete = (itemId) => {
 
        const updatedCartItems = cartItems.filter(item => item._id !== itemId);
        
       
        setCartItems(updatedCartItems);

       
        localStorage.removeItem('cartData');

        
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
                    <hr />
                    <h1>Total Amount</h1>
                    <h1>R{totalPrice}</h1>
                    <hr/>
                    <Checkout amount={totalPrice}/>
                </div>
            </div>
        </div>
    );
};

export default Cart;
