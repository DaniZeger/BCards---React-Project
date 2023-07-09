import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface buttonProps {
    title: string,
    icon: ReactNode,
    link: string
}



function FooterButtons({ title, icon, link }: buttonProps) {
    return (
        <ul>
            <NavLink to={link}>
                <li>{icon}</li>
                <li>{title}</li>
            </NavLink>
        </ul >
    );
}

export default FooterButtons;