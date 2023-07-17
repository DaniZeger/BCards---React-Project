import { FormEvent, useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { USER, deleteUser, editUserImage, getUserById } from "../services/usersApi";
import { useNavigate, useParams } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Alert, Button, ButtonGroup, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Slide, SlideProps, Snackbar, Tooltip } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { userContext } from "../App";
import DialogComponent from "../components/DialogComponent";
import FormControlComponent from "../components/Forms/FormControlComponent";

function UserPage() {
    const [alert, setAlert] = useState(false)
    const navigation = useNavigate()
    const context = useContext(userContext)
    const [user, setUser] = useState<USER>()
    const { id } = useParams()
    const [width, setWidth] = useState(window.innerWidth);
    const defaultImage = 'https://secure.gravatar.com/avatar/d1715989516b186bce7cf2bf7327fd10?s=150&r=g&d=https://www.ieeer10.org/wp-content/plugins/userswp/assets/images/no_profile.png'
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
    const [openImageForm, setOpenImageForm] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [imageAlt, setImageAlt] = useState('')

    // Delete profile alert
    const handleClickOpenAlert = () => {
        setOpenDeleteAlert(true);
    };
    const closeDeleteAlert = () => {
        setOpenDeleteAlert(false);
    };

    function onDeleteUser() {
        if (!id) return
        deleteUser(id)
            .then(() => {
                setOpenDeleteAlert(false);
                setAlert(true)
                context?.setUser(null)
            })
            .catch((error) => {
                console.error("Error deleting card:", error);
            });
    }


    // Image form dialog
    const handleOpenImageForm = () => {
        setOpenImageForm(true)
    }
    const handleCloseImageForm = () => {
        setOpenImageForm(false)
    }

    function editImage() {
        if (!id) return
        editUserImage(id, imageUrl, imageAlt)
            .then((user) => {
                setUser(user)
                setOpenImageForm(false)
            })
    }

    function navToEdit() {
        navigation(`/edit-user/${id}`)
    }

    function getUserType(type?: number): string {
        if (type === 1) {
            return 'ADMIN'
        }
        if (type === 2) {
            return 'BUSINESS'
        }
        return 'REGULAR'
    }

    function setUserColor(type?: number): string {
        if (type === 1) {
            return 'green'
        }
        if (type === 2) {
            return 'orange'
        }
        return 'red'
    }

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    }, [width]);


    useEffect(() => {
        if (!id) return
        getUserById(id)
            .then(json => {
                setUser(json)
                setImageUrl(json.imageUrl ? json.imageUrl : '')
                setImageAlt(json.imageAlt ? json.imageAlt : '')
            })
    }, [])

    function closeAlert() {
        navigation('/')
        setAlert(false)
    }

    function TransitionLeft(props: JSX.IntrinsicAttributes & SlideProps) {
        return <Slide {...props} direction="right" />;
    }
    return (
        <>
            <Header title={`${user?.firstName}  ${user?.middleName}  ${user?.lastName}`}>
                <Button onClick={handleClickOpenAlert} sx={{ width: 'fit-content', ml: 2 }} color="error" endIcon={<LogoutIcon />} variant="outlined">Delete Profile</Button>
            </Header>
            <section style={{ display: 'flex', flexDirection: width > 700 ? 'row' : 'column-reverse', justifyContent: 'space-around', alignItems: 'center', padding: width > 700 ? '1% 3%' : '0' }}>
                <Grid style={{ margin: '1% 2%' }} xs={12} md={6} >
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={user?.phone}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={user?.email}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={`${user?.houseNumber} ${user?.street},  ${user?.city} ${user?.state},  ${user?.country} ${user?.zipCode}`}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AssignmentIndIcon />
                            </ListItemIcon>
                            <ListItemText
                                style={{ color: `${setUserColor(user?.userType)}` }}
                                primary={getUserType(user?.userType) + " user"}
                            />
                        </ListItem>
                    </List>
                    <ButtonGroup sx={{ m: 2, columnGap: 2 }} aria-label="medium secondary button group">
                        {/* <Button startIcon={<VpnKeyIcon />} variant="contained">Change Password</Button> */}
                        <Button onClick={navToEdit} startIcon={<EditIcon />} variant="contained">Edit Details</Button>
                    </ButtonGroup>
                </Grid>

                <div>
                    <Tooltip title='Edit profile picture'>
                        <IconButton onClick={handleOpenImageForm} id="editImageBtn"><EditIcon /></IconButton>
                    </Tooltip>
                    <img width={350} src={user?.imageUrl ? user.imageUrl : defaultImage} alt={user?.imageAlt} />
                </div>
            </section>

            <div>
                <DialogComponent
                    title="Are you sure you want to continue?"
                    text={<p>This action will delete you profile permanently <br /> without an option to restore it.</p>}
                    open={openDeleteAlert}
                    handleClose={closeDeleteAlert}
                    handleClick={onDeleteUser}
                    userId={id}
                    action="AGREE"
                />

                <DialogComponent
                    title="Change Profile Picture:"
                    open={openImageForm}
                    handleClose={handleCloseImageForm}
                    handleClick={editImage}
                    userId={id}
                    action="Change Image"
                >
                    <FormControlComponent marginValue="5px 15px" label={"Image Url"} placeHolder={"Image Url"} width={"50ch"} inputValue={imageUrl} onChange={(e) => setImageUrl(e.target.value)} helperText='' error={false} />

                    <FormControlComponent marginValue="5px 15px" label={"Image Alt"} placeHolder={"Image Alt"} width={"50ch"} inputValue={imageAlt} onChange={(e) => setImageAlt(e.target.value)} helperText='' error={false} />
                </DialogComponent>

                <Snackbar open={alert} autoHideDuration={2000} onClose={closeAlert} TransitionComponent={TransitionLeft}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        You profile is successfully deleted
                    </Alert>
                </Snackbar>
            </div>
        </>
    );
}

export default UserPage;