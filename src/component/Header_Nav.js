import React from 'react';
import useWindowDimensions from "../util/useWindowDimension";

const HeaderNav = () => {
    const { height, width } = useWindowDimensions();
    return (
        <nav className="nav-left">
            <ul className="menu">
                <li className="menu-item">
                    <a href="#">How we work</a>
                </li>
                <li className="menu-item">
                    <a href="#">Blog</a>
                </li>
                <li className="menu-item">
                    <a href="#">Account</a>
                </li>
                <li className="menu-item last">
                    <a href="#">
                        {width > 1022 ? "View plans" : "Check price"}
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default HeaderNav;