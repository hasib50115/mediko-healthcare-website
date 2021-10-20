import React from 'react';
import './AboutUs.css';
import { useState, useEffect } from 'react';
import Doctor from '../Doctor/Doctor';

const AboutUs = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('./doctors.JSON')
        .then(res => res.json())
        .then(data => setDoctors(data))
      }, []);
    return (
        <div>
            <div className="about-section">
                <div className="about-container">
                    <p>About Us</p>
                    <h2 className="about-title">Our Team</h2>            
                </div>
            </div>
            <div className="founder-area">
                <div className="founder-img">
                    <img src='http://medicare.bold-themes.com/general-hospital/wp-content/uploads/sites/14/2018/03/img-general-hospital-05.png' alt="" />
                </div>
                
                <div className="founder-text-area"> 
                    <div className="founder">
                        <p>Founder & Owner</p>
                        <h2>Dr Melisa Brown</h2>
                        <div className="founder-text">
                            <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="doctors-area">
                <div className="instructors">
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor> )
                }
                </div>
            </div>
        </div>
    );
};

export default AboutUs;