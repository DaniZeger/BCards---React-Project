import { FormControl, Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Header from "../components/Header";
import BCard from "../components/BCard";
import { useEffect, useState } from "react";
import { CARDS, getCards } from "../services/cardsApi";
import SearchInput from "../components/Forms/SearchInput";


enum SortDirection {
    titleAsc = 'titleAsc', // A-Z
    titleDesc = 'titleDesc', // Z-A
    dateAsc = 'dateAsc', // First - Last
    dateDesc = 'dateDesc' // Last - First
}

function HomePage() {
    const [cardsData, setCardsData] = useState<Array<CARDS>>([])
    const [filteredData, setFilteredData] = useState<Array<CARDS>>([])
    const [sort, setSort] = useState('Sort By')

    useEffect(() => {
        getCards()
            .then(json => {
                setCardsData(json)
                setFilteredData(json)
            })
    }, [])

    function handleSort(e: SelectChangeEvent) {
        const direction = e.target.value as SortDirection;
        setSort(direction);

        let result = [...filteredData];

        if (direction === SortDirection.titleDesc) {
            result.sort((a, b) =>
                a.title > b.title ? -1 : a.title < b.title ? 1 : 0
            )
        }
        if (direction === SortDirection.titleAsc) {
            result.sort((a, b) =>
                a.title < b.title ? -1 : a.title > b.title ? 1 : 0
            )
        }
        if (direction === SortDirection.dateDesc) {
            result.sort((a, b) =>
                a.created_at && b.created_at && a.created_at > b.created_at ? -1 : a.created_at && b.created_at && a.created_at < b.created_at ? 1 : 0
            )
        }
        if (direction === SortDirection.titleAsc) {
            result.sort((a, b) =>
                a.created_at && b.created_at && a.created_at < b.created_at ? -1 : a.created_at && b.created_at && a.created_at > b.created_at ? 1 : 0
            )
        }

        setFilteredData(result);
    }

    return (
        <>
            <Header
                title="Cards Page"
                subtitle="Here you can find business cards from all categories"
            />
            <div style={{ display: 'flex' }}>

                <SearchInput filterKey='title' data={cardsData} setFilteredData={setFilteredData} />

                <FormControl size="small" sx={{ mx: 0.5, width: '15ch' }}>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={sort}
                        onChange={handleSort}
                    >
                        <MenuItem value='Sort By'>Sort By</MenuItem>
                        <MenuItem value={SortDirection.titleAsc}>A-Z</MenuItem>
                        <MenuItem value={SortDirection.titleDesc}>Z-A</MenuItem>
                        <MenuItem value={SortDirection.dateAsc}>First Created</MenuItem>
                        <MenuItem value={SortDirection.dateDesc}>Last Created</MenuItem>

                    </Select>
                </FormControl>
            </div>
            <Grid
                sx={{ marginTop: '1%', paddingX: '2%' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    filteredData.map(card =>
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

export default HomePage;