import { CardActions, ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../App";

interface Props {
    handleDelete: (cardId: string) => void;
    handleClick: (cardId: string) => void;
    cardId?: string;
}

function CardButtons({ handleDelete, cardId, handleClick }: Props) {
    const context = useContext(userContext)
    const location = useLocation()
    const showButtons = location.pathname.includes('my-cards')

    function onDelete() {
        if (cardId) {
            handleDelete(cardId);
        }
    };

    function onClick() {
        if (cardId) {
            handleClick(cardId)
        }
    }

    const justify = handleJustify()
    function handleJustify() {
        if (showButtons) {
            return 'space-between'
        } else if (context?.user?.userType === 1) {
            return 'space-between'
        } else {
            return 'flex-end'
        }
    }


    return (
        <CardActions sx={{ display: 'flex', justifyContent: `${justify}` }}>
            {
                showButtons &&
                <ButtonGroup>
                    <IconButton onClick={onDelete}><DeleteIcon /></IconButton>
                    <IconButton onClick={onClick}><EditIcon /></IconButton>
                </ButtonGroup>
            }
            {
                context?.user?.userType === 1 &&
                <ButtonGroup>
                    <IconButton onClick={onDelete}><DeleteIcon /></IconButton>
                </ButtonGroup>
            }
            <ButtonGroup>
                <IconButton color="info"><PhoneIcon /></IconButton>
                {
                    context?.user &&
                    <IconButton><FavoriteIcon /></IconButton>
                }
            </ButtonGroup>
        </CardActions>
    );
}

export default CardButtons;