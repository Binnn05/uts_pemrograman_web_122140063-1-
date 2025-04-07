import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
  },
};

export default ProductList;