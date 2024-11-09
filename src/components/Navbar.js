import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/userAction";

function Navbar() {
  const addtoreducer = useSelector((state) => state.addToCartReducer);
  const { cartItems } = addtoreducer;
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.loginUserReducer.currentUser);

  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark p-3 w-100"
        role="navigation"
        style={{ borderTop: "15px solid #25b49c", borderBottom: "3px solid #25b49c" }}
      >
        <a
          className="navbar-brand d-flex align-items-center"
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            color: "#25b49c",
          }}
        >
          SnapBuy.
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: "thin",
              fontStyle: "italic",
              color: "white",
              marginLeft: "5px",
            }}
          >
            MarketPlace
          </span>
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
              <a className="nav-link" href="/addnewproduct" style={{ color: "white" }}>
                Add Product
              </a>
            </li>
            {currentUser && currentUser.user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownMenuButton"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  {currentUser.user.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ backgroundColor: "#2c2c2c" }} // Lighter shade of black/gray
                >
                  <a className="dropdown-item text-white" href="/profile" style={{ color: "white" }}>
                    My Profile
                  </a>
                  <a className="dropdown-item text-white" href="/orders" style={{ color: "white" }}>
                    Orders
                  </a>
                  <a className="dropdown-item text-white" href="/products" style={{ color: "white" }}>
                    My Products
                  </a>
                  <hr className="dropdown-divider" />
                  <a
                    className="dropdown-item text-white"
                    href="/login"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(logoutUser());
                    }}
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <li className="nav-item active">
                <a className="nav-link" href="/login" style={{ color: "white" }}>
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fas fa-shopping-cart" style={{ color: "white" }}></i>
                {cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .dropdown-menu a:hover {
          color: #25b49c !important; /* Change hover color */
          background-color: transparent !important; /* Prevent background from changing */
        }
      `}</style>
    </>
  );
}

export default Navbar;
