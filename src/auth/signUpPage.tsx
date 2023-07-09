import { FormControl, InputLabel, OutlinedInput, Box, Select, MenuItem, Checkbox, FormControlLabel, Snackbar, Alert, Slide, SlideProps, FormHelperText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { COUNTRIES_CODE, getCountriesCode } from "../services/contriesApi";
import { USER, signUp } from "../services/usersApi";
import { defaultImageAlt, defaultImageUrl, formsLengthValidate, formsMailValidate, formsPasswordValidate, formsRequireValidate } from "../services/validations";
import FormControlComponent from "../components/Forms/FormControlComponent";
import PasswordInput from "../components/Forms/PasswordInput";
import { useNavigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import ButtonsComponent from "../components/Forms/ButtunsComponent";
import FormHeader from "../components/Forms/FormsHeader";
import FormLayout from "../components/Forms/FormLayout";
import InputContainer from "../components/Forms/InputContainer";

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


function SignUpPage() {
    const navigation = useNavigate()
    const [alert, setAlert] = useState(false)
    const [countryCodeList, setCountryCodeList] = useState<Array<COUNTRIES_CODE>>([]);
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [imageAlt, setImageAlt] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [countryError, setCountryError] = useState('')
    const [city, setCity] = useState('')
    const [cityError, setCityError] = useState('')
    const [street, setStreet] = useState('')
    const [streetError, setStreetError] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [houseNumberError, setHouseNumberError] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [userType, setUserType] = useState(false)
    const [error, setError] = useState("")

    const newUser: USER = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        phone: `+${countryCode} ${phone}`,
        email: email,
        city: city,
        street: street,
        houseNumber: +houseNumber,
        country: country,
        state: state,
        imageUrl: defaultImageUrl(imageUrl),
        imageAlt: defaultImageAlt(imageAlt),
        userType: !userType ? 3 : 2,
        zipCode: +zipCode,
        password: password
    }

    useEffect(() => {
        getCountriesCode()
            .then(json => {
                setCountryCodeList(json)
            })
    }, [])

    function closeAlert() {
        navigation('/log-in')
        setAlert(false)
    }

    function TransitionLeft(props: JSX.IntrinsicAttributes & SlideProps) {
        return <Slide {...props} direction="right" />;
    }

    function onSignUp(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        if (!formsLengthValidate(firstName) || !formsLengthValidate(lastName) || !formsRequireValidate(phone) || !formsMailValidate(email) || !formsRequireValidate(city) || !formsRequireValidate(street) || !formsRequireValidate(houseNumber) || !formsRequireValidate(country) || !formsPasswordValidate(password)) {
            if (!formsLengthValidate(firstName)) {
                setFirstNameError('First name must be longer then 2 characters')
            }
            if (!formsLengthValidate(lastName)) {
                setLastNameError('Last name must be longer then 2 characters')
            }
            if (!formsRequireValidate(phone)) {
                setPhoneError('This field is required')
            }
            if (!formsMailValidate(email)) {
                setEmailError('Please enter a validate email')
            }
            if (!formsRequireValidate(city)) {
                setCityError('This field is required')
            }
            if (!formsRequireValidate(street)) {
                setStreetError('This field is required')
            }
            if (!formsRequireValidate(houseNumber)) {
                setHouseNumberError('This field is required')
            }
            if (!formsRequireValidate(country)) {
                setCountryError('This field is required')
            }
            if (!formsPasswordValidate(password)) {
                setPasswordError('Password mus be between 6 to 15 characters')
            }
            return
        }

        setFirstNameError('')
        setLastNameError('')
        setPhoneError('')
        setEmailError('')
        setPasswordError('')
        setCountryError('')
        setStreetError('')
        setHouseNumberError('')

        signUp(newUser)
            .then((user) => {
                setAlert(true)
                setError('')
            })
            .catch((err) => {
                setError(err.message)
                return
            })
    }

    function resetForm() {
        setFirstName('')
        setMiddleName('')
        setLastName('')
        setCountryCode('')
        setPhone('')
        setEmail('')
        setPassword('')
        setImageUrl('')
        setImageAlt('')
        setState('')
        setCountry('')
        setCity('')
        setStreet('')
        setHouseNumber('')
        setZipCode('')
        setUserType(false)
    }

    function handleCancel() {
        navigation('/')
    }

    return (

        <>
            <FormHeader title="REGISTER" />

            <FormLayout onReset={resetForm} onSubmit={onSignUp}>

                <InputContainer>

                    <FormControlComponent label={"First Name*"} placeHolder={"First Name*"} width={"50ch"} inputValue={firstName} onChange={(e) => setFirstName(e.target.value)} helperText={firstNameError} error={firstNameError.length > 0} />

                    <FormControlComponent label={"Middle Name"} placeHolder={"Middle Name"} width={"50ch"} inputValue={middleName} onChange={(e) => setMiddleName(e.target.value)} helperText='' error={false} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"Last Name*"} placeHolder={"Last Name*"} width={"58ch"} marginValue="0 4px 0 0" inputValue={lastName} onChange={(e) => setLastName(e.target.value)} helperText={lastNameError} error={lastNameError.length > 0} />

                    <FormControl sx={{ mx: 0.5, width: '11ch' }}>
                        <InputLabel id="demo-multiple-name-label">+000</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            input={<OutlinedInput label="+000" />}
                            MenuProps={MenuProps}
                            error={phoneError.length > 0}
                        >
                            {countryCodeList.map((cc) => (
                                <MenuItem
                                    key={cc.id}
                                    value={cc.phone}
                                >
                                    {cc.code3} | +{cc.phone}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControlComponent label={"Phone*"} placeHolder={"Phone*"} width={"46ch"} marginValue="0 4px 0 0" inputValue={phone} onChange={(e) => setPhone(e.target.value)} helperText={phoneError} error={phoneError.length > 0} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"Email*"} placeHolder={"Email*"} width={"50ch"} inputValue={email} onChange={(e) => setEmail(e.target.value)} helperText={emailError} error={emailError.length > 0} />

                    <PasswordInput width="50ch" inputValue={password} onChange={(e) => setPassword(e.target.value)} helperText={passwordError} error={passwordError.length > 0} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"Image Url"} placeHolder={"Image Url"} width={"50ch"} inputValue={imageUrl} onChange={(e) => setImageUrl(e.target.value)} helperText='' error={false} />

                    <FormControlComponent label={"Image Alt"} placeHolder={"Image Alt"} width={"50ch"} inputValue={imageAlt} onChange={(e) => setImageAlt(e.target.value)} helperText='' error={false} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"State"} placeHolder={"State"} width={"50ch"} inputValue={state} onChange={(e) => setState(e.target.value)} helperText='' error={false} />

                    <FormControl sx={{ width: '50ch' }}>
                        <InputLabel id="demo-multiple-name-label">Country*</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            input={<OutlinedInput label="Country*" />}
                            MenuProps={MenuProps}
                            error={countryError.length > 0}
                        >
                            {countryCodeList.map((cc) => (
                                <MenuItem
                                    key={cc.id}
                                    value={cc.name}
                                >
                                    {cc.name}
                                </MenuItem>
                            ))}
                        </Select>
                        {
                            countryError.length > 0 && <FormHelperText style={{ color: '#DB2F2F' }}> {countryError} </FormHelperText>
                        }

                    </FormControl>
                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"City*"} placeHolder={"City*"} width={"50ch"} inputValue={city} onChange={(e) => setCity(e.target.value)} helperText={cityError} error={cityError.length > 0} />

                    <FormControlComponent label={"Street*"} placeHolder={"Street*"} width={"50ch"} inputValue={street} onChange={(e) => setStreet(e.target.value)} helperText={streetError} error={streetError.length > 0} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"House Number*"} placeHolder={"House Number*"} width={"50ch"} inputValue={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} helperText={houseNumberError} error={houseNumberError.length > 0} />

                    <FormControlComponent label={"Zip Code"} placeHolder={"Zip Code"} width={"50ch"} inputValue={zipCode} onChange={(e) => setZipCode(e.target.value)} helperText="" error={false} />

                </InputContainer>

                <Box sx={{ m: 1 }}>
                    <FormControlLabel control={<Checkbox />} label="Register as business" checked={userType} onChange={(e) => setUserType(!userType)} />
                </Box>
                {

                    error &&
                    <Alert severity="error">{error}</Alert>
                }
                <ButtonsComponent textAction="SIGN UP" onClick={handleCancel} />

                <Snackbar open={alert} autoHideDuration={2000} onClose={closeAlert} TransitionComponent={TransitionLeft}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        The details have been successfully entered
                    </Alert>
                </Snackbar>

            </FormLayout >
        </>
    );
}

export default SignUpPage;