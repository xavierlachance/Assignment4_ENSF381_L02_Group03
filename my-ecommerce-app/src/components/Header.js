import React from "react";
import "./Header.css";

function Header() {
    return (
        <div>
            <img src="../public/images/logo.png" alt="CompanyLogo"/>
            <p>Company Name</p>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;