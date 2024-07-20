import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLoginRegister from '../../includes/HeaderLoginRegister';
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        alert('Register successfully');
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div>

            {/* Offcanvas Overlay */}
            <div className="offcanvas-overlay"></div>

            {/* ...:::: Start Customer Login Section :::... */}
            <div className="customer-login">
                <div className="container">
                    <div className="row">

                        {/* Register area start */}
                        <div className="col-lg-12 col-md-12">
                            <div className="account_form register" data-aos="fade-up" data-aos-delay="200">
                                <form onSubmit={handleRegister}>
                                    <h3>Register</h3>
                                    <div className="default-form-box ">
                                        <label className='d-flex'>Email address <span>*</span></label>
                                        <input type="text" required />
                                    </div>
                                    <div className="default-form-box">
                                        <label  className='d-flex'>Passwords <span>*</span></label>
                                        <input type="password" required />
                                    </div>
                                    <div className="login_submit d-flex justify-content-center">
                                        <button className="btn btn-md btn-black-default-hover" type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Register area end */}
                    </div>
                </div>
            </div> {/* ...:::: End Customer Login Section :::... */}

            {/* Footer Section */}
            <Footer />

            {/* material-scrolltop button */}
            <button className="material-scrolltop" type="button"></button>
        </div>
    );
};

export default Register;
