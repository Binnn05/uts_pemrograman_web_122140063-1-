import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '@context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const { cart } = useContext(CartContext);

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>🛍️ Fake Store</h1>
      <ul style={styles.links}>
        <li><Link style={getLinkStyle(location.pathname === '/')} to="/">Home</Link></li>
        <li><Link style={getLinkStyle(location.pathname === '/cart')} to="/cart">Cart ({cart.length})</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1e90ff',
    color: '#fff',
  },
  logo: {
    margin: 0,
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
  },
};

const getLinkStyle = (isActive) => ({
  color: isActive ? '#FFD700' : '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
});

export default Navbar;
