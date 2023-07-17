import { Box, FormControlLabel, Checkbox, Alert, Snackbar, SlideProps, Slide, Typography } from "@mui/material";
import ButtonsComponent from "../components/Forms/ButtunsComponent";
import CountrySelect from "../components/Forms/CountrySelect";
import FormControlComponent from "../components/Forms/FormControlComponent";
import FormLayout from "../components/Forms/FormLayout";
import FormHeader from "../components/Forms/FormsHeader";
import InputContainer from "../components/Forms/InputContainer";
import PhoneCodeSelect from "../components/Forms/PhoneCodeSelect";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { COUNTRIES_CODE, getCountriesCode } from "../services/contriesApi";
import { USER, editUser, getUserById } from "../services/usersApi";
import { formsLengthValidate, formsRequireValidate, formsMailValidate } from "../services/validations";

function EditUserPage() {
    const navigation = useNavigate()
    const [alert, setAlert] = useState(false)
    const [countryCodeList, setCountryCodeList] = useState<Array<COUNTRIES_CODE>>([]);
    const { id } = useParams()
    const [user, setUser] = useState<USER>()
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
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [countryError, setCountryError] = useState('')
    const [city, setCity] = useState('')
    const [cityError, setCityError] = useState('')
    const [street, setStreet] = useState('')
    const [streetError, setStreetError] = useState('')
    const [houseNumber, setHouseNumber] = useState(0)
    const [houseNumberError, setHouseNumberError] = useState('')
    const [zipCode, setZipCode] = useState(0)
    const [error, setError] = useState("")

    useEffect(() => {
        getCountriesCode()
            .then(json => {
                setCountryCodeList(json)
            })
    }, [])

    useEffect(() => {
        if (!id) return
        getUserById(id)
            .then(json => {
                setUser(json)
            })

    }, [])

    function getUserType(type?: number): string {
        if (type === 2) {
            return 'BUSINESS'
        }
        return 'REGULAR'
    }

    useEffect(() => {
        setFirstName(user?.firstName as string)
        setMiddleName(user?.middleName as string)
        setLastName(user?.lastName as string)
        setPhone(user?.phone as string)
        setEmail(user?.email as string)
        setState(user?.state as string)
        setCountry(user?.country as string)
        setCity(user?.city as string)
        setStreet(user?.street as string)
        setHouseNumber(user?.houseNumber ? user?.houseNumber : 0)
        setZipCode(user?.zipCode ? user?.zipCode : 0)
    }, [user])

    const newUser: USER = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        phone: `+${countryCode} ${phone}`,
        email: email,
        state: state,
        country: country,
        city: city,
        street: street,
        houseNumber: houseNumber,
        zipCode: +zipCode,
    }

    function onSave(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        if (!formsLengthValidate(firstName) || !formsLengthValidate(lastName) || !formsRequireValidate(phone) || !formsMailValidate(email) || !formsRequireValidate(city) || !formsRequireValidate(street) || !formsRequireValidate(houseNumber.toString()) || !formsRequireValidate(country)) {
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
            if (!formsRequireValidate(houseNumber.toString())) {
                setHouseNumberError('This field is required')
            }
            if (!formsRequireValidate(country)) {
                setCountryError('This field is required')
            }
            return
        }

        setFirstNameError('')
        setLastNameError('')
        setPhoneError('')
        setEmailError('')
        setCountryError('')
        setStreetError('')
        setHouseNumberError('')

        if (!id) return
        editUser(id, newUser)
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
        setState('')
        setCountry('')
        setCity('')
        setStreet('')
        setHouseNumber(0)
        setZipCode(0)
    }

    function handleCancel() {
        navigation(`/user-page/${id}`)
    }

    function closeAlert() {
        navigation(`/user-page/${id}`)
        setAlert(false)
    }

    function TransitionLeft(props: JSX.IntrinsicAttributes & SlideProps) {
        return <Slide {...props} direction="right" />;
    }

    return (
        <>
            <FormHeader title="EDIT DETAILS" />

            <FormLayout onReset={resetForm} onSubmit={onSave}>

                <InputContainer>

                    <FormControlComponent label={"First Name*"} placeHolder={"First Name*"} width={"50ch"} inputValue={firstName} onChange={(e) => setFirstName(e.target.value)} helperText={firstNameError} error={firstNameError.length > 0} />

                    <FormControlComponent label={"Middle Name"} placeHolder={"Middle Name"} width={"50ch"} inputValue={middleName} onChange={(e) => setMiddleName(e.target.value)} helperText='' error={false} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"Last Name*"} placeHolder={"Last Name*"} width={"58ch"} marginValue="0 4px 0 0" inputValue={lastName} onChange={(e) => setLastName(e.target.value)} helperText={lastNameError} error={lastNameError.length > 0} />

                    <PhoneCodeSelect value={countryCode} setValue={setCountryCode} array={countryCodeList} error={phoneError} />

                    <FormControlComponent label={"Phone*"} placeHolder={"Phone*"} width={"46ch"} marginValue="0 4px 0 0" inputValue={phone} onChange={(e) => setPhone(e.target.value)} helperText={phoneError} error={phoneError.length > 0} />

                </InputContainer>

                <InputContainer>
                    <FormControlComponent label={"Email*"} placeHolder={"Email*"} width={"50ch"} inputValue={email} onChange={(e) => setEmail(e.target.value)} helperText={emailError} error={emailError.length > 0} />

                    <FormControlComponent label={"State"} placeHolder={"State"} width={"50ch"} inputValue={state} onChange={(e) => setState(e.target.value)} helperText='' error={false} />
                </InputContainer>

                <InputContainer>

                    <CountrySelect value={country} setValue={setCountry} error={error} array={countryCodeList} />

                    <FormControlComponent label={"City*"} placeHolder={"City*"} width={"50ch"} inputValue={city} onChange={(e) => setCity(e.target.value)} helperText={cityError} error={cityError.length > 0} />

                </InputContainer>

                <InputContainer>
                    <FormControlComponent label={"Street*"} placeHolder={"Street*"} width={"50ch"} inputValue={street} onChange={(e) => setStreet(e.target.value)} helperText={streetError} error={streetError.length > 0} />

                    <FormControlComponent label={"House Number*"} placeHolder={"House Number*"} width={"50ch"} inputValue={houseNumber.toString()} onChange={(e) => setHouseNumber(+e.target.value)} helperText={houseNumberError} error={houseNumberError.length > 0} />
                </InputContainer>

                <InputContainer>
                    <FormControlComponent label={"Zip Code"} placeHolder={"Zip Code"} width={"50ch"} inputValue={zipCode.toString()} onChange={(e) => setZipCode(+e.target.value)} helperText="" error={false} />

                </InputContainer>

                <Box sx={{ m: 1 }}>
                    <FormControlLabel control={<Checkbox />} label='Register as business' checked={user?.userType === 2} disabled />
                    <br />
                    <Typography variant="body2">You registered as {getUserType(user?.userType)} account. To change it please contact us at <span style={{ textDecoration: 'underline' }}><NavLink to="mailto:info@bcard.com">info@bcard.com</NavLink></span></Typography>
                </Box>
                {

                    error &&
                    <Alert severity="error">{error}</Alert>
                }
                <ButtonsComponent textAction="SAVE CHANGES" onClick={handleCancel} />

                <Snackbar open={alert} autoHideDuration={2000} onClose={closeAlert} TransitionComponent={TransitionLeft}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        The details have been successfully updated
                    </Alert>
                </Snackbar>

            </FormLayout >
        </>
    );
}

export default EditUserPage;