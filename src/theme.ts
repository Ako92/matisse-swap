import {createTheme} from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#B3BCD0", // simple grey
            contrastText: "#525F7B" // grey text
        },
        secondary:{
            main: "#020B44", //dark blue
            contrastText: "#FFFFFF" // white text
        }
    },
});

export default theme;
