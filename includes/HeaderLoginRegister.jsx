import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const HeaderTop = () => {
    return (
        <div className="header-top header-top-bg--black section-fluid">
            <div className="container">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    <div className="header-top-left">
                        <div className="header-top-contact header-top-contact-color--white header-top-contact-hover-color--green">
                            <a href="tel:0123456789" className="icon-space-right">
                                <i className="icon-call-end"></i>0976-006-4670
                            </a>
                            <a href="mailto:petgofrenzy@gmail.com" className="icon-space-right">
                                <i className="icon-envelope"></i>petgofrenzy@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="header-top-user-link header-top-user-link-color--white header-top-user-link-hover-color--green">
                            <a href="login.php">Login</a>
                            <a href="register.php">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <header className="header-section d-none d-xl-block">
            <div className="header-wrapper">
                <HeaderTop />
                <div className="header-bottom header-bottom-color--white section-fluid sticky-header sticky-color--black">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                {/* Start Header Logo */}
                                <div className="header-logo">
                                    <div className="logo">
                                        <a href="index.php"><img src="assets/images/logo/ds.png" alt="logo" /></a>
                                    </div>
                                </div>
                                {/* End Header Logo */}

                                {/* Start Header Main Menu */}
                                <div className="main-menu menu-color--teal menu-hover-color--yellow">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="index.php">Home</a>
                                            </li>
                                            <li className="has-dropdown has-megaitem">
                                                <a href="shop.php">Shop <i className="fa fa-angle-down"></i></a>
                                                {/* Mega Menu */}
                                                <div className="mega-menu">
                                                    <ul className="mega-menu-inner">
                                                        {/* Mega Menu Sub Link */}
                                                        <li className="mega-menu-item">
                                                            <a><b>SHOP BY PETS</b></a>
                                                            <ul className="mega-menu-sub">
                                                                <li><a href="products-fishes.php">Fishes</a></li>
                                                                <li><a href="products-ffas.php">Fish Food and Aquarium Supplies</a></li>
                                                                <li><a href="products-dog.php">Dog Food and Accessories</a></li>
                                                                <li><a href="products-cat.php">Cat Food and Accessories</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="about-us.php">About Us</a>
                                            </li>
                                            <li>
                                                <a href="contact-us.php">Contact Us</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* End Header Main Menu */}

                                {/* Start Header Action Link */}
                                <ul className="header-action-link action-color--teal action-hover-color--yellow">
                                    <li>
                                        <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                                            <i className="icon-heart"></i>
                                            <span className="item-count">1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                                            <i className="icon-bag"></i>
                                            <span className="item-count">2</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#search">
                                            <i className="icon-magnifier"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#mobile-menu-offcanvas" className="offcanvas-toggle offside-menu">
                                            <i className="icon-menu"></i>
                                        </a>
                                    </li>
                                </ul>
                                {/* End Header Action Link */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const MobileHeader = () => {
    return (
        <div className="mobile-header mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        {/* Start Mobile Left Side */}
                        <div className="mobile-header-left">
                            <ul className="mobile-menu-logo">
                                <li>
                                    <a href="index.php">
                                        <div className="logo">
                                            <img src="assets/images/logo/ds.png" alt="logo" />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* End Mobile Left Side */}

                        {/* Start Mobile Right Side */}
                        <div className="mobile-right-side">
                            <ul className="header-action-link action-color--black action-hover-color--yellow">
                                <li>
                                    <a href="#search">
                                        <i className="icon-magnifier"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                                        <i className="icon-heart"></i>
                                        <span className="item-count">1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                                        <i className="icon-bag"></i>
                                        <span className="item-count">2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#mobile-menu-offcanvas" className="offcanvas-toggle offside-menu">
                                        <i className="icon-menu"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* End Mobile Right Side */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const OffcanvasMobileMenu = () => {
    return (
        <div id="mobile-menu-offcanvas" className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section">
            {/* Start Offcanvas Header */}
            <div className="offcanvas-header text-right">
                <button className="offcanvas-close"><i className="ion-android-close"></i></button>
            </div>
            {/* End Offcanvas Header */}
            {/* Start Offcanvas Mobile Menu Wrapper */}
            <div className="offcanvas-mobile-menu-wrapper">
                {/* Start Mobile Menu */}
                <div className="mobile-menu-bottom">
                    {/* Start Mobile Menu Nav */}
                    <div className="offcanvas-menu">
                        <ul>
                            <li>
                                <a href="index.php"><span>Home</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Shop</span></a>
                                <ul className="mobile-sub-menu">
                                    <li><a href="products-fishes.php">Fishes</a></li>
                                    <li><a href="products-ffas.php">Fish Food and Aquarium Supplies</a></li>
                                    <li><a href="products-dog.php">Dog Food and Accessories</a></li>
                                    <li><a href="products-cat.php">Cat Food and Accessories</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="about-us.php">About Us</a>
                            </li>
                            <li>
                                <a href="contact-us.php">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    {/* End Mobile Menu Nav */}
                </div>
                {/* End Mobile Menu */}
            </div>
            {/* End Offcanvas Mobile Menu Wrapper */}
        </div>
    );
};

const OffcanvasAddCart = () => {
    return (
        <div id="offcanvas-add-cart" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
            {/* Start Offcanvas Header */}
            <div className="offcanvas-header text-right">
                <button className="offcanvas-close"><i className="ion-android-close"></i></button>
            </div>
            {/* End Offcanvas Header */}
            {/* Start Offcanvas Addcart Wrapper */}
            <div className="offcanvas-add-cart-wrapper">
                <h4 className="offcanvas-title">Shopping Cart</h4>
                <ul className="offcanvas-cart">
                    <li className="offcanvas-cart-item-single">
                        <div className="offcanvas-cart-item-block">
                            <a href="#" className="offcanvas-cart-item-image-link">
                                <img src="assets/images/product/dog/dog-2.png" alt="" className="offcanvas-cart-image" />
                            </a>
                            <div className="offcanvas-cart-item-content">
                                <a href="#" className="offcanvas-cart-item-link">Detick</a>
                                <div className="offcanvas-cart-item-details">
                                    <span className="offcanvas-cart-item-details-quantity">1 x </span>
                                    <span className="offcanvas-cart-item-details-price">₱450.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas-cart-item-delete text-right">
                            <a href="#" className="offcanvas-cart-item-delete"><i className="fa fa-trash-o"></i></a>
                        </div>
                    </li>
                    <li className="offcanvas-cart-item-single">
                        <div className="offcanvas-cart-item-block">
                            <a href="#" className="offcanvas-cart-item-image-link">
                                <img src="assets/images/product/dog/dog-3.png" alt="" className="offcanvas-cart-image" />
                            </a>
                            <div className="offcanvas-cart-item-content">
                                <a href="#" className="offcanvas-cart-item-link">Art 232-D</a>
                                <div className="offcanvas-cart-item-details">
                                    <span className="offcanvas-cart-item-details-quantity">1 x </span>
                                    <span className="offcanvas-cart-item-details-price">₱650.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas-cart-item-delete text-right">
                            <a href="#" className="offcanvas-cart-item-delete"><i className="fa fa-trash-o"></i></a>
                        </div>
                    </li>
                </ul>
                <div className="offcanvas-cart-total-price">
                    <span className="offcanvas-cart-total-price-text">Subtotal:</span>
                    <span className="offcanvas-cart-total-price-value">₱1,100.00</span>
                </div>
                <ul className="offcanvas-cart-action-button">
                    <li><a href="cart.php" className="btn btn-block btn-golden">View Cart</a></li>
                </ul>
            </div>
            {/* End Offcanvas Addcart Wrapper */}
        </div>
    );
};

const OffcanvasWishlist = () => {
    return (
        <div id="offcanvas-wishlish" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
            {/* Start Offcanvas Header */}
            <div className="offcanvas-header text-right">
                <button className="offcanvas-close"><i className="ion-android-close"></i></button>
            </div>
            {/* End Offcanvas Header */}
            {/* Start Offcanvas Mobile Menu Wrapper */}
            <div className="offcanvas-wishlist-wrapper">
                <h4 className="offcanvas-title">Wishlist</h4>
                <ul className="offcanvas-wishlist">
                    <li className="offcanvas-wishlist-item-single">
                        <div className="offcanvas-wishlist-item-block">
                            <a href="#" className="offcanvas-wishlist-item-image-link">
                                <img src="assets/images/product/fish/fish1.png" alt="" className="offcanvas-wishlist-image" />
                            </a>
                            <div className="offcanvas-wishlist-item-content">
                                <a href="#" className="offcanvas-wishlist-item-link">Fighting Fish</a>
                                <div className="offcanvas-wishlist-item-details">
                                    <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                    <span className="offcanvas-wishlist-item-details-price">₱200.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas-wishlist-item-delete text-right">
                            <a href="#" className="offcanvas-wishlist-item-delete"><i className="fa fa-trash-o"></i></a>
                        </div>
                    </li>
                </ul>
                <ul className="offcanvas-wishlist-action-button">
                    <li><a href="wishlist.php" className="btn btn-block btn-golden">View wishlist</a></li>
                </ul>
            </div>
            {/* End Offcanvas Mobile Menu Wrapper */}
        </div>
    );
};

const SearchModal = () => {
    return (
        <div id="search" className="search-modal">
            <button type="button" className="close">×</button>
            <form>
                <input type="search" placeholder="type keyword(s) here" />
                <button type="submit" className="btn btn-lg btn-golden">Search</button>
            </form>
        </div>
    );
};

const HeaderLoginRegister = () => {
    return (
        <div>
            <Header />
            <MobileHeader />
            <OffcanvasMobileMenu />
            <OffcanvasAddCart />
            <OffcanvasWishlist />
            <SearchModal />
        </div>
    );
};

export default HeaderLoginRegister;
