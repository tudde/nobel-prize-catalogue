import {createTheme} from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
export const lightTheme = createTheme({
palette: {
    mode: 'light',
    primary: {
    main: '#5a5148',
    },
    secondary: {
    main: '#ef160c',
    },
    background: {
    default: '#f1e4d3',
    paper: '#f1e4d3',
    },
    text: {
    primary: '#5a5148',
    },
},
})
