import React, { FunctionComponent } from 'react';
import { Box, Container, Link, Typography, useTheme } from '@mui/material';
import { useQuery } from '@apollo/client';
import { SETTING_QUERY } from '../common/graphql/setting.query';
import { Link as RouterLink } from 'react-router';

export const Footer: FunctionComponent = () => {
  const theme = useTheme();

  const { data: menuFooter } = useQuery(SETTING_QUERY, {
    variables: {
      name: 'menu_footer',
    },
    fetchPolicy: 'cache-first',
  });

  return (
    <Box
      component='footer'
      sx={{ color: theme.palette.background.default, backgroundColor: theme.palette.primary.main, marginTop: 2 }}
    >
      <Container>
        <Box
          component='nav'
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            textAlign: 'center',
            my: 2,
          }}
        >
          {menuFooter?.setting?.value?.map((item: { link: string; content: string }) => (
            <Link
              component={RouterLink}
              key={item.link}
              to={item.link}
              sx={{ color: 'inherit', fontWeight: 300, mx: 3 }}
            >
              {item.content}
            </Link>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <Typography component='small' sx={{ fontSize: '12px', fontWeight: '300' }}>
            © My Devil 2025, All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
