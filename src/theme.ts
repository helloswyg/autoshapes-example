import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    code: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    code?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    code: true;
  }
}


export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '5rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '2rem',
    },
    body1:{
      fontSize: '1.2rem',
    },
    code:{
      fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      fontSize: '1.2rem',
      letterSpacing: '0.1rem'
    },
    overline:{
      lineHeight: '1em',
    }
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  components:{
    MuiButton:{
      defaultProps:{
        variant:'contained'
      },
    }
  },
  // spacing: 2,
});
