import React from 'react';
import { AppBar, Box, Button, ButtonGroup, Container, Drawer, IconButton, Link, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useQuery } from '@apollo/client';
import { SETTING_QUERY } from '../common/graphql/setting.query';

export const Header = () => {
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
              noWrap
              component='a'
              href='/'
              sx={{
                display: 'flex',
                flexGrow: { sx: 1, md: 0 },
                color: 'inherit',
                fontStyle: '22px',
                fontWeight: '700',
                textDecoration: 'none',
                textTransform: 'uppercase',
                mr: 2,
              }}
            >
              My Devils
            </Link>
            <Box component='nav' sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
              {menuMain?.setting?.value?.map((item: { link: string; content: string }) => (
                <Link key={item.link} href={item.link} sx={{ color: 'inherit', mx: 1 }}>
                  {item.content}
                </Link>
              ))}
            </Box>
            <ButtonGroup variant='text' aria-label='Login and register'>
              <Button href='/login' sx={{ color: 'inherit' }}>
                Login
              </Button>
              <Button href='/register' sx={{ color: 'inherit' }}>
                Register
              </Button>
            </ButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer>dd</Drawer>
    </>
  );
};
