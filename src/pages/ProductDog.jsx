import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ProductDog = () => {
  return (
    <>
      {/* Header Account and Header */}
      <HeaderAccount />
      <Header />

      {/* Offcanvas Overlay */}
      <div className="offcanvas-overlay"></div>

      {/* Start Breadcrumb Section */}
      <div className="breadcrumb-section breadcrumb-bg-color--teal">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Dog Food and Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End Breadcrumb Section */}

      {/* Start Shop Section */}
      <div className="shop-section">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-3">
              {/* Start Sidebar Area */}
              <div className="siderbar-section" data-aos="fade-up" data-aos-delay="0">
                {/* Start Single Sidebar Widget */}
                <div className="sidebar-single-widget">
                  <h6 className="sidebar-title">CATEGORIES</h6>
                  <div className="sidebar-content">
                    <ul className="sidebar-menu">
                      <li><a href="#">Dog Food</a></li>
                      <li><a href="#">Collars & Leashes</a></li>
                      <li><a href="#">Toy</a></li>
                      <li><a href="#">Clothing & Shoes</a></li>
                      <li><a href="#">Bowls & Feeders</a></li>
                      <li><a href="#">Grooming Supplies</a></li>
                      <li><a href="#">Vitamins & Supplements</a></li>
                    </ul>
                  </div>
                </div> {/* End Single Sidebar Widget */}
              </div> {/* End Sidebar Area */}
            </div>
            <div className="col-lg-9">
              {/* Start Shop Product Sorting Section */}
              <div className="shop-sort-section">
                <div className="container">
                  <div className="row">
                    {/* Start Sort Wrapper Box */}
                    <div className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column"
                      data-aos="fade-up" data-aos-delay="0">
                      {/* Start Sort tab Button */}
                      <div className="sort-tablist d-flex align-items-center">
                        <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                          <nav aria-label="breadcrumb">
                            <ul>
                              <li><a href="index.php">Home</a></li>
                              <li><a href="shop.php">Shop</a></li>
                              <li className="active" aria-current="page">Dog Food and Accessories</li>
                            </ul>
                          </nav>
                        </div>
                      </div> {/* End Sort tab Button */}

                      {/* Start Sort Select Option */}
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
                      </div> {/* End Sort Select Option */}
                    </div> {/* Start Sort Wrapper Box */}
                  </div>
                </div>
              </div> {/* End Section Content */}

              {/* Start Tab Wrapper */}
              <div className="sort-product-tab-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-content tab-animate-zoom">
                        {/* Start Grid View Product */}
                        <div className="tab-pane active show sort-layout-single" id="layout-3-grid">
                          <div className="row">
                            {/* Product Items */}
                            {[
                              { img: 'dog-1.png', title: 'Alphapro Adult 10kg', price: '₱800.00' },
                              { img: 'dog-2.png', title: 'Detick', price: '₱100.00' },
                              { img: 'dog-3.png', title: 'Dog Clothes', price: '₱120.00' },
                              { img: 'dog-4.png', title: 'Dog Bowl', price: '₱75.00 - ₱150.00' },
                              { img: 'dog-5.png', title: 'Dog Grooming Kit', price: '₱350.00' },
                              { img: 'dog-6.png', title: 'Dog Collar & Leash', price: '₱100.00', del: '₱120.00' }
                            ].map((product, index) => (
                              <div className="col-xl-4 col-sm-6 col-12" key={index}>
                                {/* Start Product Default Single Item */}
                                <div className="product-default-single-item product-color--golden"
                                  data-aos="fade-up" data-aos-delay={index * 200}>
                                  <div className="image-box">
                                    <a href="#" className="image-link">
                                      <img src={`assets/images/product/dog/${product.img}`} alt="" />
                                    </a>
                                    <div className="action-link">
                                      <div className="action-link-left">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                      </div>
                                      <div className="action-link-right">
                                        <a href="wishlist.html"><i className="icon-heart"></i></a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="content-left">
                                      <h6 className="title"><a href="#">{product.title}</a></h6>
                                      <ul className="review-star">
                                        {[...Array(4)].map((_, i) => (
                                          <li className="fill" key={i}><i className="ion-android-star"></i></li>
                                        ))}
                                        <li className="empty"><i className="ion-android-star"></i></li>
                                      </ul>
                                    </div>
                                    <div className="content-right">
                                      <span className="price">{product.del ? <><del>{product.del}</del> {product.price}</> : product.price}</span>
                                    </div>
                                  </div>
                                </div> {/* End Product Default Single Item */}
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* End Grid View Product */}
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* End Tab Wrapper */}

              {/* Start Pagination */}
              <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay="0">
                <ul>
                  <li><a className="active" href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#"><i className="ion-ios-skipforward"></i></a></li>
                </ul>
              </div> {/* End Pagination */}
            </div>
          </div>
        </div>
      </div> {/* End Shop Section */}

      {/* Footer Section */}
      <Footer />

      {/* material-scrolltop button */}
      <button className="material-scrolltop" type="button"></button>
    </>
  );
};

const HeaderAccount = () => (
  <header> {/* Add your Header Account HTML/JSX here */} </header>
);

const Header = () => (
  <header> {/* Add your Header HTML/JSX here */} </header>
);

const Footer = () => (
  <footer> {/* Add your Footer HTML/JSX here */} </footer>
);

export default ProductDog;
