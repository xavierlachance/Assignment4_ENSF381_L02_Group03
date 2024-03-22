import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <div>
            <img src="../public/images/logo.png" alt="CompanyLogo"/>
            <p>Company Name</p>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;