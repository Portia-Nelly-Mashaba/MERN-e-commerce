import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../redux/actions/ordersAction';

export default function Checkout({ amount }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePayNowClick = () => {
        // Check if user is logged in before displaying the payment form
        if (!localStorage.getItem('currentUser')) {
            alert('Please log in to proceed with payment');
            navigate('/login');
            return false; // Prevent further execution
        }
        return true; // Allow payment if logged in
    };

    const tokenHandler = (token) => {
        dispatch(placeOrder(token, amount));
        navigate('/orders'); // Redirect to /orders after successful payment
    };

    return (
        <div>
            {handlePayNowClick() ? (
                <StripeCheckout
                    token={tokenHandler}
                    amount={amount * 100}
                    shippingAddress
                    currency="ZAR"
                    stripeKey="pk_test_51Q7FFuLlrdPxaQ2h9M23TCVkhTXkSYXqXIfcuRallXojdzlutUV9c6E0Hm5hSBDwKs8ibhsO0wbLQK2U4ogGG4rL00T53HK2yx"
                >
                    <button className="btn">PAY NOW</button>
                </StripeCheckout>
            ) : null}
        </div>
    );
}
