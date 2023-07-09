import { Typography } from "@mui/material";

interface Props {
    title: string
}

function FormHeader({ title }: Props) {
    return (
        <Typography
            color='text.secondary' variant="h3" sx={{ margin: '1% 2%', fontWeight: '400', textAlign: 'center' }}>
            {title}
        </Typography>
    );
}

export default FormHeader;