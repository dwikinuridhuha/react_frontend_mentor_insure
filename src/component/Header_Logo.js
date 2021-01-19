import React from 'react';

import logo from '../img/logo.svg';
import hemberger from '../img/icon-hamburger.svg';
import close from '../img/icon-close.svg';

function toggleMenu() {
    const headerTop = document.querySelector('.header-top');
    const menuItems = document.querySelectorAll('.menu-item');
    const nav = document.querySelector('.nav-left');
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-icon');
    const close = document.querySelector('.close');

    nav.classList.toggle('change');
    menu.classList.toggle('change');
    icon.classList.toggle('change');
    close.classList.toggle('change');
    menuItems.forEach(item => {
        item.classList.toggle('change');
    });
    headerTop.classList.toggle('change');
}

const Header_Logo = () => {
    return (
        <div className="header-top">
            <div className="logo">
                <img src={logo} alt="" className="logo"/>
            </div>

            <div className="hamburger-menu" onClick={() => {
                toggleMenu();
            }}>
                <span><img src={hemberger} alt="" className="menu-icon"/></span>
                <span><img src={close} alt="" className="close"/></span>
            </div>
        </div>
    )
};

export default Header_Logo;