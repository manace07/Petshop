import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const HeaderTop = () => (
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
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Head = () => (
  <header className="header-section d-none d-xl-block">
    <div className="header-wrapper">
      <HeaderTop />
      <div className="header-bottom header-bottom-color--white section-fluid sticky-header sticky-color--black">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="header-logo">
                <div className="logo">
                  <Link to="/">
                    <img src="../src/assets/images/logo/ds.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="main-menu menu-color--teal menu-hover-color--yellow">
                <nav>
                  <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li className="has-dropdown has-megaitem">
                      <Link to="/shop">Shop <i className="fa fa-angle-down"></i></Link>
                      <div className="mega-menu">
                        <ul className="mega-menu-inner">
                          <li className="mega-menu-item">
                            <a>
                              <b>SHOP BY PETS</b>
                            </a>
                            <ul className="mega-menu-sub">
                              <li>
                                <Link to="/productfish">Fishes</Link>
                              </li>
                              <li>
                                <Link to="/productffas">
                                  Fish Food and Aquarium Supplies
                                </Link>
                              </li>
                              <li>
                                <Link to="/productdog">
                                  Dog Food and Accessories
                                </Link>
                              </li>
                              <li>
                                <Link to="/productcat">
                                  Cat Food and Accessories
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contactus">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <ul className="header-action-link action-color--teal action-hover-color--yellow">
                <li>
                  <Link to="../wishlist" className="offcanvas-toggle">
                    <i className="icon-heart"></i>
                  </Link>
                </li>
                <li>
                  <Link to="../cart" className="offcanvas-toggle">
                    <i className="icon-bag"></i>
                  </Link>
                </li>
                <li>
                  <a href="#mobile-menu-offcanvas" className="offcanvas-toggle offside-menu">
                    <i className="icon-menu"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const MobileHeader = () => (
  <div className="mobile-header mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-between">
          <div className="mobile-header-left">
            <ul className="mobile-menu-logo">
              <li>
                <Link to="/">
                  <div className="logo">
                    <img src="../src/assets/images/logo/ds.png" alt="logo" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-right-side">
            <ul className="header-action-link action-color--black action-hover-color--yellow">
              <li>
                <a href="#search">
                  <i className="icon-magnifier"></i>
                </a>
              </li>
              <li>
                <Link to="../wishlist" className="offcanvas-toggle">
                  <i className="icon-heart"></i>
                  <span className="item-count">1</span>
                </Link>
              </li>
              <li>
                <Link to="../cart" className="offcanvas-toggle">
                  <i className="icon-bag"></i>
                  <span className="item-count">2</span>
                </Link>
              </li>
              <li>
                <a href="#mobile-menu-offcanvas" className="offcanvas-toggle offside-menu">
                  <i className="icon-menu"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OffcanvasMobileMenu = () => (
  <div id="mobile-menu-offcanvas" className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section">
    <div className="offcanvas-header text-right">
      <button className="offcanvas-close">
        <i className="ion-android-close"></i>
      </button>
    </div>
    <div className="offcanvas-mobile-menu-wrapper">
      <div className="mobile-menu-bottom">
        <div className="offcanvas-menu">
          <ul>
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <span>Shop</span>
              </a>
              <ul className="mobile-sub-menu">
                <li>
                  <Link to="/productfish">Fishes</Link>
                </li>
                <li>
                  <Link to="/productffas">
                    Fish Food and Aquarium Supplies
                  </Link>
                </li>
                <li>
                  <Link to="/productdog">Dog Food and Accessories</Link>
                </li>
                <li>
                  <Link to="/productcat">Cat Food and Accessories</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const OffcanvasAddCart = () => (
  <div id="offcanvas-add-cart" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
    <div className="offcanvas-header text-right">
      <button className="offcanvas-close">
        <i className="ion-android-close"></i>
      </button>
    </div>
    <div className="offcanvas-add-cart-wrapper">
      <h4 className="offcanvas-title">Shopping Cart</h4>
      <ul className="offcanvas-cart">
        <li className="offcanvas-cart-item-single">
          <div className="offcanvas-cart-item-block">
            <a href="#" className="offcanvas-cart-item-image-link">
              <img src="../src/assets/images/product/dog/dog1.png" alt="" className="offcanvas-cart-image" />
            </a>
            <div className="offcanvas-cart-item-content">
              <a href="#" className="offcanvas-cart-item-link">Art 1</a>
              <div className="offcanvas-cart-item-details">
                <span className="offcanvas-cart-item-details-quantity">1 x </span>
                <span className="offcanvas-cart-item-details-price">₱450.00</span>
              </div>
            </div>
          </div>
          <div className="offcanvas-cart-item-delete text-right">
            <a href="#" className="offcanvas-cart-item-delete">
              <i className="fa fa-trash-o"></i>
            </a>
          </div>
        </li>
        <li className="offcanvas-cart-item-single">
          <div className="offcanvas-cart-item-block">
            <a href="#" className="offcanvas-cart-item-image-link">
              <img src="../src/assets/images/product/dog/dog-3.png" alt="" className="offcanvas-cart-image" />
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
            <a href="#" className="offcanvas-cart-item-delete">
              <i className="fa fa-trash-o"></i>
            </a>
          </div>
        </li>
      </ul>
      <div className="offcanvas-cart-total-price">
        <span className="offcanvas-cart-total-price-text">Subtotal:</span>
        <span className="offcanvas-cart-total-price-value">₱1,100.00</span>
      </div>
      <ul className="offcanvas-cart-action-button">
        <li>
          <Link to="../cart" className="btn btn-block btn-golden">
            View Cart
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const OffcanvasWishlist = () => (
  <div id="offcanvas-wishlish" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
    <div className="offcanvas-header text-right">
      <button className="offcanvas-close">
        <i className="ion-android-close"></i>
      </button>
    </div>
    <div className="offcanvas-wishlist-wrapper">
      <h4 className="offcanvas-title">Wishlist</h4>
      <ul className="offcanvas-wishlist">
        <li className="offcanvas-wishlist-item-single">
          <div className="offcanvas-wishlist-item-block">
            <a href="#" className="offcanvas-wishlist-item-image-link">
              <img src="../src/assets/images/product/fish/fish1.png" alt="" className="offcanvas-wishlist-image" />
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
            <a href="#" className="offcanvas-wishlist-item-delete">
              <i className="fa fa-trash-o"></i>
            </a>
          </div>
        </li>
      </ul>
      <ul className="offcanvas-wishlist-action-button">
        <li>
          <Link to="/wishlist" className="btn btn-block btn-golden">
            View wishlist
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const SearchModal = () => (
  <div id="search" className="search-modal">
    <button type="button" className="close">
      ×
    </button>
    <form>
      <input type="search" placeholder="type keyword(s) here" />
      <button type="submit" className="btn btn-lg btn-golden">
        Search
      </button>
    </form>
  </div>
);

const Header = () => (
    <div>
      <Head />
      <MobileHeader />
      {/* <OffcanvasMobileMenu /> */}
      {/* <OffcanvasAddCart /> */}
      {/* <OffcanvasWishlist /> */}
      <SearchModal />
    </div>
);

export default Header;
