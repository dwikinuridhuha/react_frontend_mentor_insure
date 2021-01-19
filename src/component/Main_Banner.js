import React from 'react';

import introMobile from '../img/image-intro-mobile.jpg';
import introDektop from '../img/image-intro-desktop.jpg';

const Main_Banner = () => {
    return (
        <div>
            <section className="banner">
                <div className="banner-img">
                    <img src={introMobile} className="mobile-banner" alt=""/>
                    <img src={introDektop} className="desktop-banner" alt=""/>
                </div>

                <div className="banner-text">
                    <h1 className="banner-heading">Humanizing your insurance.</h1>
                    <p className="description">
                        Get your life insurance coverage easier and faster.
                        We blend our expertise and technology to help you find the plan that’s right for you.
                        Ensure you and your loved ones are protected.
                    </p>
                    <button>View plans</button>
                </div>
            </section>
        </div>
    )
};

export default Main_Banner;