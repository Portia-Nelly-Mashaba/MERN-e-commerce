import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';

const OrderInfo = () => {
  const { orderid } = useParams(); 
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // Fetch the order details by orderid
        const response = await axios.get(`http://localhost:5000/getorderbyid/${orderid}`);
        setOrder(response.data); 
      } catch (err) {
        setError("Failed to fetch order details"); 
      } finally {
        setLoading(false); 
      }
    };
    fetchOrder();
  }, [orderid]);

  if (loading) return <Loader />; 
  if (error) return <Error error={error} />; 

  
  return (
    <div className="container mt-5">
  {order ? (
    <>
      <div className="row justify-content-center">
        <div className="col-md-5 card mx-3 d-inline-block">  
          <h5 className="mt-2 mb-0">Items In Your Order</h5>
          <hr />
          {order.orderItems.map((item) => (
            <div key={item._id}>
              <h1 className='text-start'>{item.name}</h1>
              <h1 className='text-start'>Quantity: <b>{item.quantity}</b></h1>
              <h1 className='text-start'>Price: {item.quantity} * R{item.price} = <b>R {item.price * item.quantity}</b></h1>
              <hr />
            </div>
          ))}
        </div>

        <div className="col-md-5 card mx-3 text-end d-inline-block">  
          <h5 className="mt-2 mb-0 text-center">Order Details</h5>
          <hr />
          <h6>Order Id: #{order._id}</h6>
          <h6>Total Amount: R {order.orderAmount}</h6>
          <h6>Date of Order: {order.createdAt.substring(0,10)}</h6>
          <h6>Transaction Id: #{order.transactionId}</h6>
          <h6>Order Status: {order.status}</h6>

          <hr/>
          <h5 className="mt-2 mb-0 text-center">Shipping Details</h5>
          <hr />

          <h6>Address: <b>{order.shippingAddress.address},{order.shippingAddress.postalCode} </b></h6>
          <h6>City: <b>{order.shippingAddress.city}</b></h6>
          <h6>Coutry: <b>{order.shippingAddress.country}</b></h6>
        </div>
      </div>
    </>
  ) : (
    <p>Order not found</p>
  )}

  <hr/>
  <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 className="text-left">Replacement Conditions</h1>
          <p>
            A free replacement cannot be created for an item which was returned
            and replaced once earlier. If your item is not eligible for free
            replacement due to any reason, you can always return it for a
            refund. If the item has missing parts or accessories, you may try to
            contact the manufacturer for assistance. Manufacturer contact
            information can usually be found on the item packaging or in the
            paperwork included with the item.
          </p>
        </div>
      </div>
</div>

  );
};

export default OrderInfo;
