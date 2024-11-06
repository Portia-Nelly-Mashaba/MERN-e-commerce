import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/userAction";

function Navbar() {
  const addtoreducer = useSelector((state) => state.addToCartReducer);

  const { cartItems } = addtoreducer;

  const dispatch = useDispatch()

  const currentUser = useSelector(
    (state) => state.loginUserReducer.currentUser
  );

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
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Add Product
              </a>
            </li>
            {currentUser && currentUser.user ? (
              <li className="nav-item dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  {currentUser.user.name}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/profile">
                    My Profile
                  </a>
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a className="dropdown-item" href="/products">
                    My Products
                  </a>
                  <hr class="dropdown-divider" />
                  <li class="dropdown-item" style={{ color: "black" }} onClick={()=>dispatch(logoutUser())}>
                    Logout
                  </li>
                </div>
              </li>
            ) : (
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="/login"
                  style={{ color: "white" }}
                >
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i
                  className="fas fa-shopping-cart"
                  style={{ color: "white" }}
                ></i>
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
