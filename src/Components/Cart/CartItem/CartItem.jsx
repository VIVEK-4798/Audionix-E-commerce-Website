import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

const Media = styled(CardMedia)({
  height: 260,
});

const CustomCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
});

const CustomCardActions = styled(CardActions)({
  justifyContent: 'space-between',
});

const CustomButtons = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const { image, name, line_total, quantity } = item;

  return (
    <Card>
      <Media
        component="img"
        image={image.url || ''}
        alt={name}
      />
      <CustomCardContent>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='h5'>{line_total.formatted_with_symbol}</Typography>
      </CustomCardContent>
      <CustomCardActions>
        <CustomButtons>
          <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>{quantity}</Typography>
          <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </CustomButtons>
        <Button type='button' variant='contained' color='secondary' onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
      </CustomCardActions>
    </Card>
  );
};

export default CartItem;
