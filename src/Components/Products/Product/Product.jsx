import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { styled } from '@mui/system';

const Root = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
}));

const Media = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
}));

const CardContentStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const CardActionsStyled = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

const Product = ({ product, onAddToCart }) => {
  return (
    <Root>
      <Media
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <CardContentStyled>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </CardContentStyled>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
      </CardContent>
      <CardActionsStyled disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActionsStyled>
    </Root>
  );
};

export default Product;
