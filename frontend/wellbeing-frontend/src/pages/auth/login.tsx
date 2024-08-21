import React from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import Navbar from '../../components/navbar';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Add login logic here
        navigate('/dashboard');
    };

    return (
        <div className = "auth-page">
            <Navbar />
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Welcome Back!</h1>
                    <p>We're glad to see you again.</p>
                </div>
                <div className="auth-form">
                    <input type="text" placeholder="Email" className="auth-input" />
                    <input type="password" placeholder="Password" className="auth-input" />
                    <button onClick={handleLogin} className="auth-button">Login</button>
                    <div className="auth-options">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <span className="auth-link" onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
                    </div>
                    <p className="auth-switch">
                        Don't have an account? <span className="auth-link" onClick={() => navigate('/register')}>Register Here</span>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;
