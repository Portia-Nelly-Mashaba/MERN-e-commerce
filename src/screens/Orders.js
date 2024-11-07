import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersByUserId } from '../redux/actions/ordersAction';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Orders = () => {
    const orderStatus = useSelector(state => state.getOrdersByUserIdReducer);
    const { orders, error, loading } = orderStatus;

    const dispatch = useDispatch();

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser && currentUser.user._id) {
            dispatch(getOrdersByUserId(currentUser.user._id));
        } else {
            window.location.href = '/login';
        }
    }, [dispatch]);

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <h1 className='mb-4'>MY ORDERS</h1>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Transaction ID</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && (<Loader />)}
                            {orders && orders.map(order => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.transactionId}</td>
                                    <td>{order.status}</td>
                                </tr>
                            ))}
                            {error && (<Error error='Something went wrong' />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
