import { createContext, useContext, useEffect, useState } from "react";
import { CARDS, getUserCards } from "../services/cardsApi";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import BCard from "../components/BCard";
import Header from "../components/Header";
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface CONTEXT {
    cardsData: Array<CARDS>,
    setCardsData: Function
}

export const cardsContext = createContext<CONTEXT | null>(null)

function MyCardsPage() {
    const navigation = useNavigate()
    const [cardsData, setCardsData] = useState<Array<CARDS>>([])
    const context = useContext(userContext)

    useEffect(() => {
        if (!context?.user) {
            navigation('/')
        } else {
            getUserCards(context.user.id)
                .then(json => {
                    setCardsData(json)
                })
        }
    }, [])

    function handleClick() {
        navigation('/my-cards/add-card')
    }
    return (

        <cardsContext.Provider value={{ cardsData, setCardsData }}>
            <Header
                title="My Cards"
                subtitle={`Hallo ${context?.user?.firstName} mange your cards`}
                children={<Button onClick={handleClick} variant="contained" endIcon={<AddCircleIcon />}>
                    Add Card
                </Button>}
            />
            <Grid
                sx={{ marginTop: '1%', paddingX: '2%' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    cardsData.map(card =>
                        <BCard
                            key={card._id}
                            image={card.imageUrl}
                            title={card.title}
                            subtitle={card.subtitle}
                            phone={card.phone}
                            address={`${card.houseNumber} ${card.state}, ${card.city} ${card.state}, ${card.country}`}
                            cardId={card?._id ? card?._id : ''}
                        />
                    )
                }
            </Grid>
        </cardsContext.Provider>

    );
}

export default MyCardsPage;