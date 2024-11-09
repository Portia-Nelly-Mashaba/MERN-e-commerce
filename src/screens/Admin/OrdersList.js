import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { getAllOrders } from '../../redux/actions/ordersAction';

export default function Orderslist() {
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getordersstate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  // Function to update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/updateorderstatus/${orderId}`, { status: newStatus });
      alert('Order status updated successfully');
      dispatch(getAllOrders()); 
    } catch (err) {
      console.error('Failed to update order status', err);
      alert('Failed to update order status');
    }
  };

  // Function to cancel order
  const handleCancelOrder = async (orderId) => {
    const order = orders.find(o => o._id === orderId);
    if (order.status === "order placed") {
      const confirmCancel = window.confirm("Are you sure you want to cancel the order?");
      if (confirmCancel) {
        try {
          await axios.patch(`http://localhost:5000/updateorderstatus/${orderId}`, { status: "Cancelled" });
          alert('Order has been cancelled');
          dispatch(getAllOrders()); 
        } catch (err) {
          console.error('Failed to cancel order', err);
          alert('Failed to cancel order');
        }
      }
    } else {
      alert('Order can only be cancelled if the status is "order placed"');
    }
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      <h2>Orders List</h2>
      <table className="table table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transaction Id</th>
            <th>Tracking Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.name}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.transactionId.slice(0, 8)}...</td> 
                <td>{order.status}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-primary me-1"
                    onClick={() => updateOrderStatus(order._id, 'Shipped')}
                  >
                    <i className="fas fa-truck" /> 
                  </button>
                  <button
                    className="btn btn-sm btn-outline-success me-1"
                    onClick={() => updateOrderStatus(order._id, 'Delivered')}
                  >
                    <i className="fas fa-box" /> 
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleCancelOrder(order._id);
                    }}
                  >
                    <i className="fas fa-times-circle" /> 
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
