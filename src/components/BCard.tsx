import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import CardButtons from "./CardButtons";
import { CARDS, deleteCards } from "../services/cardsApi";
import { cardsContext } from "../pages/MyCardsPage";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../App";
import { FavoriteContext } from "./FavoriteContext";

interface cardProps {
    image?: string,
    title?: string,
    subtitle?: string,
    phone?: string,
    address?: string,
    cardId: string,
    isFav?: boolean,
}


function BCard({ image, title, subtitle, phone, address, cardId }: cardProps) {

    const [width, setWidth] = useState(window.innerWidth);
    const context = useContext(cardsContext)
    const uContext = useContext(userContext)
    const navigation = useNavigate()



    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    }, [width]);

    function handleDelete(id: string) {
        deleteCards(id)
            .then(() => {
                context?.setCardsData((prevCardsData: any[]) =>
                    prevCardsData.filter((card) => card._id !== id)
                );
            })
            .catch((error) => {
                console.error("Error deleting card:", error);
            });
    }


    function handleEdit(id: string) {
        navigation(`/edit/${id}`)
    }

    return (
        <Grid item xs={width > 700 ? 3 : 6}>
            <Card id="cardBox" sx={{ maxWidth: 275 }}>
                <NavLink to={`/card/${cardId}`}>
                    <CardMedia
                        sx={{ height: 150 }}
                        image={image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {subtitle}
                        </Typography>
                        <hr></hr>
                        <Typography variant="caption" color="text.secondary">
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li><strong>Phone:</strong> {phone}</li>
                                <li><strong>Address:</strong> {address} </li>
                                <li><strong>Card Number:</strong> {cardId}</li>
                            </ul>
                        </Typography>
                    </CardContent>

                </NavLink>
                <CardButtons handleClick={handleEdit} handleDelete={handleDelete} cardId={cardId} />
            </Card>
        </Grid>
    );
}

export default BCard;

