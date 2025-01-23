// import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={styles.page}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

const styles = {
  page: {
    padding: '50px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  },
};

export default ProductDetail;
