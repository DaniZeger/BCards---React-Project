import { Alert, Box, Button, ButtonGroup, Slide, SlideProps, Snackbar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import FormControlComponent from "../components/Forms/FormControlComponent";
import PasswordInput from "../components/Forms/PasswordInput";
import ReplayIcon from '@mui/icons-material/Replay';
import ButtonsComponent from "../components/Forms/ButtunsComponent";
import { USER, logIn } from "../services/usersApi";
import { formsMailValidate, formsPasswordValidate } from "../services/validations";
import { setToken } from "./TokenManeger";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

function LogInPage() {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [name, setName] = useState('')
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState("")
    const context = useContext(userContext)


    function onLogIn(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        if (!formsMailValidate(email) || !formsPasswordValidate(password)) {
            if (!formsMailValidate(email)) {
                setEmailError('Please enter a validate email')
            }
            if (!formsPasswordValidate(password)) {
                setPasswordError('Password mus be between 6 to 15 characters')
            }
            return
        }

        setEmailError('')
        setPasswordError('')

        logIn({ email, password })
            .then((user) => {
                setAlert(true)
                setError('')
                setToken(user.token)
                context?.setUser(user)
                setName(user.firstName + " " + user.lastName)
            })
            .catch((err) => {
                setError(err.message)
                return
            })
    }

    function closeAlert() {
        if (context?.user?.userType === 2) {
            navigation('/my-cards')
        } else if (context?.user?.userType === 1) {
            navigation('/sandbox')
        } else {
            navigation('/')
        }
        setAlert(false)
    }

    function TransitionLeft(props: JSX.IntrinsicAttributes & SlideProps) {
        return <Slide {...props} direction="right" />;
    }

    function handleCancel() {
        navigation('/')
    }

    function resetForm() {
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <Typography
                color='text.secondary' variant="h3" sx={{ margin: '5% 0 2% 0', fontWeight: '400', textAlign: 'center' }}>
                LOG IN
            </Typography>
            <form
                onSubmit={onLogIn}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '40%',
                    margin: '1% auto'
                }}
                autoComplete="off"
                onReset={resetForm}
            >
                <FormControlComponent label={"Email"} placeHolder={"Email"} width={"100%"} inputValue={email} onChange={(e) => setEmail(e.target.value)} helperText={emailError} error={emailError.length > 0} marginValue="10px" />

                <PasswordInput marginValue="10px" width="100%" inputValue={password} onChange={(e) => setPassword(e.target.value)} helperText={passwordError} error={passwordError.length > 0} />
                {
                    error &&
                    <Alert sx={{ m: 1, width: '100%' }} severity="error">{error}</Alert>
                }
                <ButtonsComponent textAction="LOG IN" onClick={handleCancel} />

                <Snackbar open={alert} autoHideDuration={2000} onClose={closeAlert} TransitionComponent={TransitionLeft}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Welcome back <strong> {name}</strong>
                    </Alert>
                </Snackbar>

            </form>
        </>
    );
}

export default LogInPage;