import { ButtonGroup, Button, createTheme } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import { ThemeProvider } from "@emotion/react";
import { teal } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        neutral: {
            main: teal[600],
            contrastText: '#fff',
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}


interface Props {
    onClick: React.FormEventHandler,
    textAction: string
}
function ButtonsComponent({ onClick, textAction }: Props) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ButtonGroup sx={{ m: 1, columnGap: 2 }} fullWidth={true} variant="outlined" aria-label="outlined button group">
                    <Button color="error" onClick={onClick}>CANCEL</Button>
                    <Button type="reset" color='neutral'> < ReplayIcon /> </Button>
                </ButtonGroup>
                <Button sx={{ m: 1 }} fullWidth={true} variant="contained" type="submit" color='neutral'>{textAction}</Button>
            </ThemeProvider>
        </>
    );
}

export default ButtonsComponent;