import React from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            noWrap
            component='a'
            href='/'
            sx={{
              color: 'inherit',
              fontStyle: '20px',
              fontWeight: '700',
              textDecoration: 'none',
              textTransform: 'uppercase',
              mr: 2,
            }}
          >
            My Devils
          </Typography>
          <Box sx={{ flexGrow: 1 }}>Link Link</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
