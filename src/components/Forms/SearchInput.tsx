import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState } from "react";
import { alpha, styled } from "@mui/material";
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

interface Props<T> {
    data: T[];
    setFilteredData: React.Dispatch<React.SetStateAction<T[]>>;
    filterKey: keyof T;
}

function SearchInput<T>({ data, setFilteredData, filterKey }: Props<T>) {
    const [search, setSearch] = useState("")

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearch(value);
        const term = value.toLowerCase();

        const result = data.filter((item) => {
            const propertyValue = item[filterKey];
            if (typeof propertyValue === 'string') {
                return propertyValue.toLowerCase().startsWith(term);
            }
            return false;
        });

        setFilteredData(result);
    }
    return (<>.
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
    </>);
}

export default SearchInput;