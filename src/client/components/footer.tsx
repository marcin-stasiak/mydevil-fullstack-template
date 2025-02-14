import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component='footer'
      sx={{ color: theme.palette.background.default, backgroundColor: theme.palette.primary.main }}
    >
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <Typography component='small' sx={{ fontSize: '14px', fontWeight: '200' }}>
            © My Devil 2025, All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
