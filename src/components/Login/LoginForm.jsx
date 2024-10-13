import React, { useState } from 'react';
import './LoginForm.css'; 

const LoginForm = ({ onLogin }) => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const validate = () => {
    const errors = {};

    if (!username) errors.username = 'Username is required';
    else if (username.length < 2) errors.username = 'Username must be at least 2 characters';

    if (!email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Invalid email address';

    if (!password) errors.password = 'Password is required';
    else if (password.length < 6) errors.password = 'Password must be at least 6 characters';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ username, email, password }); 
      onLogin(username); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
            
            
            <input
            placeholder='User Name'
              id="email"
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className={`form-input ${errors.username ? 'error' : ''}`}
            />
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>

          <div className="form-group">
            
           
            <input
            placeholder='Email'
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            
            <input
              placeholder='Password'
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-input ${errors.password ? 'error' : ''}`}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
