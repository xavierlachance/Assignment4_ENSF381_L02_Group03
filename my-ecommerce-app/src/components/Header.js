import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <div>
            <img className="logo" src="../../images/logo.png" alt="CompanyLogo"/>
            <p className="company-name">Company Name</p>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/shop">Products</a>
                <a href="/contact">Login</a>
            </nav>
        </div>
    );
};

export default Header;