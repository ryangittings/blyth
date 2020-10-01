const colors = {
  primary: '#ff00ff',
  light: '#ffffff',
  dark: '#252525',
};

const fonts = {
  base: 'Helvetica, sans-serif',
  serif: 'Georgia, serif',
};

const sizeScale = {
  200: 'var(--step--2)',
  300: 'var(--step--1)',
  400: 'var(--step-0)',
  500: 'var(--step-1)',
  600: 'var(--step-2)',
  700: 'var(--step-3)',
  800: 'var(--step-4)',
  900: 'var(--step-5)',
};

module.exports = {
  colors,
  sizeScale,
  fonts,
  generateCustomProperties: true,
  utilities: {
    bg: {
      items: colors,
      output: 'standard',
      property: 'background',
    },
    color: {
      items: colors,
      output: 'standard',
      property: 'color',
    },
    font: {
      items: fonts,
      output: 'standard',
      property: 'font-family',
    },
    'gap-top': {
      items: sizeScale,
      output: 'standard',
      property: 'margin-top',
    },
    'gap-bottom': {
      items: sizeScale,
      output: 'standard',
      property: 'margin-bottom',
    },
    leading: {
      items: {
        tight: '1.2',
        mid: '1.5',
        loose: '1.7',
      },
      output: 'standard',
      property: 'line-height',
    },
    measure: {
      items: {
        long: '75ch',
        short: '60ch',
        compact: '40ch',
      },
      output: 'standard',
      property: 'max-width',
    },
    'pad-top': {
      items: sizeScale,
      output: 'standard',
      property: 'padding-top',
    },
    'pad-bottom': {
      items: sizeScale,
      output: 'standard',
      property: 'padding-bottom',
    },
    'pad-left': {
      items: sizeScale,
      output: 'standard',
      property: 'padding-left',
    },
    text: {
      items: sizeScale,
      output: 'responsive',
      property: 'font-size',
    },
    weight: {
      items: {
        light: '300',
        regular: '400',
        mid: '600',
        bold: '700',
      },
      output: 'standard',
      property: 'font-weight',
    },
  },
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
};
