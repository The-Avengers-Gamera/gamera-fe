import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    color: {
      primary: string;
      light: string;
      dark: string;
      bg_primary: string;
      bg_secondary: string;
      bg_nav: string;
      text: string;
      text_secondary: string;
      subtitle: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    color?: {
      primary?: string;
      light?: string;
      dark?: string;
      bg_primary?: string;
      bg_secondary?: string;
      bg_nav?: string;
      text?: string;
      text_secondary?: string;
      subtitle?: string;
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

  interface Palette {
    custom?: Palette['primary'];
  }
  interface PaletteOptions {
    custom?: PaletteOptions['primary'];
  }
}
