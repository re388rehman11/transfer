import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <p>&copy; 2024 Eventful. All Rights Reserved.</p>
        
        <div style={socialLinksStyle}>
          <p>
            <a href="/contact" style={footerLinkStyle}>Contact Us</a> | 
            <a href="/about" style={footerLinkStyle}> About Us</a>
          </p>
          
          <div style={socialIconsStyle}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Styles for Footer
const footerStyle = {
  background: '#333',
  padding: '2rem 1rem',
  color: '#fff',
  marginTop: '2rem',
};

const footerContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
};

const footerLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 0.5rem',
};

const socialLinksStyle = {
  marginTop: '1rem',
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};

const socialIconStyle = {
  color: '#fff',
  fontSize: '1.5rem',
  margin: '0 1rem',
  textDecoration: 'none',
};
