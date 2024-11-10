import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser && currentUser.user._id) {
          const response = await axios.get(
            `http://localhost:5000/getordersbyuserid/${currentUser.user._id}`
          );
          setOrders(response.data);
        } else {
          window.location.href = "/login";
        }
      } catch (err) {
        setError("Something went wrong while fetching orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      setLoading(true);
      // Call API to update order status to 'Cancelled'
      await axios.put(`http://localhost:5000/cancelorder/${orderId}`);
      // Update local state to reflect the cancellation
      setOrders(orders.map(order =>
        order._id === orderId ? { ...order, status: "Cancelled" } : order
      ));
    } catch (err) {
      setError("Failed to cancel the order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="">
          <h1 className="mb-4">MY ORDERS</h1>
          {loading && <Loader />}
          {error && <Error error={error} />}
          {!loading && !error && (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Item</th>
                  <th>Order Status</th>
                  <th>Cancel Order</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    onClick={() =>
                      (window.location = `/order-details/${order._id}`)
                    }
                  >
                    <td>#{order._id}</td>
                    <td>R{order.orderAmount}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>
                      {order.orderItems.map((item, index) => (
                        <span key={index}>{item.name}</span>
                      ))}
                    </td>
                    <td>{order.status}</td>
                    <td>
                      <i
                        className="fas fa-times-circle"
                        onClick={(event) => {
                          event.stopPropagation(); // Prevent row click
                          handleDelete(order._id);
                        }}
                        style={{
                          cursor: "pointer",
                          marginRight: "10px",
                          color: "red",
                          fontSize: "20px",
                        }}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
