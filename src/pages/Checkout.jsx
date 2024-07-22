import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../includes/Footer';
import 'bootstrap/dist/css/bootstrap.css';

const Checkout = ({ totalPrice }) => {
  const navigate = useNavigate();

  const handleCheckout = (event) => {
    event.preventDefault();
    alert('Checkout successfully!');
    navigate('/');
  };

  return (
    <div>
      <div className="offcanvas-overlay"></div>

      <div className="breadcrumb-section breadcrumb-bg-color--teal">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="breadcrumb-title">Checkout</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <form onSubmit={handleCheckout}>
                <h3>Billing Details</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>First Name <span>*</span></label>
                      <input type="text" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>Last Name <span>*</span></label>
                      <input type="text" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="default-form-box">
                      <label>Street address <span>*</span></label>
                      <input placeholder="House number and street name" type="text" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="default-form-box">
                      <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="default-form-box">
                      <label>City and State <span>*</span></label>
                      <input type="text" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>Phone<span>*</span></label>
                      <input type="text" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>Email Address <span>*</span></label>
                      <input type="email" required />
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="order-notes">
                      <label htmlFor="order_note"><b>Order Notes</b></label>
                      <textarea id="order_note"
                        placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-6">
              <form  onSubmit={handleCheckout}>
                <h3>Your order</h3>
                <div className="order_table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Here you should map the cart items if you want to show them */}
                      <tr>
                        <td>Detick <strong> × 3</strong></td>
                        <td>₱300.00</td>
                      </tr>
                      <tr>
                        <td>Alphapro Beef Adult <strong> × 1</strong></td>
                        <td>₱800.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Cart Subtotal</th>
                        <td>₱{totalPrice.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <th>Shipping</th>
                        <td><strong>₱100.00</strong></td>
                      </tr>
                      <tr className="order_total">
                        <th>Order Total</th>
                        <td><strong>₱{(totalPrice + 100).toFixed(2)}</strong></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="payment_method">
                  <div className="panel-default">
                    <label className="checkbox-default" htmlFor="currencyCod" data-bs-toggle="collapse"
                      data-bs-target="#methodCod">
                      <input type="checkbox" id="currencyCod" />
                      <span>Cash on Delivery</span>
                    </label>
                    <div id="methodCod" className="collapse" data-parent="#methodCod">
                      <div className="card-body1">
                        <p>Please have the exact amount ready.</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel-default">
                    <label className="checkbox-default" htmlFor="currencyPaypal" data-bs-toggle="collapse"
                      data-bs-target="#methodPaypal">
                      <input type="checkbox" id="currencyPaypal" />
                      <span>GCash, BDO, Maya, BPI</span>
                    </label>
                    <div id="methodPaypal" className="collapse" data-parent="#methodPaypal">
                      <div className="card-body1">
                        <p>Gcash Account No.: 0976-006-4670</p>
                        <p>BDO Account: 01298098929</p>
                        <p>Maya Account No.: 0202821221</p>
                        <p>BPI Account: 81902828O3</p>
                      </div>
                    </div>
                  </div>
                  <div className="order_button pt-3">
                    <button className="btn btn-md btn-black-default-hover" type="submit">Proceed to Payment</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
