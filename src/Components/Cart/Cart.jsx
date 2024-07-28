import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { Toolbar, Title, EmptyButton, CheckoutButton, CardDetails } from './styles';
import { Link } from 'react-router-dom'; // Ensure correct import
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, loading, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const defaultCart = {
    line_items: [],
    subtotal: {
      formatted_with_symbol: '',
    },
  };

  const currentCart = cart || defaultCart;

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      Reload the Page if the page is not updated, 
      Sorry for the inconvenience.
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {currentCart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <br/><br/><br/><br/>
      <Typography variant='h6'>If you've recently made changes to your cart and they aren't reflecting, please refresh the page. We apologize for any inconvenience caused.</Typography>

      <CardDetails>
        <Typography variant='h4'>
          Subtotal: {currentCart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <EmptyButton size="large" type="button" variant="contained" color="secondary" onClick={onEmptyCart}>
            Empty Cart
          </EmptyButton>
          <CheckoutButton component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">
            Checkout
          </CheckoutButton>
        </div>
      </CardDetails>
    </>
  );

  if (loading) return 'Loading...';
  if (!currentCart.line_items) return 'Loading...';

  return (
    <Container>
      <Toolbar />
      <Title variant="h3">
        Your Shopping Cart
      </Title>
      {!currentCart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
