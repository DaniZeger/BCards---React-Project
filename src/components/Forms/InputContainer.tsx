import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

function InputContainer({ children }: Props) {
    return (
        <Box sx={{ m: 1, width: '100%', display: 'flex', justifyContent: 'space-around' }}>
            {children}
        </Box>
    );
}

export default InputContainer;