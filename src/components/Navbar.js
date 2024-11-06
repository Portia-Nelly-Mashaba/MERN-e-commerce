import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const addtoreducer = useSelector((state) => state.addToCartReducer);

  const { cartItems } = addtoreducer;

  const currentUser = useSelector((state) => state.loginUserReducer.currentUser);

 
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark mb-6 mr-4 p-3"
        role="navigation"
      >
        <a className="navbar-brand" href="/">
          SnapBuy.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav justify-content-end w-100">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add Product
              </a>
            </li>
            {currentUser ? (
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: 'white'}}>{currentUser.user.name}</a>
              </li>
            ) : (
              <li className="nav-item active">
                <a className="nav-link" href="/login">Login</a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fas fa-shopping-cart"></i>
                {cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
