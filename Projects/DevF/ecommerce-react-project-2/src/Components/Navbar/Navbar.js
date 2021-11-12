import React from 'react'
import { Link } from 'react-router-dom'
import payload from '../../Utils/payload';

function Navbar() {

    const user = payload();
    console.log(payload())

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">VITS</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {user ? (
                        <ul className="navbar-nav">
                            
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/profile">
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/item">
                                    My items
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    )
                        : (
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/login" >
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup" >
                                        Signup
                                    </Link>
                                </li>
                            </ul>
                        )
                    }
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
