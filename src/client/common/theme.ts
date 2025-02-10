import { createTheme, Theme } from '@mui/material';

export const theme: Theme = createTheme({
  cssVariables: { cssVarPrefix: '' },
  typography: { fontFamily: 'Noto Sans, serif' },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
      },
    },
  },
});
