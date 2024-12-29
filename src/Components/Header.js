import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && headerRef.current && !headerRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>Eventful</h1>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <Link to="/" style={navLinkStyle}>Home</Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/login" style={navLinkStyle}>Login</Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/signup" style={navLinkStyle}>Sign Up</Link>
            </li>
            {/* Dropdown Menu */}
            <li style={navItemStyle} ref={dropdownRef} onClick={toggleDropdown}>
              <span style={navLinkStyle}>More</span>
              {dropdownOpen && (
                <ul style={dropdownMenuStyle}>
                  <li style={dropdownItemStyle}>
                    <Link to="/about" style={navLinkStyle}>About</Link>
                  </li>
                  <li style={dropdownItemStyle}>
                    <Link to="/contact" style={navLinkStyle}>Contact</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Header Styles with Background Image and Larger Size
const headerStyle = {
  background: `linear-gradient(to right, rgb(104, 131, 158), rgb(134, 150, 166)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2aZiYjWoMquuAaQocjnoB8JL0eMHyIjjOEA&s')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '3rem 2rem', // Increased padding for a larger header
  color: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  height: '120px', // Increased height for a more prominent header
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Container for the header content
const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

// Logo Styles
const logoStyle = {
  fontSize: '3rem', // Increased font size for the logo
  margin: 0,
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  letterSpacing: '2px',
};

// Navigation List Styles
const navListStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

// Navigation Item Styles
const navItemStyle = {
  margin: '0 1.5rem',
  position: 'relative', // For positioning the dropdown menu
};

// Link Styles
const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};

// Hover effect for links
const navLinkHoverStyle = {
  color: '#ffcc00',  // A gold color for hover effect
};

const navLinkStyleHover = {
  ...navLinkStyle,
  ...navLinkHoverStyle
};

// For hover effect
navLinkStyle[':hover'] = navLinkStyleHover;

// Dropdown Menu Styles
const dropdownMenuStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#333',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  width: '200px',
  padding: '0',
  listStyle: 'none',
  margin: '0',
  opacity: 1,
  transition: 'opacity 0.3s ease-in-out', // Fade-in effect for the dropdown
};

const dropdownItemStyle = {
  padding: '1rem',
  textAlign: 'center',
};

// To add a fade effect to the dropdown
dropdownMenuStyle[':hover'] = {
  opacity: 0.9, // Slight opacity change when hovered
};
