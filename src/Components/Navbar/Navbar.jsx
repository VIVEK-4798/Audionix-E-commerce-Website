import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import logo from '../../assets/logo.png';
import { AppBarStyled, Title, Image, Grow } from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <>
      <AppBarStyled position="fixed" color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" color="inherit" style={{ textDecoration: 'none', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Image src={logo} alt="ShopSphere" height="25px" />
            Audionix
          </Typography>
          <Grow />
          {location.pathname === '/' && (
            <div>
              <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export default Navbar;
