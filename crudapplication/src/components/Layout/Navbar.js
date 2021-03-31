import React,{useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {

    var isLoggedIn = window.localStorage.getItem('email') !== null;

    useEffect(() => {
        { 
        }
            setInterval(() => {
                const userString = localStorage.getItem("email");
                if(userString) {
                    isLoggedIn=true;
                }
                else {
                    isLoggedIn=false;
                }
                }, [])
        }, 20);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" href="#">
                    Crud Application
        </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {
                                isLoggedIn ?
                                    <NavLink className="nav-link" exact to="/home">
                                        Home
                                    </NavLink>
                                    :
                                    null

                            }
                        </li>

                    </ul>
                    <ul className="navbar-nav  navbar-right">
                        <li className="nav-item">
                            {
                                    !isLoggedIn ?
                                    <NavLink className="nav-link" exact to="/login">
                                        Login
                                    </NavLink>
                                    :
                                    null

                            }

                        </li>
                        <li className="nav-item">
                            {
                                !isLoggedIn ?
                                    <NavLink className="nav-link" exact to="/register">
                                        Signup
                                     </NavLink>
                                     : null

                            }

                        </li>
                        <li className="nav-item">
                            {
                                isLoggedIn ?
                                    <NavLink className="nav-link" to="/logout">
                                        Logout
                            </NavLink>
                            : null


                            }
                        </li>
                    </ul>
                </div>
                {
                   
                   isLoggedIn ?
                        <Link className="btn btn-outline-light" to="/add">
                            Add Player
                    </Link>
                    : null


                }


            </div>
        </nav>
    );
};

export default Navbar;
