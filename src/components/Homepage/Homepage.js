import React from 'react';
import { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Homepage.css';

const Homepage = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./Services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
      }, []);
    return (
        <div>
            <div className="homepage-banner">
                <div className="homepage-banner">
                    <div className="title-area">
                        <h1>Your doctor,</h1>
                        <h2>your treatment</h2>
                        <p className="description">Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
                        <div>
                            <button className="btn">DISCOVER MORE</button>
                            <button className="btn button">CONSULT US</button>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="services-container">
                    <div className="services-text">
                        <p>Services</p>
                        <h2>What Services</h2>
                        <h1 className="logo">Mediko Offers?</h1>
                        <br/>
                        <p>All the doctors & nurses, and  other sutffs</p>
                        <p>are passionate aubout their works. </p>
                    </div>
                </div>
                <div className="services-cards">
                {
                    services.map(service => <Service service={service} key={service.id}></Service> )
                }
                </div>
            </div>



        </div>
    );
};

export default Homepage;