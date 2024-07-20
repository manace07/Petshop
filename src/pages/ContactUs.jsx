import React from 'react';
import HeaderAccount from '../../includes/HeaderAccount';
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';
import 'bootstrap/dist/css/bootstrap.css';

const ContactUs = () => {
    return (
        <div>
            <div className="offcanvas-overlay"></div>
            <div className="breadcrumb-section breadcrumb-bg-color--teal">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Contact Us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-details-wrapper section-top-gap-100" data-aos="fade-up" data-aos-delay="0">
                                <div className="contact-details">
                                    <div className="contact-details-single-item">
                                        <div className="contact-details-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="contact-details-content contact-phone">
                                            <a href="tel:+0123456789">09760064670</a>
                                        </div>
                                    </div>
                                    <div className="contact-details-single-item">
                                        <div className="contact-details-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="contact-details-content contact-phone">
                                            <a href="mailto:demo@example.com">petgofrenzy@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="contact-details-single-item">
                                        <div className="contact-details-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="contact-details-content contact-phone">
                                            <span>50 Ortigas Ave, Brgy. Rosario, Pasig, Philippines</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-social">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li><a href="https://www.facebook.com/petgofrenzy2021/"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.instagram.com/petgofrenzy_petshop/"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form section-top-gap-100" data-aos="fade-up" data-aos-delay="200">
                                <div className="map-section" data-aos="fade-up" data-aos-delay="0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mapouter">
                                                    <div className="gmap_canvas">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1570553589677!2d121.09063900000001!3d14.590125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7ec0b541d6b%3A0x65ba8f78c57c793e!2sPetGo%20Frenzy%20Petshop!5e0!3m2!1sen!2stw!4v1718354579710!5m2!1sen!2stw" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <button className="material-scrolltop" type="button"></button>

            <div className="modal fade" id="modalAddcart" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col text-right">
                                        <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="modal-add-cart-product-img">
                                                    <img className="img-fluid" src="../src/assets/images/product/default/home-1/default-1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="modal-add-cart-info"><i className="fa fa-check-square"></i>Added to cart successfully!</div>
                                                <div className="modal-add-cart-product-cart-buttons">
                                                    <a href="cart.html">View Cart</a>
                                                    <a href="checkout.html">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 modal-border">
                                        <ul className="modal-add-cart-product-shipping-info">
                                            <li><strong><i className="icon-shopping-cart"></i> There Are 5 Items In Your Cart.</strong></li>
                                            <li><strong>TOTAL PRICE: </strong><span>$187.00</span></li>
                                            <li className="modal-continue-button"><a href="#" data-bs-dismiss="modal">CONTINUE SHOPPING</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalQuickview" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col text-right">
                                        <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="product-details-gallery-area mb-7">
                                            <div className="product-large-image modal-product-image-large swiper-container">
                                                <div className="swiper-wrapper">
                                                    <div className="product-image-large-image swiper-slide img-responsive">
                                                        <img src="../src/assets/images/product/default/home-1/default-1.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-large-image swiper-slide img-responsive">
                                                        <img src="../src/assets/images/product/default/home-1/default-2.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-large-image swiper-slide img-responsive">
                                                        <img src="../src/assets/images/product/default/home-1/default-3.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-large-image swiper-slide img-responsive">
                                                        <img src="../src/assets/images/product/default/home-1/default-4.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-large-image swiper-slide img-responsive">
                                                        <img src="../src/assets/images/product/default/home-1/default-5.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-large-image swiper-slide img-responsive">
                                                        <img src="../src/assets/images/product/default/home-1/default-6.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-image-thumb modal-product-image-thumb swiper-container pos-relative mt-5">
                                                <div className="swiper-wrapper">
                                                    <div className="product-image-thumb-single swiper-slide">
                                                        <img className="img-fluid" src="../src/assets/images/product/default/home-1/default-1.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-thumb-single swiper-slide">
                                                        <img className="img-fluid" src="../src/assets/images/product/default/home-1/default-2.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-thumb-single swiper-slide">
                                                        <img className="img-fluid" src="../src/assets/images/product/default/home-1/default-3.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-thumb-single swiper-slide">
                                                        <img className="img-fluid" src="../src/assets/images/product/default/home-1/default-4.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-thumb-single swiper-slide">
                                                        <img className="img-fluid" src="../src/assets/images/product/default/home-1/default-5.jpg" alt="" />
                                                    </div>
                                                    <div className="product-image-thumb-single swiper-slide">
                                                        <img className="img-fluid" src="../src/assets/images/product/default/home-1/default-6.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="gallery-thumb-arrow swiper-button-next"></div>
                                                <div className="gallery-thumb-arrow swiper-button-prev"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product-details-content-area">
                                            <div className="product-details-text">
                                                <h4 className="title">Nonstick Dishwasher PFOA</h4>
                                                <div className="price"><del>$70.00</del>$80.00</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, velit placeat assumenda incidunt</p>
                                            <div className="product-details-variable">
                                                <div className="variable-single-item">
                                                    <span>Color</span>
                                                    <div className="product-variable-color">
                                                        <label htmlFor="modal-product-color-red">
                                                            <input name="modal-product-color" id="modal-product-color-red" className="color-select" type="radio" />
                                                            <span className="product-color-red"></span>
                                                        </label>
                                                        <label htmlFor="modal-product-color-tomato">
                                                            <input name="modal-product-color" id="modal-product-color-tomato" className="color-select" type="radio" />
                                                            <span className="product-color-tomato"></span>
                                                        </label>
                                                        <label htmlFor="modal-product-color-green">
                                                            <input name="modal-product-color" id="modal-product-color-green" className="color-select" type="radio" />
                                                            <span className="product-color-green"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="variable-single-item">
                                                    <span>Quantity</span>
                                                    <div className="product-variable-quantity">
                                                        <input min="1" max="100" value="1" type="number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-product-about-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, velit placeat assumenda incidunt</p>
                                            </div>
                                            <div className="product-details-buttons">
                                                <a href="#" className="btn btn-block btn-lg btn-black-default-hover">Add To Cart</a>
                                                <a href="#" className="btn btn-block btn-lg btn-black-default-hover">Add To Wishlist</a>
                                            </div>
                                            <div className="product-details-meta mb-20">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-heart"></i>Add To Wishlist</a></li>
                                                    <li><a href="#"><i className="fa fa-random"></i>Add To Compare</a></li>
                                                </ul>
                                            </div>
                                            <div className="social-share-buttons">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalAddcart" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col text-right">
                                        <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i className="fa fa-times"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="modal-add-cart-product-img">
                                                    <img className="img-fluid" src="../src/assets/images/product/default/home-1/default-1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="modal-add-cart-info"><i className="fa fa-check-square"></i>Added to cart successfully!</div>
                                                <div className="modal-add-cart-product-cart-buttons">
                                                    <a href="cart.html">View Cart</a>
                                                    <a href="checkout.html">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 modal-border">
                                        <ul className="modal-add-cart-product-shipping-info">
                                            <li><strong><i className="icon-shopping-cart"></i> There Are 5 Items In Your Cart.</strong></li>
                                            <li><strong>TOTAL PRICE: </strong><span>$187.00</span></li>
                                            <li className="modal-continue-button"><a href="#" data-bs-dismiss="modal">CONTINUE SHOPPING</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
