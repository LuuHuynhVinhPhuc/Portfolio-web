import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className='services section' id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Product <br /> Developer</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View more {" "} <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services_modal-title">Product Developer</h3>
                            <p className="services_modal-description">
                                With my experience, this is what i can do:
                            </p>

                            <ul className="services_modal-services grid">
                                <li className='services_modal-service'>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Develop the user interface and database for it.</p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Web page development.</p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Create database for management.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Visual <br /> Designer</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>View more {" "} <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services_modal-title">Visual Designer</h3>
                            <p className="services_modal-description">
                                With my experience, this is what i can do:
                            </p>

                            <ul className="services_modal-services grid">
                                <li className='services_modal-service'>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Create user interface designs.</p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Develop responsive web designs.</p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Design brand identity and logos.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services