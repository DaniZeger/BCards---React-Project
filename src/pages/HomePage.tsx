import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, alpha, styled } from "@mui/material";
import Header from "../components/Header";
import BCard from "../components/BCard";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { CARDS, getCards } from "../services/cardsApi";
import { userContext } from "../App";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '20%',
    },
    border: '1px rgb(212, 212, 212) solid'
}));

enum SortDirection {
    titleAsc = 'titleAsc', // A-Z
    titleDesc = 'titleDesc', // Z-A
    dateAsc = 'dateAsc', // First - Last
    dateDesc = 'dateDesc' // Last - First
}

function HomePage() {
    const [cardsData, setCardsData] = useState<Array<CARDS>>([])
    const context = useContext(userContext)
    const [search, setSearch] = useState("")
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


    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearch(value)
        const term = value.toLowerCase()
        const result = [...cardsData].filter(card =>
            card?.title?.toLowerCase().startsWith(term)
        )
        setFilteredData(result)
    }


    return (
        <>
            <Header
                title="Cards Page"
                subtitle="Here you can find business cards from all categories"
            />
            <div style={{ display: 'flex' }}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        value={search}
                        onChange={handleSearch}
                    />
                </Search>

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
                            cardId={card._id}
                        />
                    )
                }
            </Grid>
        </>

    );
}

export default HomePage;