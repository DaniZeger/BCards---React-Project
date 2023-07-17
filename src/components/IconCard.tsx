import { ListItem, ListItemAvatar, Avatar, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useEffect, useState } from "react";

interface Props {
    title: string,
    text: string,
    children: ReactNode
}

function IconCard({ title, text, children }: Props) {
    const [winWidth, setWinWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWinWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    }, [winWidth]);
    return (
        <div style={{ width: winWidth > 700 ? '20%' : '90%' }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListItemAvatar color="natural">
                    <Avatar sx={{ width: '50px', height: '50px' }}>
                        {children}
                    </Avatar>
                </ListItemAvatar>
                <Typography sx={{ mt: 1 }} variant="h6">{title}</Typography>
                <Typography sx={{ textAlign: 'center', my: 1 }} variant="body1">{text}</Typography>
            </ListItem>
        </div>
    );
}

export default IconCard;