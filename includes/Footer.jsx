import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from './Main';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <footer className="footer-section footer-bg section-top-gap-100">
            <div className="footer-wrapper">
                {/* Start Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row mb-n6">
                            <div className="col-xl-2 col-lg-4 col-md-6 mb-6">
                                <div className="footer-social" data-aos="fade-up" data-aos-delay="0">
                                    <h4 className="title">FOLLOW US</h4>
                                    <ul className="footer-social-link">
                                        <li><a href="https://www.facebook.com/petgofrenzy2021"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.instagram.com/petgofrenzy_petshop/"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-6">
                                <div className="footer-newsletter" data-aos="fade-up" data-aos-delay="200">
                                    <h4 className="title">DON'T MISS OUT ON THE LATEST</h4>
                                    <div className="form-newsletter">
                                        <form action="#" method="post">
                                            <div className="form-fild-newsletter-single-item input-color--golden">
                                                <input type="email" placeholder="Your email address..." required />
                                                <button type="submit">SUBSCRIBE!</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-6">
                                <div className="footer-widget-single-item footer-widget-color--golden" data-aos="fade-up" data-aos-delay="600">
                                    <h5 className="title">Developed by COMMSYS</h5>
                                    <div className="footer-about">
                                        <p>Marc Lorenz G. De Villa</p>
                                        <p>Ma. Joanna Dela Cruz</p>
                                        <p>Marc Levin T. Malabanan</p>
                                        <p>Jeremiah James Sagad</p>
                                        <p>Marella Mikhaela M. Salcedo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer Top */}

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row justify-content-between align-items-center align-items-center flex-column flex-md-row mb-n6">
                            <div className="col-auto mb-6">
                                <div className="footer-copyright">
                                    <p className="copyright-text">&copy; 2024 <a href="#">PetGo Frenzy Petshop</a></p>
                                </div>
                            </div>
                            <div className="col-auto mb-6">
                                <div className="footer-payment">
                                    <div className="image">
                                        <img src="../src/assets/images/payment.png" alt="Payment methods" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <button className="material-scrolltop" type="button"></button>
            <script src="assets/js/vendor/vendor.min.js"></script>
            <script src="assets/js/plugins/plugins.min.js"></script>
            <script src="assets/js/main.js"></script>
        </footer>
    );
};

export default Footer;
