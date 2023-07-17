import { useState, useEffect, useMemo } from "react"
import { CARDS, getCardById } from "../services/cardsApi"
import { NavLink, useParams } from "react-router-dom"
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Map from "../components/Map"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CardPag() {
    const [width, setWidth] = useState(window.innerWidth);
    const [card, setCard] = useState<CARDS>()
    const { id } = useParams()
    const location = `4390 Atlantic Ave, Long Beach California`
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    }, [width]);

    useEffect(() => {
        if (!id) return
        getCardById(id)
            .then(json => {
                setCard(json)
            })
    }, [])


    return (
        <>

            <header style={{ display: 'flex', flexDirection: width > 700 ? 'row' : 'column-reverse', justifyContent: 'space-between', alignItems: 'center', padding: width > 700 ? '1% 3%' : '0' }}>
                <div style={{ width: '45%' }}>
                    <Typography
                        color='text.secondary' variant="h2" sx={{ padding: width > 700 ? '1% 2%' : '0', fontWeight: '400' }}>
                        {card?.title}
                    </Typography>
                    <Typography
                        color='text.secondary' variant="h5" sx={{ padding: width > 700 ? '1% 2%' : '0' }}>
                        {card?.subtitle}
                    </Typography>
                    <Typography
                        color='text.secondary' variant="h6" sx={{ padding: '1% 2%' }}>
                        {card?.description}
                    </Typography>
                </div>
                <div style={{ display: "inline-block", clipPath: 'polygon(25% 1%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)' }}>
                    <img height='250px' src={card?.imageUrl} alt={card?.imageAlt} />
                </div>
            </header >
            <hr></hr>
            <section style={{ display: 'flex', flexDirection: width > 700 ? 'row' : 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ margin: '1% 2%' }}>

                    <Map dataAddress={location} />
                </div>
                <Grid style={{ margin: '1% 2%' }} xs={12} md={6} >
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={card?.phone}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={card?.email}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LanguageIcon />
                            </ListItemIcon>
                            <NavLink to={`${card?.website}`}>
                                <ListItemText
                                    primary={card?.website}
                                />
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={`${card?.houseNumber} ${card?.street},  ${card?.city} ${card?.state},  ${card?.country} ${card?.zipCode}`}
                            />
                        </ListItem>
                    </List>
                </Grid>
            </section >

        </>

    );
}

export default CardPag;