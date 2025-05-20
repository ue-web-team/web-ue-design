import { colors } from './colors';

export const theme = {
  extend: {
    colors,
    fontFamily: {
      sans: ['Borna', 'sans-serif'],
    },
    lineHeight: {
      '11': '2.75rem',
    },
    boxShadow: {
      hard: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.34)',
    },
  },
};

export default theme;
