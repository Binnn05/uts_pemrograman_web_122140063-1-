import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '@context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error('Produk tidak ditemukan');
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (loading) return <p style={styles.status}>Loading...</p>;
  if (error) return <p style={styles.status}>Error: {error}</p>;
  if (!product) return null;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div>
        <h2>{product.title}</h2>
        <p><strong>${product.price}</strong></p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)} style={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    padding: '2rem',
  },
  image: {
    width: '250px',
    height: '250px',
    objectFit: 'contain',
  },
  button: {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#1e90ff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    marginTop: '1rem',
    cursor: 'pointer',
  },
  status: {
    textAlign: 'center',
    marginTop: '2rem',
  },
};

export default ProductDetail;