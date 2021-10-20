import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, description, img} = props.service;
    return (
        <div>
            <div className="service-card">
                <img src={img} alt="" />
                <div>
                    <p><b>{name}</b></p>
                    <p className="description">{description}</p>
                    <button>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;