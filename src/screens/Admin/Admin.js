// AdminLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <h2>Admin Panel</h2>
          <ul className='admin p-2'>
            <li><Link to='/admin/userslist' style={{ color: 'black', textDecoration: 'none' }}>UsersList</Link></li>
            <li><Link to='/admin/productslist' style={{ color: 'black', textDecoration: 'none' }}>Products List</Link></li>
            <li><Link to='/admin/sellerslist' style={{ color: 'black', textDecoration: 'none' }}>Sellers List</Link></li>
            <li><Link to='/admin/addnewproduct' style={{ color: 'black', textDecoration: 'none' }}>Add New Product</Link></li>
            <li><Link to='/admin/orderslist' style={{ color: 'black', textDecoration: 'none' }}>Orderslist</Link></li>
          </ul>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}


