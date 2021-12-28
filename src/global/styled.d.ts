import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type NewTheme = typeof theme;

  export interface DefaultTheme extends NewTheme {}
}
