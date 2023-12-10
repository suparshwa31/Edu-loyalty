import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MessageBox = ({ message, onClose, onButtonClick, buttonText }) => (
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid #ddd', borderRadius: '4px', padding: '20px', textAlign: 'center', backgroundColor: '#fff' }}>
  <p>{message}</p>
   <button onClick={() => { onClose(); onButtonClick(); }} style={{ backgroundColor: '#8e44ad', color: '#fff', borderRadius: '4px', padding: '8px', cursor: 'pointer', margin: '5px' }}>
      {buttonText}
    </button>
  </div>
);

const handleGoToLogin = () => {
  // Update the path as per your route configuration
  window.location.href = '/'; // or your login page route
};

const SignUpForm = ({ history }) => {
  const [username, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !lastName || !password || !confirmPassword || !email) {
      setError('All fields are required');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        // Additional validation for the lastName field
        if (!validateLastName(lastName)) {
          setError('Full name should only contain alphabetic characters and spaces');
          return;
        }

        // Additional validation for the password field
        if (!validatePassword(password)) {
          setError('Password should be alphanumeric and at least 8 characters long');
          return;
        }

        // Proceed with user registration
        const registrationResponse = await fetch('http://127.0.0.1:5000/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
            lastname: lastName,
            email,
            referralCode,
          }),
        });

        if (!registrationResponse.ok) {
          const registrationData = await registrationResponse.json();
          setError(registrationData.error_message);
        } else {
          setSuccessMessage('Signup successful! Please login.');
          setError(''); // Clear any previous error message
        }
      } catch (error) {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateLastName = (lastName) => {
    // Check if the lastName contains only alphabetic characters and spaces
    return /^[a-zA-Z\s]+$/.test(lastName);
  };

  const validatePassword = (password) => {
    // Check if the password is alphanumeric and at least 8 characters long
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const closeMessage = () => {
    setSuccessMessage('');
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h2 className="sign-in-title" style={{ color: '#8e44ad', marginBottom: '20px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>Welcome to Eduloyalty</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username" style={{ color: '#555' }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setName(e.target.value)}
              style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" style={{ color: '#555' }}>Full Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ color: '#555' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: '#555' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" style={{ color: '#555' }}>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="referralcode" style={{ color: '#555' }}>Referral Code (Optional):</label>
            <input
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', width: '100%' }}
            />
          </div>
          {error && <p className="sign-in-error" style={{ color: '#e74c3c', marginBottom: '10px' }}>{error}</p>}
          {successMessage && (
            <MessageBox
              message={successMessage}
              onClose={closeMessage}
              onButtonClick={handleGoToLogin}
              buttonText="Go to Login"
            />
          )}
          <div className="form-group">
            <button
              type="submit"
              style={{
                backgroundColor: '#8e44ad',
                color: '#fff',
                borderRadius: '4px',
                padding: '12px',
                cursor: 'pointer',
                width: '100%',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#6c3483'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#8e44ad'}
            >
              Sign Up
            </button>
          </div>
          <p style={{ color: '#555', textAlign: 'center' }}>
            Already have an account? <Link to="/" className="link-text" style={{ color: '#8e44ad' }}>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
