'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    palette: {
        primary: {
            main: '#A17856'
        },
        secondary: {
            main: '#8CA09B',
        },
    },
});

export default theme;