import { FormControl, TextField, FormHelperText } from "@mui/material";

interface Props {
    label: string,
    placeHolder: string,
    width: string,
    marginValue?: string,
    inputValue: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    helperText: string
    error: boolean
}

function FormControlComponent({ label, placeHolder, width, marginValue, inputValue, onChange, helperText, error }: Props) {


    return (

        <FormControl style={{ margin: `${marginValue}`, width: `${width}` }}>
            <TextField label={label} variant="outlined" value={inputValue} onChange={onChange} helperText={helperText} error={error} placeholder={placeHolder} />
        </FormControl >
    );
}

export default FormControlComponent;