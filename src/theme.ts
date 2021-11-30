import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    code: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    code?: React.CSSProperties;
  }

  // type TypographyVariant = TypographyVariant | 'code'
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    code: true;
  }
}

// declare module '@mui/material/styles/createTypography' {
//   interface Variant = Variant
// }

const baseTheme = createTheme({
  typography: {
    h1: {
      fontSize: '5rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '1.2rem',
      textAlign: 'left',
      fontWeight: 200,
    },
    body1: {
      fontSize: '1.2rem',
    },
    overline: {
      lineHeight: '1em',
    },
  },
  palette: {
    background: {
      default: '#FEFCFA',
      paper: '#FDFAF9',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FF003B',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#CE07FF',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
  // spacing: 2,
});

export const theme = responsiveFontSizes(baseTheme);

theme.typography.code = {
  fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  fontSize: '.8rem',
  letterSpacing: '0.1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};
