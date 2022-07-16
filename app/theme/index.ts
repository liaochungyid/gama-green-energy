import { createTheme } from "@mui/material";

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1440
        }
    },
    palette: {
        common: {
            black: '#343434',
        },
        primary: {
            main: '#343434',
        },
        secondary: {
            main: '#07451A',
            contrastText: '#FFF'
        },
        info: {
            main: '#51FE28',
            light: '#86D800',
            contrastText: '#FFF'
        },
        success: {
            main: '#86D800',
            contrastText: '#FFF'
        }
    },
    typography: {
        fontFamily: 'Noto Sans TC, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '4.375rem',
            lineHeight: 1.37,
            letterSpacing: '0.1rem',
        },
        h2: {
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.37,
            letterSpacing: '0.1rem',
        },
        h3: {
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.37,
            letterSpacing: '0.02rem',
        },
        h4: {
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 1.37,
            letterSpacing: '0.0625rem',
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.50,
            letterSpacing: '0.0625rem',
        },
        h6: {
            fontWeight: 700,
            fontSize: '1.25rem',
            lineHeight: 1.37,
            letterSpacing: '0.1rem',
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.78,
            letterSpacing: '0.1rem',
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: '1.125rem',
            lineHeight: 1.78,
            letterSpacing: '0.05rem',
        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.78,
            letterSpacing: '0.05rem',
        },
        body2: {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.78,
            letterSpacing: '0.05rem',
        },
        caption: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 2,
            letterSpacing: '0.05rem',
        },
        button: {
            fontWeight: 500,
            fontSize: '1.125rem',
            lineHeight: 2,
            letterSpacing: '0.1rem',
        }
    }
});
  
export default theme;