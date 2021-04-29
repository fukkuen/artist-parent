module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    options: {
      whitelistPatterns: [/svelte-/],
    },
  },
  theme: {
    fontSize: {
      'xs': ['0.7rem'],
      'sm': ['0.875rem'],
      DEFAULT: ['1rem', {lineHeight: '1.67'}],
      'p2': ['1.125rem'],
      'p3': ['1.375rem'],
      'p4': ['1.625rem'],
      't1': ['1.875rem', {lineHeight: '1.2'}],
      't2': ['2.5rem', {lineHeight: '1.2'}],
      't3': ['3.125rem', {lineHeight: '1.2'}],
      'h1': ['3.75rem', {lineHeight: '1.15'}],
      'h2': ['5rem', {lineHeight: '1'}],
      'h3': ['5.625rem', {lineHeight: '1'}]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      blue: {
        '50': '#FCFCFC',
        '100': '#FAFAFA',
        '200': '#F2F2F2',
        '300': '#DDDDDD',
        '400': '#7B818E',
        '500': '#616161',
        '700': '#424242',
        '800': '#000000'
      },
      gray: {
        '50': '#FCFCFC',
        '100': '#FAFAFA',
        '200': '#F2F2F2',
        '300': '#DDDDDD',
        '400': '#7B818E',
        '500': '#777777',
        '700': '#424242',
        '800': '#000000'
      },
      orange: {
        '300': '#F5C2A2',
        '400': '#E2A883',
        '500': '#B3602E',
        '700': '#78523B'
      }
    },
    extend: {
      height: {
        '120': '30rem',
        '140': '35rem',
        '160': '40rem'
      }
    },
  },
  variants: {
    display: ['responsive','group-hover']
  },
  plugins: [require("@tailwindcss/typography")],
};
