import { VisibilityOff, Visibility } from "@mui/icons-material";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from "@mui/material";
import { useState } from "react";

interface Props {
    width: string,
    inputValue: string,
    marginValue?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    helperText: string
    error: boolean
}

function PasswordInput({ width, inputValue, onChange, helperText, error, marginValue }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl style={{ margin: `${marginValue}`, width: `${width}` }}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                value={inputValue}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                onChange={onChange}
                error={error}
                label="Password"
                placeholder="Password"
            />
            <FormHelperText style={{ color: '#DB2F2F' }}> {helperText} </FormHelperText>

        </FormControl>
    );
}

export default PasswordInput;