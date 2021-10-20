import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className="nav-anchor" to="/shipping"><button>Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;