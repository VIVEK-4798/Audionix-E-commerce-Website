import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Styled Toolbar with theme mixins
const Toolbar = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

// Styled Title with responsive margin
const Title = styled('h1')(({ theme }) => ({
  marginTop: '5%',
}));

// Styled EmptyButton with responsive styles
const EmptyButton = styled(Button)(({ theme }) => ({
  minWidth: '150px',
  [theme.breakpoints.down('xs')]: {
    marginBottom: '5px',
  },
  [theme.breakpoints.up('xs')]: {
    marginRight: '20px',
  },
}));

// Styled CheckoutButton
const CheckoutButton = styled(Button)({
  minWidth: '150px',
});

// Styled Link
const Link = styled('a')({
  textDecoration: 'none',
  color: 'inherit', // Ensures link inherits the text color
});

// Styled CardDetails for layout
const CardDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: '10%',
  width: '100%',
  justifyContent: 'space-between',
}));

export { Toolbar, Title, EmptyButton, CheckoutButton, Link, CardDetails };
