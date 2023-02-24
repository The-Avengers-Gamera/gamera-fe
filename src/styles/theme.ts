import { createTheme, CustomTheme } from '@mui/material/styles';

// option refer to https://mui.com/material-ui/customization/theming/
const theme: CustomTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6DDB03',
      contrastText: '#000',
    },
    secondary: {
      main: '#13141F',
    },
    background: {
      default: '#000',
    },
  },
  breakpoints: {
    values: {
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 320,
      tablet: 768,
      laptop: 992,
      desktop: 1440,
    },
  },
  color: {
    primary: '#6DDB03',
    light: '#191C25',
    dark: '#13141F',
    bg_primary: '#13141F',
    bg_secondary: ' #222430',
    bg_nav: '#1A1C25',
    text: '#F5F8F7',
    text_secondary: '#E2E2E2',
    subtitle: '#3D3D3D',
  },
});

export type MuiTheme = typeof theme;

export default theme;
