/* eslint-disable no-unused-vars */
import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    color: {
      light: string;
      bg_light: string;
      main: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    color?: {
      light?: string;
      bg_light?: string;
      main: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

declare module '@mui/material/styles' {
  export interface BreakpointOverrides {
    xs: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
