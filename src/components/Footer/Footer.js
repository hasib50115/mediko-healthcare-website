import React from 'react';
import Header from '../Header/Header';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="info-container">
                <div className="info footer-text">
                    <h2 className="logo">Mediko</h2>
                    <p>Mediko is one of the renwoned hospital in Bangladesh, serving people since the last 50 years with great fame. Our goal is to serve people with the most affection and affordable price that no one think that they are beyond the modern medical treatment. We have various departments to serve people for their betterment. Mediko is your most beloved healthcare hospital we think.</p>
                </div>
                <div className="info">
                    <h4>Our Services</h4>
                    <p>Appointments</p>
                    <p>Working hours</p>
                    <p>Cost calculator</p>
                    <p>Procedures</p>
                    <p>Special offers</p>
                </div>
                <div className="info">
                    <h4> Contacts</h4>
                    <p>Mobile: +8801971505050</p>
                    <p>email: info.mediko50@gmail.com</p>
                    <p>Navana Tower, Dhanmondi 28, Dhaka</p>
                </div>
            </div>
            <div className="footer-area">
                <div className="footer">
                <div>
                    <p>Copyright by Mediko 2021. All rights reserved.</p>
                </div>
                <div>
                    <Link className="nav-anchor" to="/home">Home</Link>
                    <Link className="nav-anchor" to="/departments">Departments</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;