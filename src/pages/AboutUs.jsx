import React from 'react';
import HeaderAccount from '../../includes/HeaderAccount';
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';
import 'bootstrap/dist/css/bootstrap.css';

const AboutUs = () => {
    return (
        <div>

            {/* Offcanvas Overlay */}
            <div className="offcanvas-overlay"></div>

            {/* Start Breadcrumb Section */}
            <div className="breadcrumb-section breadcrumb-bg-color--teal">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">About Us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumb Section */}

            {/* Start About Top */}
            <div className="about-top">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between d-sm-column">
                        <div className="col-md-6">
                            <div className="about-img" data-aos="fade-up" data-aos-delay="0">
                                <div className="img-responsive">
                                    <img src="../src/assets/images/about/about.png" alt="About Us" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="title">ABOUT PETGO FRENZY PETSHOP</h3>
                                <h5 className="semi-title">
                                    Our mission is to provide the best products, care, and support for every furry, feathered, or finned friend that comes through our doors, ensuring they leave happier and healthier than ever.
                                </h5>
                                <p>
                                    Welcome to PetGo Frenzy Petstore, where your pets' happiness is our top priority! We offer a wide selection of high-quality pet supplies, from nutritious food and fun toys to cozy beds and stylish accessories. Our friendly and knowledgeable staff are passionate about pets and dedicated to helping you find everything you need for your furry, feathered, or finned family members. Whether you're a new pet parent or an experienced one, PetGo Frenzy Petstore is here to support you with expert advice, exceptional service, and a welcoming environment where every pet is treated like family. Come experience the frenzy of love and care that makes us the go-to destination for all your pet needs!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Top */}

            <Footer />
        </div>
    );
};

export default AboutUs;