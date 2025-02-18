import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router';
import { AppBar, Box, Button, ButtonGroup, Container, Drawer, IconButton, Link, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useQuery } from '@apollo/client';
import { SETTING_QUERY } from '../common/graphql/setting.query';

export const Header: FunctionComponent = () => {
  const { data: menuMain } = useQuery(SETTING_QUERY, {
    variables: {
      name: 'menu_main',
    },
    fetchPolicy: 'cache-first',
  });

  return (
    <>
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
            <Link
              component={RouterLink}
              to='/'
              sx={{
                display: 'flex',
                flexGrow: { xs: 1, md: 0 },
                justifyContent: 'center',
                color: 'inherit',
                fontStyle: '22px',
                fontWeight: '700',
                textDecoration: 'none',
                textTransform: 'uppercase',
                mr: { xs: 6, md: 2 },
              }}
            >
              My Devils
            </Link>
            <Box component='nav' sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
              {menuMain?.setting?.value?.map((item: { link: string; content: string }) => (
                <Link
                  key={item.link}
                  component={RouterLink}
                  to={item.link}
                  sx={{ color: 'inherit', fontWeight: 300, mx: 3 }}
                >
                  {item.content}
                </Link>
              ))}
            </Box>
            <ButtonGroup variant='text' aria-label='Login and register' sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button component={RouterLink} to='/login' sx={{ color: 'inherit' }}>
                Login
              </Button>
              <Button component={RouterLink} to='/register' sx={{ color: 'inherit' }}>
                Register
              </Button>
            </ButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer>AABBCC</Drawer>
    </>
  );
};
