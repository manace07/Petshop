import React from 'react';
import HeaderLoginRegister from '../../includes/HeaderLoginRegister';
import Header from '../../includes/Header';
import '../../includes/Main';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../includes/Footer';
import { Link } from 'react-router-dom';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper core and modules

const Index = () => {
    return (
        <div className="page-container">
            {/* Offcanvas Overlay */}
            <div className="offcanvas-overlay"></div>

            {/* Start Hero Slider Section */}
            <div className="hero-slider-section">
                <Swiper
                    spaceBetween={0}
                    navigation
                    pagination={{ clickable: true }}
                    className="hero-slider-active"
                    modules={[Navigation, Pagination]} // Use Swiper modules
                >
                    {/* Hero Single Slider Item */}
                    <SwiperSlide>
                        <div className="hero-single-slider-item">
                            <div className="hero-slider-bg">
                                <img src="../src/assets/images/hero-slider/1.png" alt="Hero Slide 1" />
                            </div>
                            <div className="hero-slider-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="hero-slider-content">
                                                <h4 className="subtitle">New colors available!</h4>
                                                <h2 className="title">Fighting Fish <br /> Betta </h2>
                                                <Link to="/shop" className="btn btn-lg btn-outline-golden">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Hero Single Slider Item */}
                    <SwiperSlide>
                        <div className="hero-single-slider-item">
                            <div className="hero-slider-bg">
                                <img src="../src/assets/images/hero-slider/2.png" alt="Hero Slide 2" />
                            </div>
                            <div className="hero-slider-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="hero-slider-content">
                                                <h4 className="subtitle">For dogs</h4>
                                                <h2 className="title">Dog Accessories <br /> and more...</h2>
                                                <Link to="/shop" className="btn btn-lg btn-outline-golden">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* End Hero Slider Section */}

            {/* Start Banner Section */}
            <div className="banner-section">
                <div className="banner-wrapper clearfix">
                    {/* Banner Single Items */}
                    {/* Repeat similar blocks for other banners */}
                </div>
            </div>
            {/* End Banner Section */}

            <Footer />
        </div>
    );
};

export default Index;
