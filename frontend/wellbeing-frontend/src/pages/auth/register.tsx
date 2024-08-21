import { useNavigate } from 'react-router-dom';
import './auth.css';
import Navbar from '../../components/navbar';

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        // Add registration logic here
        navigate('/dashboard');
    };

    return (
        <div className='auth-page'>
            <Navbar />
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Join the Community!</h1>
                    <p>Let's get you set up.</p>
                </div>
                <div className="auth-form">
                    <input type="text" placeholder="Name" className="auth-input" />
                    <input type="email" placeholder="Email" className="auth-input" />
                    <input type="password" placeholder="Password" className="auth-input" />
                    <input type="password" placeholder="Confirm Password" className="auth-input" />
                    <button onClick={handleRegister} className="auth-button">Register</button>
                    <p className="auth-switch">
                        Already have an account? <span className="auth-link" onClick={() => navigate('/login')}>Login Here</span>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RegisterPage;
