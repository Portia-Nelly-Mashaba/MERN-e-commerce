import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../redux/actions/userAction";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";


const Register = () => {
  const registerState = useSelector((state) => state.registerNewUserReducer);
  const { loading, error, success } = registerState;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const dispatch = useDispatch()

  function register(e) {
    e.preventDefault()
    const userData = {
        name,
        email,
        password,
    };

    if (password !== cpassword) {
        alert('Passwords do not match');
        return;
    }else{
        dispatch(registerNewUser(userData));
    } 
  }
  
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100">
        <div className="col-md-5 mx-auto mt-4 card p-4">
          <h1 className="text-center">Register</h1>

          {error && <Error error="Email Address is already registered" />}

          {loading && <Loader />}

          {success && <Success message='Your Registration is succesful, Please login'/>}

          <form onSubmit={register}>
            <input
              type="text"
              placeholder="Name"
              className="form-control mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control mb-3"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              required
            />

            <div className="text-right"> 
            <button type="submit" className="btn btn-dark mt-3 mb-4">
              Register
            </button>
            </div>
          </form>

          <a href="/login">Click here to Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
