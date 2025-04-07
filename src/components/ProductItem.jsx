import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CartContext } from '@context/CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.price}>${product.price}</p>
      <div style={styles.buttons}>
        <Link to={`/product/${product.id}`} style={styles.detailBtn}>Detail</Link>
        <button onClick={() => addToCart(product)} style={styles.cartBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  buttons: {
    display: 'flex',
    gap: '0.5rem',
  },
  detailBtn: {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#1e90ff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none',
  },
  cartBtn: {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#32cd32',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};

export default ProductItem;