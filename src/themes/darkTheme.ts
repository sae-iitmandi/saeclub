import { createTheme } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: deepPurple[600],
            contrastText: '#fff'
        },
        text: {
            primary: grey[300],
            secondary: grey[400]
        },
        background: {
            default: '#23272f',
            paper: '#343A46'
        }
    }
});