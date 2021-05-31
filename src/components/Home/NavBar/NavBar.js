import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-area">
            <nav className="navbar navbar-expand-lg navbar-light container">
            <div className="container-fluid">
                <a className="navbar-brand" href="#logo"><img src="https://demo1leotheme.b-cdn.net/leo_oobliss_demo/img/leo-oobliss-logo-1596436837.jpg" alt="bd-bliss" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ps-5 ms-5">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#shop">Shop</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#products">Products</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#testimonials">Testimonials</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#login">LogIn</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;