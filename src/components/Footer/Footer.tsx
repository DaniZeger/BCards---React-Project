import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FooterButtons from "./FooterButtons";
import InfoIcon from '@mui/icons-material/Info';
import { userContext } from '../../App';
import { useContext } from 'react';

function Footer() {
    const context = useContext(userContext)
    const userType = context?.user?.userType
    return (
        <footer>
            <FooterButtons
                link='/about'
                title="About"
                icon={<InfoIcon />}
            />
            {
                context?.user &&
                <FooterButtons
                    link='fav-cards'
                    title="Favorites"
                    icon={<FavoriteIcon />}
                />
            }
            {
                userType && userType < 3 &&
                <FooterButtons
                    link='my-cards'
                    title="My Cards"
                    icon={<AssignmentIndIcon />}
                />
            }
        </footer>
    );
}

export default Footer;