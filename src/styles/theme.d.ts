// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        light: string;
      };
      secondary: {
        dark: string;
        light: string;
      };
      gray: {
        dark: string;
        light: string;
      };
      status: {
        primary: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
      };
      borderColor: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      xsmall: string;
      small: string;
      regular: string;
      medium: string;
      large: string;
      h1: string;
      h2: string;
      h3: string;
    };
    headerWidth: string;
  }
}
