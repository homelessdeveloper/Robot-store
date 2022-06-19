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
        text_main: '#3D3D3D',
        text_light: '#707070',
        green: '#5AA039',
        green_hover: '#74C44F',
        green_active: '#407626',
        red: '#D82D4F',
        orange: '#FF900D',
        orange_hover: '#FFAB47',
        orange_active: '#DD7D0C',
        light: '#F0F0F0',
        light_line: '#DEDEDE',
        back: '#E5E5E5',
      },
    },
  },
  plugins: [],
};
