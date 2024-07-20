import React from 'react';
import Footer from '../../includes/Footer';
import 'bootstrap/dist/css/bootstrap.css';

const Wishlist = () => {
    return (
        <div>
            {/* Offcanvas Overlay */}
            <div className="offcanvas-overlay"></div>

            {/* ...:::: Start Breadcrumb Section:::... */}
            <div className="breadcrumb-section breadcrumb-bg-color--teal">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Wishlist</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}

            {/* ...:::: Start Wishlist Section:::... */}
            <div className="wishlist-section">
                {/* Start Cart Table */}
                <div className="wishlish-table-wrapper" data-aos="fade-up" data-aos-delay="0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table_desc">
                                    <div className="table_page table-responsive">
                                        <table>
                                            {/* Start Wishlist Table Head */}
                                            <thead>
                                                <tr>
                                                    <th className="product_remove">Delete</th>
                                                    <th className="product_thumb">Image</th>
                                                    <th className="product_name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product_stock">Stock Status</th>
                                                    <th className="product_addcart">Add To Cart</th>
                                                </tr>
                                            </thead> {/* End Cart Table Head */}
                                            <tbody>
                                                {/* Start Wishlist Single Item */}
                                                <tr>
                                                    <td className="product_remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                                    <td className="product_thumb"><a href="product-details-default.html"><img src="../src/assets/images/product/fish/fish1.png" alt=""/></a></td>
                                                    <td className="product_name"><a href="product-details-default.html">Fighting Fish</a></td>
                                                    <td className="product-price">₱200.00</td>
                                                    <td className="product_stock">In Stock</td>
                                                    <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                </tr> {/* End Wishlist Single Item */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End Cart Table */}
            </div> {/* ...:::: End Wishlist Section:::... */}

            {/* Footer Section */}
            <Footer />

            {/* material-scrolltop button */}
            <button className="material-scrolltop" type="button"></button>
        </div>
    );
};

export default Wishlist;
