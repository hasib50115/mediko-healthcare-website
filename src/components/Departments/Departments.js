import React from 'react';
import './Departments.css';

const Departments = () => {
    return (
        <div>
            
            <div className="title-bar">
                <div className="depart-title">
                    <h2 className="title">Departments</h2>
                </div>
            </div>
            
            <div className="dept-container">
                <div className="dept">                   
                    <div className="dept-text">
                        <p>For your children</p>
                        <h3>PEDIATRIC</h3>
                        <p>For almost 50 years, Advanced Pediatric Associates has been dedicated to providing exceptional healthcare to infants, children, and adolescents. We've taken special care to develop the services you need in caring for your children as they grow. Our provider staff consists of physicians, nurse practitioners, and physician assistants who specialize in providing care for children from infancy through adolescence. We have offices in Aurora, Centennial, and Parker Colorado. We cannot wait to see your family grow into happy, healthy adults!</p>
                    </div>
                    <div className="dept-img">
                    <img src="https://image.freepik.com/free-photo/stomatologist-explaining-proper-dental-hygiene-using-presentation-teeth-skeleton-extracting-mass-from-it-dentist-telling-kid-procedure-holding-sample-human-jaw-stomatology-office_482257-13326.jpg" alt="" />
                </div>
                </div>

                <div className="dept">
                    <div className="dept-img">
                        <img src="https://www.uhc.com/dental-vision-supplemental-plans/dental-insurance/faq/_jcr_content/root/regioncontainer-main/responsivegrid/container_1350117332/image.coreimg.82.1280.jpeg/1613218593844/what-is-dental-insurance-happy-woman-at-dentist-752%C3%97478.jpeg" alt="" />
                    </div>
                    <div className="dept-text">
                        <p>Your most beautiful smile</p>
                        <h3>DENTAL</h3>
                        <p>Regular teeth cleaning by a dentist removes plaque that may develop, even with careful brushing and flossing. This is very important for getting at areas that are hard to reach on your own. Professional cleaning includes scaling and polishing. This procedure uses instruments to loosen and remove deposits from the teeth. Routine exams may include dental x-rays. Your dentist can catch problems early, so they do not become more serious and expensive to fix.</p>
                    </div>
                </div>

                <div className="dept">
                    <div className="dept-text">
                        <p>Shape up</p>
                        <h3>COSMETIC</h3>
                        <p>During the cyst removal, the high heat CO2 laser will melt down the inner content of the cyst. Complete removal of the entire cyst wall is the best way to ensure the sebaceous cysts do not return; hence laser treatments often work best especially for sensitive areas of the skin, such as the face. Generally, once removed, the skin can heal by itself.</p>
                    </div>
                    <div className="dept-img">
                        <img src="https://image.freepik.com/free-photo/female-patient-receiving-cosmetic-treatment_107420-65218.jpg" alt="" />
                    </div>                    
                </div>

                <div className="dept">
                    <div className="dept-img">
                        <img src="https://www.cihi.ca/sites/default/files/image/physicians-drupal.jpg" alt="" />
                    </div> 
                    <div className="dept-text">
                        <p>For a healtier life</p>
                        <h3>PHYSICIANS</h3>
                        <p>A physician is a medical doctor who usually focuses on the non-surgical treatment of patients’ conditions. That is not to say that being a physician is not practical; most specialisms have a unique range of procedures that relate to their specialty. It is common to work in the hospital setting, working in teams of varying sizes.</p>
                    </div>
                                       
                </div>


            </div>
        </div>
    );
};

export default Departments;