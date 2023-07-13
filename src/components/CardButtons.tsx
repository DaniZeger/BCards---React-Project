import { CardActions, ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { userContext } from "../App";
import { FavoriteContext } from "./FavoriteContext";

interface Props {
    handleDelete: (cardId: string) => void;
    handleClick: (cardId: string) => void;
    cardId?: string;
}

function CardButtons({ handleDelete, cardId, handleClick }: Props) {
    const context = useContext(userContext)
    const location = useLocation()
    const showButtons = location.pathname.includes('my-cards')
    const { toggleFavorite, favorites } = useContext(FavoriteContext);
    const isFavorite = favorites.includes(cardId || '');
    const uContext = useContext(userContext)

    const handleToggleFavorite = () => {
        toggleFavorite(uContext?.user?.id || '', cardId || '');
    };

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
                context?.user?.userType === 1 && !location.pathname.includes('my-cards') &&
                <ButtonGroup>
                    <IconButton onClick={onDelete}><DeleteIcon /></IconButton>
                </ButtonGroup>
            }
            <ButtonGroup>
                <IconButton color="info"><PhoneIcon /></IconButton>
                {
                    context?.user &&
                    <IconButton onClick={handleToggleFavorite}> {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteIcon />}</IconButton>
                }
            </ButtonGroup>
        </CardActions>
    );
}

export default CardButtons;