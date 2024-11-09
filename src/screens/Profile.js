import React from 'react';


const Profile = () => {
  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <div className="row g-0">
          {/* Profile Picture */}
          <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
            <img
              src={'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=600'}
              className="img-fluid "
              alt="User Profile"
              
            />
          </div>

          {/* User Information */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <p className="card-text"><small className="text-muted">role</small></p>
              <p className="card-text">bio</p>

              {/* User Rating */}
              <div className="d-flex align-items-center mb-3">
                
                <span className="ms-2"> 5.0</span>
              </div>

              {/* Action Buttons */}
              <div className="d-flex">
                <button className="btn btn-primary me-2">
                  View Products
                </button>
                <button className="btn btn-outline-secondary">
                   Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

