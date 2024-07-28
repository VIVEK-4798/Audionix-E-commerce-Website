import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Toolbar = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Title = styled('h1')(({ theme }) => ({
  marginTop: '5%',
}));

const EmptyButton = styled(Button)(({ theme }) => ({
  minWidth: '150px',
  [theme.breakpoints.down('xs')]: {
    marginBottom: '5px',
  },
  [theme.breakpoints.up('xs')]: {
    marginRight: '20px',
  },
}));

const CheckoutButton = styled(Button)({
  minWidth: '150px',
});

const Link = styled('a')({
  textDecoration: 'none',
});

const CardDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: '10%',
  width: '100%',
  justifyContent: 'space-between',
}));

export { Toolbar, Title, EmptyButton, CheckoutButton, Link, CardDetails };
