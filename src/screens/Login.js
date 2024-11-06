import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/userAction";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Login = () => {
  const loginReducer = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginReducer;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function login(e) {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData));
  }

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 mt-6">
      <div className="row w-100">
        <div className="col-md-5 mx-auto mt-6 card p-4">

          <h1 className="text-center">LOGIN</h1>

          {error && <Error error="Invalid credentials" />}

          {loading && <Loader />}

          <form onSubmit={login}>
            <input
              type="email"
              placeholder="Email Address"
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right">
              <button type="submit" className="btn btn-dark mt-3 mb-4">
                Login
              </button>
            </div>
          </form>

          <a href="/register">Click here to Register</a>

        </div>
      </div>
    </div>
  );
};

export default Login;
