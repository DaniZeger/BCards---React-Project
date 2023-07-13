import { useState, useEffect, useContext, createContext } from "react"
import { useNavigate } from "react-router-dom"
import { FAV, USER_FAV, getUserCards } from "../services/favorietsApi"
import { userContext } from "../App"
import Header from "../components/Header"
import { Grid } from "@mui/material"
import BCard from "../components/BCard"
import { CARDS } from "../services/cardsApi"

function FavCardsPage() {
    const navigation = useNavigate()
    const [fevCardsData, setFevCardsData] = useState<Array<USER_FAV>>([])
    const [cardsData, setCardsData] = useState<Array<CARDS>>([])
    const context = useContext(userContext)

    useEffect(() => {
        if (!context?.user) {
            navigation('/')
        } else {
            getUserCards(context.user.id)
                .then(json => {
                    setFevCardsData(json)
                })
        }
    }, [])

    useEffect(() => {
        const cards: Array<CARDS> = []
        fevCardsData.forEach(card => {
            if (!card.cardId) return
            cards.push(card.cardId)
        });
        setCardsData(cards)
    }, [fevCardsData])
    return (
        <>
            <Header
                title="Favorites Cards"
                subtitle={`Here are all the cards you saved`}
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
                            cardId={card._id ? card._id : ''}
                        />
                    )
                }
            </Grid>
        </>
    );
}

export default FavCardsPage;