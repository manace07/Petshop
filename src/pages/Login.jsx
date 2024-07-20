import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from '../../includes/Footer';
import { Link } from "react-router-dom";
import Header from '../../includes/Header';

const Login = () => {
  return (
    <div>
      {/* Offcanvas Overlay */}
      <div className="offcanvas-overlay"></div>

      {/* Start Customer Login Section */}
      <div className="customer-login">
        <div className="container">
          <div className="row">
            {/* login area start */}
            <div className="col-lg-12 col-md-12">
              <div
                className="account_form"
                data-aos="fade-up"
                data-aos-delay="0">
                <h3>Login</h3>
                <form action="#" method="POST">
                  <div className="default-form-box">
                    <label className="d-flex">
                      Username or email <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="default-form-box">
                    <label className="d-flex">
                      Password <span>*</span>
                    </label>
                    <input type="password" />
                  </div>
                  <div className="login_submit d-flex justify-content-center">

                    <Link to="/shop">
                    <button
                      className="btn btn-md btn-black-default-hover mb-4"
                      type="submit">
                      Login
                    </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            {/* login area end */}
          </div>
        </div>
      </div>
      {/* End Customer Login Section */}
      <Footer />
    </div>
  );
};

export default Login;
