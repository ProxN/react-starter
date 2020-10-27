import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: {
      dark: '#13141e',
      light: '#1a1b28',
    },
    secondary: {
      dark: '#3bba9c',
      light: '#5ccbb1',
    },
    gray: {
      dark: '#b4bcce',
      light: '#f1f3f6',
    },
    status: {
      primary: '#3498db',
      success: '#1fb17f',
      info: '#9c88ff',
      warning: '#f1c40f',
      danger: '#F05365',
    },
    borderColor: 'rgba(46, 48, 71, 0.4)',
  },
  fonts: {
    primary: 'Mulish, sans-serif',
    secondary: 'Sora, sans-serif',
  },
  fontSizes: {
    xsmall: '12px',
    small: '14px',
    regular: '16px',
    medium: '20px',
    large: '28px',
    h1: '60px',
    h2: '40px',
    h3: '22px',
  },
  headerWidth: '70px',
};

export default Theme;
