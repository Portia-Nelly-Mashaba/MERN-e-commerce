import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../redux/actions/ordersAction';

export default function Checkout({amount}) {

    const dispatch = useDispatch();

    function tokenHandler(token)
    {
        dispatch(placeOrder(token, amount))
        // console.log(token); 
    }

    function validate()
    {
      if(!localStorage.getItem('currentUser'))
      {
        window.location.href='/login'
      }
    }
  return (
    <div>
        <StripeCheckout
            token={tokenHandler}
            amount={amount * 100}
            shippingAddress
            currency = 'ZAR'
            stripeKey='pk_test_51Q7FFuLlrdPxaQ2h9M23TCVkhTXkSYXqXIfcuRallXojdzlutUV9c6E0Hm5hSBDwKs8ibhsO0wbLQK2U4ogGG4rL00T53HK2yx'
            >
       
            <button className='btn' onClick={validate}>PAY NOW</button>
        </StripeCheckout>
    </div>
  )
}
