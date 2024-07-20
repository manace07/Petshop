import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const MyAccount = () => {
    return (
        <div>
            {/* Offcanvas Overlay */}
            <div className="offcanvas-overlay"></div>

            {/* Breadcrumb Section */}
            <div className="breadcrumb-section breadcrumb-bg-color--teal">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">My Account</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Account Dashboard Section */}
            <div className="account-dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            {/* Nav tabs */}
                            <div className="dashboard_tab_button" data-aos="fade-up" data-aos-delay="0">
                                <ul role="tablist" className="nav flex-column dashboard-list">
                                    <li> <a href="#orders" data-bs-toggle="tab" className="nav-link btn btn-block btn-md btn-black-default-hover">Orders</a></li>
                                    <li><a href="#address" data-bs-toggle="tab" className="nav-link btn btn-block btn-md btn-black-default-hover">Addresses</a></li>
                                    <li><a href="#account-details" data-bs-toggle="tab" className="nav-link btn btn-block btn-md btn-black-default-hover">Account details</a></li>
                                    <li><a href="login.php" className="nav-link btn btn-block btn-md btn-black-default-hover">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9">
                            {/* Tab panes */}
                            <div className="tab-content orders_content" data-aos="fade-up" data-aos-delay="200">
                                <div className="tab-pane fade show active" id="orders">
                                    <h4>Orders</h4>
                                    <div className="table_page table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Order</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>June 15, 2024</td>
                                                    <td><span className="success">Completed</span></td>
                                                    <td>₱800.00 for 1 item </td>
                                                    <td><a href="cart.php" className="view">View</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane" id="address">
                                    <h5 className="billing-address">Billing address</h5>
                                    <a href="#" className="view">Edit</a>
                                    <p><strong>Nicanor Reyes</strong></p>
                                    <address>
                                        Address: Padre Paredes St, Sampaloc, Manila, 1015 Metro Manila.
                                    </address>
                                </div>
                                <div className="tab-pane fade" id="account-details">
                                    <h3>Account details </h3>
                                    <div className="login">
                                        <div className="login_form_container">
                                            <div className="account_login_form">
                                                <form action="#">
                                                    <p>Already have an account? <a href="#">Log in instead!</a></p>
                                                    <div className="input-radio">
                                                        <span className="custom-radio"><input type="radio" value="1" name="id_gender" /> Mr.</span>
                                                        <span className="custom-radio"><input type="radio" value="1" name="id_gender" /> Mrs.</span>
                                                    </div>
                                                    <br />
                                                    <div className="default-form-box mb-20">
                                                        <label>First Name</label>
                                                        <input type="text" name="first-name" />
                                                    </div>
                                                    <div className="default-form-box mb-20">
                                                        <label>Last Name</label>
                                                        <input type="text" name="last-name" />
                                                    </div>
                                                    <div className="default-form-box mb-20">
                                                        <label>Email</label>
                                                        <input type="text" name="email-name" />
                                                    </div>
                                                    <div className="default-form-box mb-20">
                                                        <label>Password</label>
                                                        <input type="password" name="user-password" />
                                                    </div>
                                                    <div className="default-form-box mb-20">
                                                        <label>Birthdate</label>
                                                        <input type="date" name="birthday" />
                                                    </div>
                                                    <span className="example">(E.g.: 05/31/1970)</span>
                                                    <br />
                                                    <label className="checkbox-default" htmlFor="offer">
                                                        <input type="checkbox" id="offer" />
                                                        <span>Receive offers from our partners</span>
                                                    </label>
                                                    <br />
                                                    <label className="checkbox-default checkbox-default-more-text" htmlFor="newsletter">
                                                        <input type="checkbox" id="newsletter" />
                                                        <span>Sign up for our newsletter<br /><em>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em></span>
                                                    </label>
                                                    <div className="save_button mt-3">
                                                        <button className="btn btn-md btn-black-default-hover" type="submit">Save</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer>
                {/* Your footer HTML goes here */}
            </footer>

            {/* material-scrolltop button */}
            <button className="material-scrolltop" type="button"></button>
        </div>
    );
};

export default MyAccount;
