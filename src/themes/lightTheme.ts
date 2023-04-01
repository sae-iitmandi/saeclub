import { createTheme } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: deepPurple[500],
            contrastText: '#fff'
        },
        text: {
            primary: grey[800],
            secondary: grey[700]
        },
        background: {
            default: grey[100],
            paper: grey[300]
        }
    }
});