import React from 'react';
import logo from '../img/logo.svg';

const Footer_Top = () => {
    return (
        <div className="footer-top">
            <div className="logo">
                <img src={logo} alt="" className="logo" />
            </div>

            <div className="socials">
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
)
};

export default Footer_Top;