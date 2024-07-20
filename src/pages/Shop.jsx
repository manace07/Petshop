import React from 'react';
import HeaderAccount from '../../includes/HeaderAccount';
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div>

            {/* Offcanvas Overlay */}
            <div className="offcanvas-overlay"></div>

            {/* ...:::: Start Breadcrumb Section:::... */}
            <div className="breadcrumb-section breadcrumb-bg-color--teal">
                {/* <div className="breadcrumb-wrapper"> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">SHOP</h3>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div> {/* ...:::: End Breadcrumb Section:::... */}

            {/* Start Banner Section */}
            <div className="banner-section">
                <div className="banner-wrapper clearfix">
                    {/* Start Banner Single Item */}
                    <div className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
                        data-aos="fade-up" data-aos-delay="0">
                        <div className="image">
                            <img className="img-fluid" src="../src/assets/images/category/c1.png" alt="" />
                        </div>
                        <Link to="../productfish" className="content">
                            <div className="inner">
                                <h4 className="title">Fishes</h4>
                                <h6 className="sub-title">Shop now</h6>
                            </div>
                            <span className="round-btn"><i className="ion-ios-arrow-thin-right"></i></span>
                        </Link>
                    </div>
                    {/* End Banner Single Item */}
                    {/* Start Banner Single Item */}
                    <div className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
                        data-aos="fade-up" data-aos-delay="200">
                        <div className="image">
                            <img className="img-fluid" src="../src/assets/images/category/c2.png" alt="" />
                        </div>
                        <Link to="../productffas" className="content">
                            <div className="inner">
                                <h4 className="title">Fish Food and Accessories</h4>
                                <h6 className="sub-title">Shop now</h6>
                            </div>
                            <span className="round-btn"><i className="ion-ios-arrow-thin-right"></i></span>
                        </Link>
                    </div>
                    {/* End Banner Single Item */}
                    {/* Start Banner Single Item */}
                    <div className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
                        data-aos="fade-up" data-aos-delay="400">
                        <div className="image">
                            <img className="img-fluid" src="../src/assets/images/category/c3.png" alt="" />
                        </div>
                        <Link to="../productdog" className="content">
                            <div className="inner">
                                <h4 className="title">Dog Food and Accessories</h4>
                                <h6 className="sub-title">Shop now</h6>
                            </div>
                            <span className="round-btn"><i className="ion-ios-arrow-thin-right"></i></span>
                        </Link>
                    </div>
                    {/* End Banner Single Item */}
                    {/* Start Banner Single Item */}
                    <div className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
                        data-aos="fade-up" data-aos-delay="600">
                        <div className="image">
                            <img className="img-fluid" src="../src/assets/images/category/c4.png" alt="" />
                        </div>
                        <Link to="../productcat" className="content">
                            <div className="inner">
                                <h4 className="title">Cat Food and Accessories</h4>
                                <h6 className="sub-title">Shop now</h6>
                            </div>
                            <span className="round-btn"><i className="ion-ios-arrow-thin-right"></i></span>
                        </Link>
                    </div>
                    {/* End Banner Single Item */}
                </div>
            </div>
            {/* End Banner Section */}

            {/* Footer Section */}
            <Footer />

            {/* material-scrolltop button */}
            <button className="material-scrolltop" type="button"></button>
        </div>
    );
};

export default Shop;
