import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { styled, alpha } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { userContext } from '../App';
import { NavLink } from 'react-router-dom';

export interface modeProps {
    mode: Function,
    children: React.ReactNode
}


function Navbar({ mode, children }: modeProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')
    const context = useContext(userContext)
    const userType = context?.user?.userType

    function handleLogOut() {
        context?.setUser(null)
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function handleClick() {
        mode(themeMode)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h3"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/'>BCards</NavLink>

                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink style={{ margin: '1%', textDecoration: 'none', color: 'black' }} to="/about">ABOUT</NavLink>
                            </MenuItem>
                            {
                                context?.user &&
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink style={{ margin: '1%', textDecoration: 'none', color: 'black' }} to="/fav-cards">FAV CARDS</NavLink>
                                </MenuItem>
                            }
                            {
                                userType && userType < 3 &&
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink style={{ margin: '1%', textDecoration: 'none', color: 'black' }} to='/my-cards' >MY CARDS</NavLink>
                                </MenuItem>
                            }

                            {
                                userType === 1 &&
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink style={{ margin: '1%', textDecoration: 'none', color: 'black' }} to='/sandbox'>SANDBOX</NavLink>
                                </MenuItem>
                            }
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Button variant='text' href='/sign-up'>SIGN UP</Button>
                            </MenuItem>
                            {
                                !context?.user &&
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Button variant='text' href='/log-in'>LOG IN</Button>
                                </MenuItem>
                            }
                            {
                                context?.user &&
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Button onClick={handleLogOut} variant='text' href='/'>LOG OUT</Button>
                                </MenuItem>
                            }

                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BCards
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <NavLink onClick={handleCloseNavMenu} style={{ margin: '1%', textDecoration: 'none', color: 'white' }} to='/about' >ABOUT</NavLink>

                        {
                            context?.user &&
                            <NavLink onClick={handleCloseNavMenu} style={{ margin: '1%', textDecoration: 'none', color: 'white' }} to='/fav-cards' >FAV CARDS</NavLink>


                        }

                        {
                            userType && userType < 3 &&
                            <NavLink onClick={handleCloseNavMenu} style={{ margin: '1%', textDecoration: 'none', color: 'white' }} to='/my-cards' >MY CARDS</NavLink>
                        }


                        {
                            userType === 1 &&
                            <NavLink onClick={handleCloseNavMenu} style={{ margin: '1%', textDecoration: 'none', color: 'white' }} to='/sandbox' >SANDBOX</NavLink>
                        }


                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <IconButton onClick={handleClick} aria-label="delete">
                            {children}
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 0, mx: 3, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            href="/sign-up"
                        >
                            SIGN UP
                        </Button>
                        {
                            !context?.user &&
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href="/log-in"
                            >
                                LOG IN
                            </Button>
                        }
                        {
                            context?.user &&
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href="/"
                            >
                                LOG OUT
                            </Button>
                        }
                    </Box>
                    {
                        context?.user &&
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="John Dho">
                                <Avatar alt={context.user.imageAlt} src={context.user.imageUrl} />
                            </Tooltip>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;