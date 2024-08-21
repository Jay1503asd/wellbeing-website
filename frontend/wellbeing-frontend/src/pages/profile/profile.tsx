import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import image from "./image.png"

const ProfilePage = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSave = () => {
        alert('Profile updated successfully!');
    };

    const handleCancel = () => {
        navigate('/dashboard');
    };

    return (
        <div className = "profile-body">
        <Navbar />
        <Header page = "Profile" />
        <div className="profile-page">
            <div className="profile-card">
                <div className="profile-pic-container">
                    <img src={image} alt="Profile" className="profile-pic" />
                    <h2 className="profile-name">{name}</h2>
                </div>
                <div className="profile-form">
                    <label>
                        Name
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="profile-input"
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="profile-input"
                        />
                    </label>
                    <label>
                        New Password
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="profile-input"
                        />
                    </label>
                    <label>
                        Confirm Password
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="profile-input"
                        />
                    </label>
                    <div className="profile-buttons">
                        <button onClick={handleSave} className="save-button">Save</button>
                        <button onClick={handleCancel} className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProfilePage;
