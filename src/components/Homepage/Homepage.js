import React from 'react';
import { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Homepage.css';

const Homepage = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
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
            <div className="our-process-area">
                <div className="text">
                    <p>How we do it?</p>
                    <h1>Our <span>process</span></h1>
                    <div className="brief-text">
                        <p>Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies whereas interdependent quality vectors.</p>
                    </div>
                </div>
                <div>
                    <div className="cards">
                        <div className="text-card">
                            <h6>What we do</h6>
                            <h2><span>We care about you</span></h2>
                            <p className="details brief-text">WeCare is dedicated in providing the highest quality compassionate and effective clinical care to those who cannot attain modern specialized health care services, especially in this region and have to go miles for better treatment.</p>
                        </div>
                        <div className="text-card">
                            <h6>We give you</h6>
                            <h2><span>Medical advices</span></h2>
                            <p className="brief-text">WeCare is dedicated in providing the highest quality compassionate and effective clinical care to those who cannot attain modern specialized health care services, especially in this region and have to go miles for better treatment.</p>
                        </div>
                        <div className="text-card">
                            <h6>We offer professional</h6>
                            <h2><span>Medical services</span></h2>
                            <p className="brief-text">WeCare is dedicated in providing the highest quality compassionate and effective clinical care to those who cannot attain modern specialized health care services, especially in this region and have to go miles for better treatment.</p>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className="newsletter-area">
                <div className="message-section">

                    <div>
                        <div className="message-text">
                        <p>Have any queries?</p>
                        <h2>Submit your message below.</h2>
                        </div>
                        <div className="form-area">
                            <form className="form">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>

                                <div class="mb-3">
                                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                                    <div class="invalid-feedback">
                                        Please enter a message in the textarea.
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Homepage;