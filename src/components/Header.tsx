import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface headerProps {
    title?: string,
    subtitle?: string
    children?: ReactNode
}

function Header({ title, subtitle, children }: headerProps) {
    return (
        <>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', margin: '1% 2%' }}>
                <div style={{ width: '50%' }}>
                    <Typography
                        color='text.secondary' variant="h2" sx={{ margin: '1% 2%', fontWeight: '400' }}>
                        {title}
                    </Typography>
                    <Typography
                        color='text.secondary' variant="h5" sx={{ margin: '1% 2%' }}>
                        {subtitle}
                    </Typography>
                </div>
                <div>
                    {children}
                </div>
            </header>
            <hr></hr>
        </>
    );
}

export default Header;