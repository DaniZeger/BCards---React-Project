import { useContext, useEffect, useState } from "react";
import FormLayout from "../components/Forms/FormLayout";
import FormHeader from "../components/Forms/FormsHeader";
import InputContainer from "../components/Forms/InputContainer";
import FormControlComponent from "../components/Forms/FormControlComponent";
import { Snackbar, Alert, Slide, SlideProps } from "@mui/material";
import { COUNTRIES_CODE, getCountriesCode } from "../services/contriesApi";
import ButtonsComponent from "../components/Forms/ButtunsComponent";
import { useNavigate } from "react-router-dom";
import { CARDS, addCards } from "../services/cardsApi";
import { userContext } from "../App";
import { formsLengthValidate, formsRequireValidate, formsMailValidate } from "../services/validations";
import PhoneCodeSelect from "../components/Forms/PhoneCodeSelect";
import CountrySelect from "../components/Forms/CountrySelect";

function AddCardPage() {
    const navigation = useNavigate()
    const [countryCodeList, setCountryCodeList] = useState<Array<COUNTRIES_CODE>>([]);
    const context = useContext(userContext)
    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [subTitleError, setSubTitleError] = useState('')
    const [description, setDescription] = useState("")
    const [descriptionError, setDescriptionError] = useState("")
    const [countryCode, setCountryCode] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [website, setWebsite] = useState('')
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
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        getCountriesCode()
            .then(json => {
                setCountryCodeList(json)
            })
    }, [])


    const newCard: CARDS = {
        title: title,
        subtitle: subTitle,
        description: description,
        phone: `+${countryCode} ${phone}`,
        email: email,
        website: website,
        imageUrl: imageUrl,
        imageAlt: imageAlt,
        state: state,
        country: country,
        city: city,
        street: street,
        houseNumber: houseNumber,
        zipCode: zipCode,
        userId: context?.user?._id
    }

    function onAdd(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        if (!formsLengthValidate(title) || !formsLengthValidate(subTitle) || !formsLengthValidate(description) || !formsRequireValidate(phone) || !formsMailValidate(email) || !formsRequireValidate(city) || !formsRequireValidate(street) || !formsRequireValidate(houseNumber) || !formsRequireValidate(country)) {
            if (!formsLengthValidate(title)) {
                setTitleError('Title must be longer then 2 characters')
            }
            if (!formsLengthValidate(subTitle)) {
                setSubTitleError('Subtitle must be longer then 2 characters')
            }
            if (!formsLengthValidate(description)) {
                setDescriptionError('Description must be longer then 2 characters')
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
            return
        }

        setTitleError('')
        setSubTitleError('')
        setDescriptionError('')
        setPhoneError('')
        setEmailError('')
        setCountryError('')
        setCityError('')
        setStreetError('')
        setHouseNumberError('')

        addCards(newCard)
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
        setTitle('')
        setSubTitle('')
        setDescription('')
        setCountryCode('')
        setPhone('')
        setEmail('')
        setWebsite('')
        setImageUrl('')
        setImageAlt('')
        setState('')
        setCountry('')
        setCity('')
        setStreet('')
        setHouseNumber('')
        setZipCode('')
    }

    function handleCancel() {
        navigation('/my-cards')
    }

    function closeAlert() {
        navigation('/my-cards')
        setAlert(false)
    }

    function TransitionLeft(props: JSX.IntrinsicAttributes & SlideProps) {
        return <Slide {...props} direction="right" />;
    }
    return (
        <>
            <FormHeader title="ADD NEW CARD" />

            <FormLayout onReset={resetForm} onSubmit={onAdd} >
                <InputContainer>
                    <FormControlComponent label={"Title*"} placeHolder={"Title*"} width={"50ch"} inputValue={title} onChange={(e) => setTitle(e.target.value)} helperText={titleError} error={titleError.length > 0} />

                    <FormControlComponent label={"Subtitle*"} placeHolder={"Subtitle*"} width={"50ch"} inputValue={subTitle} onChange={(e) => setSubTitle(e.target.value)} helperText={subTitleError} error={subTitleError.length > 0} />
                </InputContainer>
                <InputContainer>

                    <FormControlComponent label={"Description*"} placeHolder={"Description*"} width={"58ch"} marginValue="0 4px 0 0" inputValue={description} onChange={(e) => setDescription(e.target.value)} helperText={descriptionError} error={descriptionError.length > 0} />

                    <PhoneCodeSelect value={countryCode} setValue={setCountryCode} array={countryCodeList} error={phoneError} />


                    <FormControlComponent label={"Phone*"} placeHolder={"Phone*"} width={"46ch"} marginValue="0 4px 0 0" inputValue={phone} onChange={(e) => setPhone(e.target.value)} helperText={phoneError} error={phoneError.length > 0} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"Email*"} placeHolder={"Email*"} width={"50ch"} inputValue={email} onChange={(e) => setEmail(e.target.value)} helperText={emailError} error={emailError.length > 0} />

                    <FormControlComponent label={"Website"} placeHolder={"Website"} width={"50ch"} inputValue={website} onChange={(e) => setWebsite(e.target.value)} helperText='' error={false} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"Image Url"} placeHolder={"Image Url"} width={"50ch"} inputValue={imageUrl} onChange={(e) => setImageUrl(e.target.value)} helperText='' error={false} />

                    <FormControlComponent label={"Image Alt"} placeHolder={"Image Alt"} width={"50ch"} inputValue={imageAlt} onChange={(e) => setImageAlt(e.target.value)} helperText='' error={false} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"State"} placeHolder={"State"} width={"50ch"} inputValue={state} onChange={(e) => setState(e.target.value)} helperText='' error={false} />

                    <CountrySelect value={country} setValue={setCountry} error={error} array={countryCodeList} />
                </InputContainer>


                <InputContainer>

                    <FormControlComponent label={"City*"} placeHolder={"City*"} width={"50ch"} inputValue={city} onChange={(e) => setCity(e.target.value)} helperText={cityError} error={cityError.length > 0} />

                    <FormControlComponent label={"Street*"} placeHolder={"Street*"} width={"50ch"} inputValue={street} onChange={(e) => setStreet(e.target.value)} helperText={streetError} error={streetError.length > 0} />

                </InputContainer>

                <InputContainer>

                    <FormControlComponent label={"House Number*"} placeHolder={"House Number*"} width={"50ch"} inputValue={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} helperText={houseNumberError} error={houseNumberError.length > 0} />

                    <FormControlComponent label={"Zip Code"} placeHolder={"Zip Code"} width={"50ch"} inputValue={zipCode} onChange={(e) => setZipCode(e.target.value)} helperText="" error={false} />

                </InputContainer>
                <div style={{ marginTop: '2%' }}>
                    {

                        error &&
                        <Alert severity="error">{error}</Alert>
                    }
                    <ButtonsComponent textAction="ADD CARD" onClick={handleCancel} />
                </div>

                <Snackbar open={alert} autoHideDuration={2000} onClose={closeAlert} TransitionComponent={TransitionLeft}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        The details have been successfully entered
                    </Alert>
                </Snackbar>
            </FormLayout>
        </>
    );
}

export default AddCardPage;