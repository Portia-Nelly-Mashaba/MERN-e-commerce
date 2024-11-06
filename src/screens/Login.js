import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userAction";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    function login(e) {
        e.preventDefault();
        const userData = { email, password };
        dispatch(loginUser(userData));
    }

    useEffect(() =>{
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }
    }, [])

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100 mt-6">
            <div className="row w-100">
                <div className="col-md-5 mx-auto mt-6 card p-4">
                    <h1 className="text-center">LOGIN</h1>
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
                            <button type="submit" className="btn btn-dark mt-2">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

