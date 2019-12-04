import React, { Component } from 'react';
import './Contact.css';


export default class Contact extends Component {


    render() {
        return (
            <div className="Contact">
                <div className="grid-container">
                    <div className="grid-item one">
                        <div className="inside-container">
                            <h1 className="heading">REACH US AT</h1>
                            <ul>
                                <li><i className="fa fa-road"></i> Sant longowal institute engineering and technology, Longowal, Sangrur, Punjab, PIN:148106</li>
                                <li><i className="fa fa-phone"></i> 8264982264</li>
                                <li><i className="fa fa-phone"></i> 6280630823</li>
                                <li><i className="fa fa-envelope"></i> thepvrock786@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-item two">
                        <div className="inside-container-map">
                            <iframe className="map" title="mapy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30676012.524216026!2d64.44561934566444!3d20.191107321453266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910f8bd26a61ba3%3A0xa45e3a23dfc09f9b!2sSant%20Longowal%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1573539640773!5m2!1sen!2sin"
                                frameborder="0" allowfullscreen="">
                            </iframe>
                        </div>
                    </div>
                    <div className="grid-item three">
                        <div className="inside-container-contact">
                            <h1 className="heading-2">Contact Us</h1>
                            <div className="inner-section">
                                <input type="text" className="in name" placeholder="Your Name" />
                                <input type="email" className="in email" placeholder="Your Email" />
                                <input type="number" className="in number" placeholder="Your Number" />
                                <textarea placeholder="Message" className="in message"></textarea>
                                <button className="button">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item four">
                        <div className="inside-container-team">
                            <ul>
                                {/* <button>College Ambassador</button> */}
                                <button>Faculity Members</button>
                                <button>Core community</button>
                                <button>Development Team</button>
                            </ul>
                        </div>
                    </div>

                    {/* <footer className="site-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-2">
                                    <img src="white.png" width="150" height="150" />
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="text-justify">Sant Longowal Institute of Engineering and Technology </h4>
                                    <p>Deemed to be university, Under MHRD, Govt. of India</p>
                                </div>



                                <div className="col-xs-3">
                                    <h6>Quick Links</h6>
                                    <ul className="footer-links">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Contribute</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-6 col-xs-12">
                                    <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                            <a href="#">techFEST</a>.
                        </p>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <ul className="social-icons">
                                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer> */}
                </div>
            </div>
        )
    }
}
