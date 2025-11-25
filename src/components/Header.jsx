import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>RGC</div>
        <nav style={{ ...styles.nav, ...(isMenuOpen ? styles.navOpen : {}) }}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>RGC Enterprise System</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Why Choose Us</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Cloud & Mobile App</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>News</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
        <button style={styles.menuBtn} onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'var(--white)',
    boxShadow: 'var(--shadow-sm)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    padding: '1rem 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
  },
  nav: {
    display: 'flex',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
  },
  navItem: {},
  navLink: {
    fontWeight: '500',
    color: 'var(--text-color)',
  },
  menuBtn: {
    display: 'none',
    fontSize: '1.5rem',
    background: 'none',
    color: 'var(--text-color)',
  },
  // Mobile styles would typically be handled with media queries in CSS, 
  // but for simplicity here we might need a CSS file or styled-components.
  // I'll stick to inline styles for now but move to CSS modules or index.css for responsiveness later.
};

export default Header;
