import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div>
      <div className="offcanvas-overlay"></div>
      <div className="breadcrumb-section breadcrumb-bg-color--teal">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="breadcrumb-title">Cart</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-section">
        <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="table_page table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product_remove">Delete</th>
                          <th className="product_thumb">Image</th>
                          <th className="product_name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product_quantity">Quantity</th>
                          <th className="product_total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index}>
                            <td className="product_remove">
                              <a href="#" onClick={() => removeFromCart(index)}><i className="fa fa-trash-o"></i></a>
                            </td>
                            <td className="product_thumb">
                              <a href="#"><img src={item.imgSrc} alt={item.title} /></a>
                            </td>
                            <td className="product_name">
                              <a href="#">{item.title}</a>
                            </td>
                            <td className="product-price">{item.price}</td>
                            <td className="product_quantity">
                              <label>Quantity</label> 
                              <input 
                                type="number" 
                                value={item.quantity} 
                                min="1" 
                                style={{color: '#000'}}
                                readOnly

                              />
                            </td>
                            <td className="product_total">₱{item.totalPrice.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="coupon_code left" data-aos="fade-up" data-aos-delay="200">
                  <h3>Coupon</h3>
                  <div className="coupon_inner">
                    <p>Enter your coupon code if you have one.</p>
                    <input className="mb-2" placeholder="Coupon code" type="text" />
                    <button type="submit" className="btn btn-md btn-golden">Apply coupon</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="coupon_code right" data-aos="fade-up" data-aos-delay="400">
                  <h3>Cart Totals</h3>
                  <div className="coupon_inner">
                    <div className="cart_subtotal">
                      <p>Subtotal</p>
                      <p className="cart_amount">₱{getTotalPrice().toFixed(2)}</p>
                    </div>
                    <div className="cart_subtotal ">
                      <p>Shipping</p>
                      <p className="cart_amount"><span>Flat Rate:</span> ₱100.00</p>
                    </div>
                    <a href="#">Calculate shipping</a>
                    <div className="cart_subtotal">
                      <p>Total</p>
                      <p className="cart_amount">₱{(getTotalPrice() + 100).toFixed(2)}</p>
                    </div>
                    <div className="checkout_btn">
                      <Link to="/checkout" className="btn btn-md btn-golden">Proceed to Checkout</Link>
                    </div>
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

export default Cart;
