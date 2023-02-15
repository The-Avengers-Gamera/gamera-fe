import 'styled-components';
import { MuiTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends MuiTheme {}
}
