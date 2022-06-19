// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#74C34F',
          200: '#5AA039',
          300: '#407626',
        },
        orange: {
          100: '#FFAB47',
          200: '#FF900D',
          300: '#DD7D0C',
        },
        red: '#D82D4F',
        gray: {
          100: '#F0F0F0',
          200: '#DEDEDE',
          300: '#9E9E9E',
          400: '#3D3D3D',
        },
        dark: {},
      },
    },
  },
  plugins: [],
};
