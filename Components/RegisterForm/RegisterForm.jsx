import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder='Enter email' required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Create User name' required />
                </div>
                <div className="input-box">
                    <input type="tel" placeholder='Contact number' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div className="input-box">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        required
                    />
                    <i
                        className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                        onClick={togglePasswordVisibility}
                        style={{ cursor: 'pointer' }}
                    ></i>
                </div>
                <div className="input-box">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        required
                    />
                    <i
                        className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                        onClick={toggleConfirmPasswordVisibility}
                        style={{ cursor: 'pointer' }}
                    ></i>
                </div>

                
                <button type="submit">Sign Up</button>
                <div className="additional-text">
                    <h1>Sign Up to</h1>
                    <h4>Lorem ipsum is simply</h4>
                    <p>If you already have an account register</p>
                </div>
                <div className="register-link">
                    <p>You can <a href="#">Login here!</a></p>
                </div>

                <div className="adding">
                    <p>or continue with</p>
                    <div className="social-icons">
                        <a href="URL_FOR_FACEBOOK"><i className="fab fa-facebook-f" style={{ color: '#3b5998' }}></i></a>
                        <a href="URL_FOR_APPLE"><i className="fab fa-apple" style={{ color: '#000' }}></i></a>
                        <a href="URL_FOR_GOOGLE"><i className="fab fa-google" style={{ color: '#EA4335' }}></i></a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
