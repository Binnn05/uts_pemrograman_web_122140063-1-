import React, { useContext } from 'react';
import { CartContext } from '@context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    return (
      <div style={styles.center}>
        <p>Keranjang kosong.</p>
        <Link to="/" style={styles.backBtn}>Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Keranjang Belanja</h2>
      {cart.map((item, index) => (
        <div key={index} style={styles.item}>
          <img src={item.image} alt={item.title} style={styles.image} />
          <div>
            <p>{item.title}</p>
            <p><strong>${item.price}</strong></p>
            <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>
              Hapus
            </button>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={clearCart} style={styles.clearBtn}>Kosongkan Keranjang</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
  item: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #ddd',
    paddingBottom: '1rem',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
  },
  removeBtn: {
    marginTop: '0.5rem',
    padding: '0.4rem 0.8rem',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
  clearBtn: {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    marginTop: '1rem',
  },
  center: {
    textAlign: 'center',
    padding: '2rem',
  },
  backBtn: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.4rem 1rem',
    backgroundColor: '#1e90ff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
  },
};

export default Cart;