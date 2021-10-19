import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, logout} = useFirebase();
    return (
        <div class="bg-light">
            <nav class="navbar navbar-light">
                <div class="container-fluid navbar">
                <a class="navbar-brand"><h2 className="logo">Mediko</h2></a>
                <form class="d-flex">
                    <Link className="nav-anchor" to="/home">Home</Link>
                    <Link className="nav-anchor" to="/departments">Departments</Link>
                    <Link className="nav-anchor" to="/register">Register</Link>
                    <Link className="nav-anchor" to="/login">Log In</Link>
                    { user.displayName && <button onClick={logout}>Log Out</button> }
                    <span>{user.displayName}</span>
                </form>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;