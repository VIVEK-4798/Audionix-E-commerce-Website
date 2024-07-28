import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Ensure correct import
import CartItem from './CartItem/CartItem';

// Styled components
const Toolbar = styled('div')({
  marginTop: '64px', // Adjust based on your toolbar height
});

const Title = styled(Typography)({
  marginTop: '24px',
  marginBottom: '24px',
  textAlign: 'center',
});

const CardDetails = styled('div')({
  display: 'flex',
  marginTop: '24px',
  width: '100%',
  justifyContent: 'space-between',
});

const EmptyButton = styled(Button)({
  minWidth: '150px',
});

const CheckoutButton = styled(Button)({
  minWidth: '150px',
});

const Cart = ({ cart, loading, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const defaultCart = {
    line_items: [],
    subtotal: {
      formatted_with_symbol: '',
    },
  };

  const currentCart = cart || defaultCart;

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      Your cart is empty. <Link to="/">Start adding items!</Link>
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
      <CardDetails>
        <Typography variant="h4">
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
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        If you've recently made changes to your cart and they aren't reflecting, please refresh the page. We apologize for any inconvenience caused.
      </Typography>
    </>
  );

  if (loading) return 'Loading...';
  if (!currentCart.line_items.length) return <EmptyCart />;

  return (
    <Container>
      <Toolbar />
      <Title variant="h3">Your Shopping Cart</Title>
      {currentCart.line_items.length ? <FilledCart /> : <EmptyCart />}
    </Container>
  );
};

export default Cart;
