import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FAV, USER_FAV, getUserCards } from "../services/favorietsApi"
import { userContext } from "../App"
import Header from "../components/Header"
import { Grid } from "@mui/material"
import BCard from "../components/BCard"
import { CARDS } from "../services/cardsApi"

function FavCardsPage() {
    const navigation = useNavigate()
    const [cardsData, setCardsData] = useState<Array<USER_FAV>>([])
    const context = useContext(userContext)

    useEffect(() => {
        if (!context?.user) {
            navigation('/')
        } else {
            getUserCards(context.user.id)
                .then(json => {
                    setCardsData(json)
                    console.log(cardsData);
                })
        }
    }, [])
    return (
        <>
            <Header
                title="My Cards"
                subtitle={`Hallo ${context?.user?.firstName} mange your cards`}
            />
            <Grid
                sx={{ marginTop: '1%', paddingX: '2%' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    cardsData.map(card =>
                        <BCard
                            key={card.cardId?._id}
                            image={card.cardId?.imageUrl}
                            title={card.cardId?.title}
                            subtitle={card.cardId?.subtitle}
                            phone={card.cardId?.phone}
                            address={`${card.cardId?.houseNumber} ${card.cardId?.state}, ${card.cardId?.city} ${card.cardId?.state}, ${card.cardId?.country}`}
                            cardId={card.cardId?._id}
                        />
                    )
                }
            </Grid>
        </>
    );
}

export default FavCardsPage;