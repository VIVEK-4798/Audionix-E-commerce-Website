import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product/Product';
import { Main, Toolbar } from './styles';

const Products = ({ products, onAddToCart }) => {
  return (
    <>
      <Main>
        <Toolbar />
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Main>
    </>
  );
}

export default Products;
