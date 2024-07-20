import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';

const products = [
    {
        imgSrc: "../src/assets/images/product/cat/cat-1.png",
        title: "Whiskas Adult",
        price: "₱275.00"
    },
    {
        imgSrc: "../src/assets/images/product/cat/cat-9.png",
        title: "Scratch Post",
        price: "₱675.00"
    },
    {
        imgSrc: "../src/assets/images/product/cat/cat-5.png",
        title: "Cat Collar",
        price: "₱75.00"
    },
    {
        imgSrc: "assets/images/product/cat/cat-8.png",
        title: "Cat Bed",
        price: "₱300.00"
    },
    {
        imgSrc: "../assets/images/product/cat/cat-10.png",
        title: "4-in-1 Grooming Supplies",
        price: "₱150.00"
    },
    {
        imgSrc: "../assets/images/product/cat/cat-11.png",
        title: "LC Vit Plus Multivitamins Cat and Kitten Syrup",
        price: "₱200.00"
    }
];

const ShopSection = ({ addToCart }) => (
    <div className="shop-section">
        <div className="container">
            <div className="row flex-column-reverse flex-lg-row">
                <div className="col-lg-3">
                    <div className="siderbar-section" data-aos="fade-up" data-aos-delay="0">
                        <div className="sidebar-single-widget">
                            <h6 className="sidebar-title">CATEGORIES</h6>
                            <div className="sidebar-content">
                                <ul className="sidebar-menu">
                                    <li><a href="#">Cat Food</a></li>
                                    <li><a href="#">Litter & Litter Box</a></li>
                                    <li><a href="#">Toys</a></li>
                                    <li><a href="#">Clothing & Accessories</a></li>
                                    <li><a href="#">Bowl & Feeders</a></li>
                                    <li><a href="#">Bed and Scratch Post</a></li>
                                    <li><a href="#">Grooming Supplies</a></li>
                                    <li><a href="#">Vitamins & Supplements</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
                                                    <li><a href="/">Home</a></li>
                                                    <li><a href="/shop">Shop</a></li>
                                                    <li className="active" aria-current="page">Cat Food and Accessories</li>
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
                                                {products.map((product, index) => (
                                                    <ProductItem
                                                        key={index}
                                                        imgSrc={product.imgSrc}
                                                        title={product.title}
                                                        price={product.price}
                                                        addToCart={() => addToCart(product)}
                                                    />
                                                ))}
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

const ProductItem = ({ imgSrc, title, price, addToCart }) => (
    <div className="col-xl-4 col-sm-6 col-12">
        <div className="product-default-single-item product-color--golden" data-aos="fade-up" data-aos-delay="0">
            <div className="image-box">
                <a href="#" className="image-link">
                    <img src={imgSrc} alt={title} />
                </a>
                <div className="action-link">
                    <div className="action-link-left">
                        <a href="#" onClick={addToCart} data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                    </div>
                    <div className="action-link-right">
                        <a href="wishlist.html"><i className="icon-heart"></i></a>
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
                        <li className="fill"><i className="ion-android-star"></i></li>
                    </ul>
                </div>
                <div className="content-right">
                    <span className="price">{price}</span>
                </div>
            </div>
        </div>
    </div>
);

const ProductCat = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="App">
            <div className="offcanvas-overlay"></div>
            <div className="breadcrumb-section breadcrumb-bg-color--teal">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Cat Food and Accessories</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShopSection addToCart={addToCart} />
            <Footer />
            <button className="material-scrolltop" type="button"></button>
        </div>
    );
};

export default ProductCat;
