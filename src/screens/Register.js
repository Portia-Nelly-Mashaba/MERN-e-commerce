import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const register = () => {
        
    }
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="row w-100">
                <div className="col-md-5 mx-auto mt-4 card p-4">
                    <h1 className="text-center">Register</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-control mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="form-control mb-3"
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                    />

                    <button className='btn btn-dark mt-2'onClick={register}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
