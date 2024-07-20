import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../includes/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import fish1 from '../assets/images/product/fish/fish1.png';
import fish2 from '../assets/images/product/fish/fish2.png';
import fish3 from '../assets/images/product/fish/fish3.png';
import fish4 from '../assets/images/product/fish/fish4.png';
import fish5 from '../assets/images/product/fish/fish5.png';
import fish6 from '../assets/images/product/fish/fish6.png';

const BreadcrumbSection = ({ title }) => (
  <div className="breadcrumb-section breadcrumb-bg-color--teal">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="breadcrumb-title">{title}</h3>
        </div>
      </div>
    </div>
  </div>
);

const Sidebar = () => (
  <div className="sidebar-section" data-aos="fade-up" data-aos-delay="0">
    <div className="sidebar-single-widget">
      <h6 className="sidebar-title">CATEGORIES</h6>
      <div className="sidebar-content">
        <ul className="sidebar-menu">
          <li><a href="#">Fighting Fish</a></li>
          <li><a href="#">Koi Fish</a></li>
          <li><a href="#">Gold Fish</a></li>
          <li><a href="#">Angel Fish</a></li>
          <li><a href="#">Tetra Fish</a></li>
          <li><a href="#">Danios Fish</a></li>
          <li><a href="#">Gourami Fish</a></li>
          <li><a href="#">Tinfoil Fish</a></li>
        </ul>
      </div>
    </div>
  </div>
);

const Product = ({ imgSrc, title, price, delay, addToCart }) => (
  <div className="col-xl-4 col-sm-6 col-12">
    <div className="product-default-single-item product-color--golden" data-aos="fade-up" data-aos-delay={delay}>
      <div className="image-box">
        <a href="#" className="image-link">
          <img src={imgSrc} alt="" />
        </a>
        <div className="action-link">
          <div className="action-link-left">
            <button onClick={() => addToCart({ imgSrc, title, price })}>Add to Cart</button>
          </div>
          <div className="action-link-right">
            <Link to="../wishlist"><i className="icon-heart"></i></Link>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-left">
          <h6 className="title"><a href="product-details-default.html">{title}</a></h6>
          <ul className="review-star">
            <li className="fill"><i className="ion-android-star"></i></li>
            <li className="fill"><i className="ion-android-star"></i></li>
            <li className="fill"><i className="ion-android-star"></i></li>
            <li className="fill"><i className="ion-android-star"></i></li>
            <li className="empty"><i className="ion-android-star"></i></li>
          </ul>
        </div>
        <div className="content-right">
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  </div>
);

const ShopSection = ({ addToCart }) => (
  <div className="shop-section">
    <div className="container">
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="shop-sort-section">
            <div className="container">
              <div className="row">
                <div className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column" data-aos="fade-up" data-aos-delay="0">
                  <div className="sort-tablist d-flex align-items-center">
                    <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                      <nav aria-label="breadcrumb">
                        <ul>
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="../shop">Shop</Link></li>
                          <li className="active" aria-current="page">Fishes</li>
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
                        <Product imgSrc={fish1} title="Fighting Fish" price="₱200.00" delay="0" addToCart={addToCart} />
                        <Product imgSrc={fish2} title="Angel Fish" price="₱50.00 - ₱100.00" delay="200" addToCart={addToCart} />
                        <Product imgSrc={fish3} title="Flowerhorn" price="₱500.00" delay="400" addToCart={addToCart} />
                        <Product imgSrc={fish4} title="Tetra Fish" price="₱85.00 - ₱100.00" delay="0" addToCart={addToCart} />
                        <Product imgSrc={fish5} title="Gold Fish" price="₱150.00 - ₱300.00" delay="200" addToCart={addToCart} />
                        <Product imgSrc={fish6} title="Koi Fish" price="₱1,500.00 - ₱4,000.00" delay="400" addToCart={addToCart} />
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
);

const ProductFish = ({ addToCart }) => {
  return (
    <>
      <BreadcrumbSection title="Fishes" />
      <ShopSection addToCart={addToCart} />
      <Footer />
      <button className="material-scrolltop" type="button"></button>
    </>
  );
};

export default ProductFish;
