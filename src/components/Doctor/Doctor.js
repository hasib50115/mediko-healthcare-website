import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const {name, designation, img} = props.doctor;
    return (
        <div className="doctor">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="card-text">
                <h4>{designation}</h4>
                <h6>{name}</h6> 
            </div>           
        </div>
    );
};

export default Doctor;