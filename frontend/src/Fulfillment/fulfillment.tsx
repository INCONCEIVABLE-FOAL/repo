import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Orders() {
    return (
        <div className="content content-margined">
            <div className="order-header">
                <h3>Fulfillment</h3>
            </div>
            <div className="order-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>USER</th>
                            <th>SHIPPED</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.orders.map(order => (<tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.createdAt}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.user.name}</td>
                            <td id={order.isShipped ? '':'notShipped'}>{order.isShipped.toString()}</td>
                            
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>);
};

export default Orders;