import Main from '../../includes/Main';
import Header from '../../includes/Header';
import HeaderAccount from '../../includes/HeaderAccount';
import Footer from '../../includes/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const ProductFfas = () => {
return (
<div>
    <div className="breadcrumb-section breadcrumb-bg-color--teal">
        <div className="breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="breadcrumb-title">Fish Food and Aquarium Supplies</h3>
                        <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="shop-section">
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row">
                <div class="col-lg-3">
                    <div class="siderbar-section" data-aos="fade-up" data-aos-delay="0">
                        <div class="sidebar-single-widget">
                            <h6 class="sidebar-title">CATEGORIES</h6>
                            <div class="sidebar-content">
                                <ul class="sidebar-menu">
                                    <li><a href="#">Fish Food</a></li>
                                    <li><a href="#">Aquarium & Stands</a></li>
                                    <li><a href="#">Gravel, Sand & Stones</a></li>
                                    <li><a href="#">Ornaments</a></li>
                                    <li><a href="#">Live & Artificial Plants</a></li>
                                    <li><a href="#">Filter & Pumps</a></li>
                                    <li><a href="#">Heater & Lights</a></li>
                                    <li><a href="#">Aquarium Accesories</a></li>
                                </ul>
                            </div>
                        </div> {/* End Single Sidebar Widget */}
                    </div> {/* End Sidebar Area */}
                </div>
                <div className="col-lg-9">
                    <div className="shop-sort-section">
                        <div className="container">
                            <div className="row">
                                <div className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column"
                                    data-aos="fade-up" data-aos-delay="0">
                                    <div className="sort-tablist d-flex align-items-center">
                                        <div
                                            className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                            <nav aria-label="breadcrumb">
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/shop">Shop</Link></li>
                                                    <li className="active" aria-current="page">Fish Food and Accessories
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="sort-select-list d-flex align-items-center">
                                        <label className="mr-2">Sort By:</label>
                                        <form action="#">
                                            <fieldset>
                                                <select name="speed" id="speed">
                                                    <option>Sort by popularity</option>
                                                    <option selected="selected">Sort by price: low to high</option>
                                                    <option>Sort by price: high to low</option>

                                                </select>
                                            </fieldset>
                                        </form>
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="sort-product-tab-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="tab-content tab-animate-zoom">
                                        <div className="tab-pane active show sort-layout-single" id="layout-3-grid">
                                            <div className="row">
                                                <div className="col-xl-4 col-sm-6 col-12">
                                                    <div className="product-default-single-item product-color--golden"
                                                        data-aos="fade-up" data-aos-delay="0">
                                                        <div className="image-box">
                                                            <a href="#" className="image-link">
                                                                <img src="../src/assets/images/product/ffas/ff-1.png" alt="" />
                                                            </a>
                                                            <div className="action-link">
                                                                <div className="action-link-left">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalAddcart">Add to Cart</a>
                                                                </div>
                                                                <div className="action-link-right">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalQuickview"><i
                                                                            className="icon-magnifier"></i></a>
                                                                    <a href="wishlist.html"><i
                                                                            className="icon-heart"></i></a>
                                                                    <a href="compare.html"><i
                                                                            className="icon-shuffle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="content-left">
                                                                <h6 className="title"><a href="#">BettaMin Small
                                                                        Pellets</a>
                                                                </h6>
                                                                <ul className="review-star">
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="empty"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="content-right">
                                                                <span className="price">₱100.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-sm-6 col-12">
                                                    <div className="product-default-single-item product-color--golden"
                                                        data-aos="fade-up" data-aos-delay="200">
                                                        <div className="image-box">
                                                            <a href="#" className="image-link">
                                                                <img src="../src/assets/images/product/ffas/ff-2.png" alt="" />
                                                            </a>
                                                            <div className="action-link">
                                                                <div className="action-link-left">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalAddcart">Add to Cart</a>
                                                                </div>
                                                                <div className="action-link-right">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalQuickview"><i
                                                                            className="icon-magnifier"></i></a>
                                                                    <a href="wishlist.html"><i
                                                                            className="icon-heart"></i></a>
                                                                    <a href="compare.html"><i
                                                                            className="icon-shuffle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="content-left">
                                                                <h6 className="title"><a href="#">Bio Sponge Filter</a>
                                                                </h6>
                                                                <ul className="review-star">
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="empty"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="content-right">
                                                                <span className="price">₱200.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-sm-6 col-12">
                                                    <div className="product-default-single-item product-color--golden"
                                                        data-aos="fade-up" data-aos-delay="400">
                                                        <div className="image-box">
                                                            <a href="#" className="image-link">
                                                                <img src="../src/assets/images/product/ffas/ff-3.png" alt="" />
                                                            </a>
                                                            <div className="action-link">
                                                                <div className="action-link-left">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalAddcart">Add to Cart</a>
                                                                </div>
                                                                <div className="action-link-right">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalQuickview"><i
                                                                            className="icon-magnifier"></i></a>
                                                                    <a href="wishlist.html"><i
                                                                            className="icon-heart"></i></a>
                                                                    <a href="compare.html"><i
                                                                            className="icon-shuffle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="content-left">
                                                                <h6 className="title"><a href="#">Aquarium Heater</a>
                                                                </h6>
                                                                <ul className="review-star">
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="empty"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="content-right">
                                                                <span className="price">₱400.00</span>
                                                            </div>
                                                            Lorenz De Villa
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-sm-6 col-12">
                                                    <div className="product-default-single-item product-color--golden"
                                                        data-aos="fade-up" data-aos-delay="0">
                                                        <div className="image-box">
                                                            <a href="#" className="image-link">
                                                                <img src="../src/assets/images/product/ffas/ff-4.png" alt="" />
                                                            </a>
                                                            <div className="action-link">
                                                                <div className="action-link-left">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalAddcart">Add to Cart</a>
                                                                </div>
                                                                <div className="action-link-right">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalQuickview"><i
                                                                            className="icon-magnifier"></i></a>
                                                                    <a href="wishlist.html"><i
                                                                            className="icon-heart"></i></a>
                                                                    <a href="compare.html"><i
                                                                            className="icon-shuffle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="content-left">
                                                                <h6 className="title"><a href="#">Koi Food</a></h6>
                                                                <ul className="review-star">
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="empty"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="content-right">
                                                                <span className="price">₱150.00</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-sm-6 col-12">
                                                    <div className="product-default-single-item product-color--golden"
                                                        data-aos="fade-up" data-aos-delay="200">
                                                        <div className="image-box">
                                                            <a href="#" className="image-link">
                                                                <img src="../src/assets/images/product/ffas/ff-5.png" alt="" />
                                                            </a>
                                                            <div className="tag">
                                                                <span>sale</span>
                                                            </div>
                                                            <div className="action-link">
                                                                <div className="action-link-left">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalAddcart">Add to Cart</a>
                                                                </div>
                                                                <div className="action-link-right">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalQuickview"><i
                                                                            className="icon-magnifier"></i></a>
                                                                    <a href="wishlist.html"><i
                                                                            className="icon-heart"></i></a>
                                                                    <a href="compare.html"><i
                                                                            className="icon-shuffle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="content-left">
                                                                <h6 className="title"><a href="#">Aquarium Air Pump</a>
                                                                </h6>
                                                                <ul className="review-star">
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="empty"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="content-right">
                                                                <span className="price">₱200.00</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-sm-6 col-12">
                                                    <div className="product-default-single-item product-color--golden"
                                                        data-aos="fade-up" data-aos-delay="400">
                                                        <div className="image-box">
                                                            <a href="#" className="image-link">
                                                                <img src="../src/assets/images/product/ffas/ff-6.png" alt="" />
                                                            </a>
                                                            <div className="tag">
                                                                <span>sale</span>
                                                            </div>
                                                            <div className="action-link">
                                                                <div className="action-link-left">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalAddcart">Add to Cart</a>
                                                                </div>
                                                                <div className="action-link-right">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalQuickview"><i
                                                                            className="icon-magnifier"></i></a>
                                                                    <a href="wishlist.html"><i
                                                                            className="icon-heart"></i></a>
                                                                    <a href="compare.html"><i
                                                                            className="icon-shuffle"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="content-left">
                                                                <h6 className="title"><a href="#">FAKE PLANT</a></h6>
                                                                <ul className="review-star">
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="fill"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                    <li className="empty"><i
                                                                            className="ion-android-star"></i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="content-right">
                                                                <span className="price">₱30.00</span>
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
                    <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay="0">
                        <ul>
                            <li><a className="active" href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#"><i className="ion-ios-skipforward"></i></a></li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
    </div> 
    <Footer />
    <button className="material-scrolltop" type="button"></button>
</div>
);
};
export default ProductFfas;