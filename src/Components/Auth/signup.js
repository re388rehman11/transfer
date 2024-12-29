import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      overflow: 'hidden',
    }}>
      <div style={{ flex: 1, position: 'relative' }}>
        {/* Picture Section */}
        <img
          src="https://mitendicotthouse.org/wp-content/uploads/2018/12/calendar-meeting.jpg" // Replace with an actual picture
          alt="Create Account"
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
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Create Your Account</h2>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1.5rem' }}>
          Sign up to explore amazing features and experiences.
        </p>

        <form style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
            <input
              type="text"
              id="name"
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              placeholder="Enter your full name"
              required
            />
          </div>

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
              placeholder="Create a password"
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '0.5rem' }}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              placeholder="Confirm your password"
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
              backgroundColor: '#28a745',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#007bff' }}>
          Already have an account? <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
        </p>
      </div>
    </div>
  );
}
