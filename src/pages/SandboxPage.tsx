import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar, ButtonGroup, IconButton, Tooltip, FormControl, MenuItem, Select, InputLabel, OutlinedInput, Snackbar, Alert, Slide, SlideProps } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { USER, deleteUser, editUser, getUsers, userType } from "../services/usersApi";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DialogComponent from "../components/DialogComponent";
import SearchInput from "../components/Forms/SearchInput";

function SandboxPage() {
    const [alert, setAlert] = useState(false)
    const [usersList, setUsersList] = useState<Array<USER>>([])
    const [filteredData, setFilteredData] = useState<Array<USER>>([])
    const [selectedUserType, setSelectedUserType] = useState(3)
    const [selectedId, setSelectedId] = useState('')
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
    const [deletedUserId, setDeletedUserId] = useState('')

    function closeAlert() {
        setAlert(false)
    }

    function TransitionLeft(props: JSX.IntrinsicAttributes & SlideProps) {
        return <Slide {...props} direction="right" />;
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

    function handleClick(id: string | undefined) {
        if (!id) return
        setSelectedId(id)
        console.log(selectedId);
    }

    function handleEdit(id: string, user: USER) {
        const newUser = {
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email,
            state: user.state,
            country: user.country,
            city: user.city,
            street: user.street,
            houseNumber: user.houseNumber,
            zipCode: user.zipCode,
            userType: selectedUserType
        }
        if (!id) return
        editUser(id, newUser)
            .then(() => {
                getUsers()
                    .then(json => {
                        setUsersList(json)
                        setFilteredData(json)
                        setSelectedId('')
                        setAlert(true)
                    })
            })

    }


    function handleCloseEdit() {
        setSelectedId('')
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
        getUsers()
            .then(json => {
                setUsersList(json)
                setFilteredData(json)
            })
    }, [])

    const handleClickOpenAlert = (id?: string) => {
        if (!id) return
        setDeletedUserId(id)
        setOpenDeleteAlert(true);
    };
    const closeDeleteAlert = () => {
        setOpenDeleteAlert(false);
    };

    function onDeleteUser(id?: string) {
        if (!id) return
        deleteUser(id)
            .then(() => {
                setOpenDeleteAlert(false);
                setAlert(true)
                getUsers()
                    .then(json => {
                        setUsersList(json)
                        setFilteredData(json)
                    })

            })
            .catch((error) => {
                console.error("Error deleting card:", error);
            });
    }

    return (
        <>
            <Header title="Sandbox" subtitle="Manage you app's users" />
            <div style={{ display: 'flex' }}>
                <SearchInput filterKey='firstName' data={usersList} setFilteredData={setFilteredData} />
            </div>
            <TableContainer sx={{ p: 2, maxWidth: '95%', m: 'auto' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>IMG</TableCell>
                            <TableCell>Full Name</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="left">UserType</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((user) => (
                            <TableRow
                                key={user._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right"><Avatar alt={user.imageAlt} src={user.imageUrl} /></TableCell>
                                <TableCell component="th" scope="row">
                                    {`${user.firstName}  ${user.middleName}  ${user.lastName}`}
                                </TableCell>
                                <TableCell align="left">{user.phone}</TableCell>
                                <TableCell align="left">{user.email}</TableCell>
                                <TableCell align="left">{`${user?.houseNumber} ${user?.street},  ${user?.city} ${user?.state},  ${user?.country} ${user?.zipCode}`}</TableCell>
                                {
                                    user._id !== selectedId ? (
                                        <TableCell style={{ color: `${setUserColor(user?.userType)}` }} align="left">{getUserType(user?.userType) + " user"}</TableCell>

                                    ) : (
                                        <TableCell align="left">
                                            <FormControl sx={{ width: '16ch' }}>
                                                <InputLabel id="demo-multiple-name-label">User Type</InputLabel>
                                                <Select
                                                    labelId="demo-multiple-name-label"
                                                    id="demo-multiple-name"
                                                    value={selectedUserType}
                                                    onChange={(e) => setSelectedUserType(+e.target.value)}
                                                    input={<OutlinedInput label="Country*" />}
                                                    size="small"
                                                >
                                                    {userType.map((t) => (
                                                        <MenuItem
                                                            key={t.id}
                                                            value={t.id}
                                                        >
                                                            {t.type}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                    )
                                }
                                <TableCell align="center">
                                    <ButtonGroup>
                                        {
                                            user._id !== selectedId ? (
                                                <>
                                                    <Tooltip title='Edit user type'>
                                                        <IconButton onClick={() => handleClick(user._id)} ><EditIcon /></IconButton>
                                                    </Tooltip>
                                                    <IconButton onClick={() => handleClickOpenAlert(user._id)} disabled={user?.userType ? user.userType == 1 : false} color='error'><DeleteIcon /></IconButton>
                                                </>
                                            ) : (
                                                <>
                                                    <Tooltip title='Save Changes'>
                                                        <IconButton color="success" onClick={() => {
                                                            if (!user._id) return
                                                            handleEdit(user._id, user)
                                                        }} ><CheckIcon /></IconButton>
                                                    </Tooltip>
                                                    <Tooltip title='Cancel Changes'>
                                                        <IconButton color="error" onClick={handleCloseEdit} ><CloseIcon /></IconButton>
                                                    </Tooltip>
                                                </>
                                            )
                                        }
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
            <Snackbar open={alert} autoHideDuration={2000} onClose={closeAlert} TransitionComponent={TransitionLeft}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Data have been successfully updated
                </Alert>
            </Snackbar>
            <DialogComponent
                title="Are you sure you want to continue?"
                text={<p>This action will delete you profile permanently <br /> without an option to restore it.</p>}
                open={openDeleteAlert}
                handleClose={closeDeleteAlert}
                handleClick={() => onDeleteUser(deletedUserId)}
                userId={deletedUserId}
                action="AGREE"
            />

        </>
    );
}

export default SandboxPage;