import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      overflow: 'hidden',
    }}>
      <div style={{ flex: 1, position: 'relative' }}>
        {/* Event Picture */}
        <img
          src="https://careertraining.ed2go.com/common/images/2/20778/GES2061-Wedding-Event-Planner-935x572.jpg"
          alt="Event"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Welcome Back!</h2>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1.5rem' }}>
          Join us for an unforgettable experience.
        </p>

        <form style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
            <input
              type="email"
              id="email"
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              placeholder="Enter your email"
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
            <input
              type="password"
              id="password"
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#007bff' }}>
          Don’t have an account? <Link to="/signup" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
