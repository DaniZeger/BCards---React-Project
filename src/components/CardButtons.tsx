import { CardActions, ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { userContext } from "../App";
import { FAV, removeFav, saveFav } from "../services/favorietsApi";

interface Props {
    handleDelete: (cardId: string) => void;
    handleClick: (cardId: string) => void;
    cardId?: string;
}

function CardButtons({ handleDelete, cardId, handleClick }: Props) {
    const context = useContext(userContext)
    const location = useLocation()
    const showButtons = location.pathname.includes('my-cards')
    const [fav, setFav] = useState(false)
    const favCard: FAV = {
        userId: context?.user?.id,
        cardId: cardId
    }


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

    function handleFav() {
        if (!fav) {
            if (!cardId) return
            saveFav(favCard)
                .then(() => {
                    setFav(!fav)
                })
        }
        else {
            if (!cardId) return
            removeFav(favCard)
                .then(() => {
                    setFav(!fav)
                })
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
                context?.user?.userType === 1 && !location.pathname.includes('my-cards') &&
                <ButtonGroup>
                    <IconButton onClick={onDelete}><DeleteIcon /></IconButton>
                </ButtonGroup>
            }
            <ButtonGroup>
                <IconButton color="info"><PhoneIcon /></IconButton>
                {
                    context?.user &&
                    <IconButton onClick={handleFav} color={fav ? 'error' : 'default'}><FavoriteIcon /></IconButton>
                }
            </ButtonGroup>
        </CardActions>
    );
}

export default CardButtons;