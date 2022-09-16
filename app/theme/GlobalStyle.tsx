import { GlobalStyles } from '@mui/material';
import theme from 'theme';

const GlobalStyle =
    <GlobalStyles styles={{
        '.MuiTypography-root.MuiTypography-h1': {
            [theme.breakpoints.down('xl')]: {
                fontSize: '4rem'
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '3.6rem'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '3.25rem'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '2.9rem'
            }
        },
        '.MuiTypography-root.MuiTypography-h2': {
            [theme.breakpoints.down('xl')]: {
                fontSize: '2.25rem'
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '2rem'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '1.8rem'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.62rem'
            }
        },
        '.MuiTypography-root.MuiTypography-h5': {
            [theme.breakpoints.down('xl')]: {
                fontSize: '1.25rem'
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '1.125rem'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '1rem'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem'
            }
        },
        '.MuiTypography-root.MuiTypography-subtitle1': {
            [theme.breakpoints.down('xl')]: {
                fontSize: '1.125rem'
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '1rem'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '0.9rem'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem'
            }
        },
        '.MuiTypography-root.MuiTypography-subtitle2': {
            [theme.breakpoints.down('xl')]: {
                fontSize: '1rem'
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '0.9rem'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '0.8rem'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.75rem'
            }
        },
        '.MuiTypography-root.MuiTypography-body1': {
            [theme.breakpoints.down('xl')]: {
                fontSize: '0.9rem'
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '0.8rem'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '0.75rem'
            },
        },
        '.MuiTypography-root.MuiTypography-body2': {
            [theme.breakpoints.down('xl')]: {
                fontSize: '0.75rem'
            },
        },
        '.MuiTypography-root.MuiButtonBase-root ': {
            [theme.breakpoints.down('xl')]: {
                fontSize: '1rem'
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '0.9rem'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '0.8rem'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.75rem'
            }
        },
        '.MuiButtonBase-root.MuiButton-root ': {
            [theme.breakpoints.down('xl')]: {
                fontSize: '1rem'
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '0.9rem'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '0.8rem'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.75rem'
            }
        },
    }} />;

export default GlobalStyle;