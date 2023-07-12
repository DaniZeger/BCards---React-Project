import { FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { COUNTRIES_CODE } from "../../services/contriesApi";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 150,
        },
    },
};

interface Props {
    value: string,
    setValue: Function,
    error: string,
    array: Array<COUNTRIES_CODE>
}

function CountrySelect({ value, setValue, error, array }: Props) {
    return (
        <FormControl sx={{ width: '50ch' }}>
            <InputLabel id="demo-multiple-name-label">Country*</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                input={<OutlinedInput label="Country*" />}
                MenuProps={MenuProps}
                error={error.length > 0}
            >
                {array.map((cc) => (
                    <MenuItem
                        key={cc.id}
                        value={cc.name}
                    >
                        {cc.name}
                    </MenuItem>
                ))}
            </Select>
            {
                error.length > 0 && <FormHelperText style={{ color: '#DB2F2F' }}> {error} </FormHelperText>
            }

        </FormControl>
    );
}

export default CountrySelect;