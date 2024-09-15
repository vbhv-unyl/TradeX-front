import React, { useState } from 'react';
import './Form.scss';
import GoogleButton from '../GoogleButton/GoogleButton';

import { app } from "../../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Cookies from 'js-cookie';
import Top from '../Live/Top';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const Form = () => {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+/,.";
        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        return password;
    }

    const handleRegister = async (name, email, password) => {
        const data = {
            name: name,
            email: email,
            password: password
        }

        console.log(data);

        try {
            const response = await axios.post('http://localhost:3000/auth/register', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const token = response.data.token;
            Cookies.set('token', token);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    const f = async () => {

        let token = Cookies.get('token');

        console.log(token);

        if (token) {
            const d = {
                token: token
            }
            try {
                const response = await axios.post('http://localhost:3000/auth/register', d, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const data = response.data;
                if (data.msg === "Valid user") {
                    navigate('/home');
                }
                else {
                    // Alert show karna h
                }

            } catch (error) {
                console.error('Error sending data:', error);
            }
        }
        else {

            signInWithPopup(auth, googleProvider)
                .then(async (result) => {
                    const user = result.user;
                    await handleRegister(user.displayName, user.email, generatePassword(20));
                    navigate('/home');
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    const g = async (e) => {
        e.preventDefault();

        handleRegister(formData.name, formData.email, formData.password);
    }

    const h = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/auth/validate', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const msg = response.data.msg;
            if (msg === 'Unauthorized Access') {
                // Alert show krdo
            }
            else {
                navigate('/home');
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    return (
        <>
            <Top />
            <div className={`form-container ${isSignup ? 'signup-mode' : ''}`}>
                <div className="form-box">
                    <div className="form-content">
                        {isSignup ? (
                            <>
                                <form className="signup-form" onSubmit={g}>
                                    <h2>Sign Up</h2>
                                    <input type="text" placeholder="Username" name="name" value={formData.name} onChange={handleChange} />
                                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                                    <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                                    <div className="btn">
                                        <button className="signup-btn" type="submit">Sign Up</button>
                                    </div>
                                    <p className="toggle-text" onClick={toggleForm}>
                                        Already have an account? Sign In
                                    </p>
                                </form>
                            </>
                        ) : (
                            <>
                                <form className="login-form" onSubmit={h}>
                                    <h2>Log In</h2>
                                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                                    <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                                    <div className="btn">
                                        <button className="login-btn" type="submit">Log In</button>
                                        <GoogleButton onClick={f} />
                                    </div>
                                    <p className="toggle-text" onClick={toggleForm}>
                                        Don't have an account? Sign Up
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
                <div className="green-box">

                </div>
            </div>
        </>
    );
};

export default Form;