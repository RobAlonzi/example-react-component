import { createTheme, Theme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    black: Palette['primary'];
    purple: Palette['primary'];
    blue: Palette['primary'];
    blue2: Palette['primary'];
    teal: Palette['primary'];
    gray1: Palette['primary'];
    gray2: Palette['primary'];
    gray3: Palette['primary'];
    gray4: Palette['primary'];
    gray5: Palette['primary'];
    gray6: Palette['primary'];
    gray7: Palette['primary'];
    gray8: Palette['primary'];
  }
  interface PaletteOptions {
    black: PaletteOptions['primary'];
    purple: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    blue2: PaletteOptions['primary'];
    teal: PaletteOptions['primary'];
    gray1: PaletteOptions['primary'];
    gray2: PaletteOptions['primary'];
    gray3: PaletteOptions['primary'];
    gray4: PaletteOptions['primary'];
    gray5: PaletteOptions['primary'];
    gray6: PaletteOptions['primary'];
    gray7: PaletteOptions['primary'];
    gray8: PaletteOptions['primary'];
  }
}

export enum COLORS {
  black = '#05152D',
  blue = '#0071EB',
  bluedark = '#005CBF',
  blue2 = '#004A99',
  red = '#86122F',
  green = '#126C54',
  error = '#B94E4E',
  gray1 = '#41474F',
  gray2 = '#606874',
  gray3 = '#838D9C',
  gray4 = '#A9B3C1',
  gray5 = '#C8CDD4',
  gray6 = '#DDE1E7',
  gray7 = '#E7EAEE',
  gray8 = '#F6F7F9',
  purple = '#5C42F0',
  teal = '#14E0FF',
}
declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs_monitor: true; // removes the `xs` breakpoint
    sm_monitor: true;
    md_monitor: true;
    lg_monitor: true;
    xl_monitor: true;
    xl: false;
  }
}
export default createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1080,
      lg: 1280,
      xs_monitor: 1163,
      sm_monitor: 1425,
      md_monitor: 1520,
      lg_monitor: 1784,
      xl_monitor: 2561,
    },
  },
  palette: {
    primary: {
      main: COLORS.blue,
      dark: COLORS.bluedark,
    },
    error: {
      main: COLORS.error,
    },
    text: {
      primary: COLORS.gray3,
    },
    black: {
      main: COLORS.black,
    },
    purple: {
      main: COLORS.purple,
    },
    blue: {
      main: COLORS.blue,
    },
    blue2: {
      main: COLORS.blue2,
    },
    teal: {
      main: COLORS.teal,
    },
    gray1: {
      main: COLORS.gray1,
    },
    gray2: {
      main: COLORS.gray2,
    },
    gray3: {
      main: COLORS.gray3,
    },
    gray4: {
      main: COLORS.gray4,
    },
    gray5: {
      main: COLORS.gray5,
    },
    gray6: {
      main: COLORS.gray6,
    },
    gray7: {
      main: COLORS.gray7,
    },
    gray8: {
      main: COLORS.gray8,
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'initial',
      },
    },
  },
}) as Theme;
