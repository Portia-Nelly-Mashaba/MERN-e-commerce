import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {

    const addtoreducer = useSelector(state=>state.addToCartReducer)

    const {cartItems} = addtoreducer

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-6 mr-4 p-3" role="navigation">
                <a className="navbar-brand" href="/">SnapBuy.</a>
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
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                <i className='fas fa-shopping-cart'></i>{cartItems.length}
                            </a>
                        </li>


                        {/* <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="dropdown2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Dropdown2
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown2">
                                <li className="dropdown-item"><a href="#">Action 2 A</a></li>
                                <li className="dropdown-item"><a href="#">Action 2 B</a></li>
                                <li className="dropdown-item"><a href="#">Action 2 C</a></li>
                                <li className="dropdown-item dropdown">
                                    <a
                                        className="dropdown-toggle"
                                        id="dropdown2-1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Dropdown2.1
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown2-1">
                                        <li className="dropdown-item"><a href="#">Action 2.1 A</a></li>
                                        <li className="dropdown-item"><a href="#">Action 2.1 B</a></li>
                                        <li className="dropdown-item"><a href="#">Action 2.1 C</a></li>
                                        <li className="dropdown-item dropdown">
                                            <a
                                                className="dropdown-toggle"
                                                id="dropdown2-1-1"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Dropdown2.1.1
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdown2-1-1">
                                                <li className="dropdown-item"><a href="#">Action 2.1.1 A</a></li>
                                                <li className="dropdown-item"><a href="#">Action 2.1.1 B</a></li>
                                                <li className="dropdown-item"><a href="#">Action 2.1.1 C</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-item dropdown">
                                            <a
                                                className="dropdown-toggle"
                                                id="dropdown2-1-2"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Dropdown2.1.2
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdown2-1-2">
                                                <li className="dropdown-item"><a href="#">Action 2.1.2 A</a></li>
                                                <li className="dropdown-item"><a href="#">Action 2.1.2 B</a></li>
                                                <li className="dropdown-item"><a href="#">Action 2.1.2 C</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

