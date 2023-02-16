import { createTheme, CustomTheme } from '@mui/material/styles';

// option refer to https://mui.com/material-ui/customization/theming/
const theme: CustomTheme = createTheme({
  palette: {
    mode: 'dark',
    gamera: {
      main: '#6DDB03',
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
    light: '#191C25',
    bg_light: '#191C25',
  },
});

export type MuiTheme = typeof theme;

export default theme;
