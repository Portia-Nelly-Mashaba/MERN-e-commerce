import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function Checkout(amount) {

    function tokenHandler(token)
    {
        console.log(token);
        
    }
  return (
    <div>
        <StripeCheckout
            token={tokenHandler}
            amount={amount * 100}
            shippingAddress
            currency = 'ZAR'
            >
            <button className='btn btn-dark'>PAY NOW</button>
        </StripeCheckout>
    </div>
  )
}
