import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons from react-icons library

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');

  const handleSignup = () => {
    console.log(`Signing up with first name: ${firstName}, last name: ${lastName}, email: ${email}, and password: ${createPassword}`);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setCreatePassword('');
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
        background: 'linear-gradient(to right,  #F2F2F2 ,  #F2F2F2 )',
      }}
    >
      <div
        id="signup-form"
        style={{ padding: '40px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', width: '400px', backgroundColor: '#E0E0E0', borderRadius: '8px' }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Sign Up</h2>
        <form>
          <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <FaUser style={{ marginRight: '5px' }} /> First Name:
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px', borderRadius: '5px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <FaUser style={{ marginRight: '5px' }} /> Last Name:
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px', borderRadius: '5px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <FaEnvelope style={{ marginRight: '5px' }} /> Email:
            </span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px', borderRadius: '5px' }}
          />

          <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <FaLock style={{ marginRight: '5px' }} /> Create Password:
            </span>
          </label>
          <input
            type="password"
            placeholder="Create your password"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
            style={{ width: '96%', padding: '8px', marginBottom: '20px', borderRadius: '5px' }}
          />

          <button
            type="button"
            onClick={handleSignup}
            style={{
              padding: '10px',
              background: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px',
              width: '100%',
            }}
          >
            Sign Up
          </button>

          <p style={{ marginTop: '10px', textAlign: 'center', color: '#333' }}>
            Already have an account? <a href="/login" style={{ color: '#333' }}>Login here</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
