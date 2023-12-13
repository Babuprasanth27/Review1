import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    if (!isChecked) {
      alert('Please check the box to agree to the terms.');
      return;
    }
  };

  return (
    <div
      id="container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to right, #F2F2F2, #F2F2F2)',
      }}>
      <div
        id="login-form"
        style={{ padding: '40px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', width: '400px', backgroundColor: '#E0E0E0', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
        <form>
          <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <FaEnvelope style={{ marginRight: '5px' }} /> Email:
            </span>
          </label>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <FaEnvelope style={{ marginRight: '10px', color: '#aaa' }} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '5px' }}/>
          </div>

          <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <FaLock style={{ marginRight: '5px' }} /> Password:
            </span>
          </label>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FaLock style={{ marginRight: '10px', color: '#aaa' }} />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '5px' }}/>
          </div>

          <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
            <input
              type="checkbox"
              name="terms"
              checked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              style={{ marginRight: '5px' }}/>
            Agree to the terms and conditions
          </label>

          <button
            type="button"
            onClick={handleLogin}
            style={{
              padding: '10px',
              background: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px',
              width: '100%',
            }}>
            Login
          </button>

          <p style={{ marginTop: '10px', textAlign: 'center', color: '#333' }}>
            Forgot Password? <a href="/forgot-password" style={{ color: '#333' }}>Forgot password?</a>
          </p>

          <p style={{ marginTop: '10px', textAlign: 'center', color: '#333' }}>
            Don't have an account? <a href="/signup" style={{ color: '#333' }}>Sign up here</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
