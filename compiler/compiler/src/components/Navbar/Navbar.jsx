import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Web Platform</h1>
            </div>
            <div className="navbar-nav">
                <Link to="/problems" className="nav-link">Problems</Link>
                <Link to="/admin" className="nav-link admin-link">Admin</Link>
            </div>
        </nav>
    );
};

export default Navbar;
