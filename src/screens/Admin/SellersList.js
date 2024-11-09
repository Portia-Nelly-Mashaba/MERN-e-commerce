import React from 'react';

const SellersList = () => {
  return (
    <div>
      <h2>Seller List</h2>
      <table className="table table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Product ID</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>#abc123460987</td>
            <td>
              <i className="far fa-trash-alt" onClick={() => { /* Placeholder delete action */ }}></i>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>janesmith@example.com</td>
            <td>abc123460987</td>
            <td>
              <i className="far fa-trash-alt" onClick={() => { /* Placeholder delete action */ }}></i>
            </td>
          </tr>
          {/* Add more static rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default SellersList