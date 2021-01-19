import React from 'react';

import snappy from '../img/icon-snappy-process.svg';
import affordable from '../img/icon-affordable-prices.svg';
import people from '../img/icon-people-first.svg';

const Main_About = () => {
    return (
        <div>
            <section className="about-us">
                <div className="section-header">
                    <div className="underline"></div>
                    <h1 className="section-heading">We’re different</h1>
                </div>
                <div className="services">
                    <div className="service">
                        <div className="icon">
                            <img src={snappy} alt=""/>
                        </div>
                        <h3>Snappy Process</h3>
                        <p className="text">
                            Our application process can be completed in minutes, not hours.
                            Don’t get stuck filling in tedious forms.
                        </p>
                    </div>

                    <div className="service">
                        <div className="icon">
                            <img src={affordable} alt=""/>
                        </div>
                        <h3>Affordable Prices</h3>
                        <p className="text">
                            We don’t want you worrying about high monthly costs.
                            Our prices may be low, but we still offer the best coverage possible.
                        </p>
                    </div>

                    <div className="service">
                        <div className="icon">
                            <img src={people} alt=""/>
                        </div>
                        <h3>People First</h3>
                        <p className="text">
                            Our plans aren’t full of conditions and clauses to prevent payouts.
                            We make sure you’re covered when you need it.
                        </p>
                    </div>
                </div>

                <div className="inner-box">
                    <h1> Find out more about how we work </h1>
                    <button>How we work</button>
                </div>

            </section>
        </div>
    )
};

export default Main_About;