import React, { createContext, useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { teal, indigo, cyan, amber, deepOrange, grey } from '@mui/material/colors';
import { CssBaseline, PaletteMode } from '@mui/material';
import { useTheme } from '@emotion/react';
import { light } from '@mui/material/styles/createPalette';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import SignUpPage from './auth/signUpPage';
import LogInPage from './auth/logInPage';
import { USER } from './services/usersApi';
import AboutPage from './pages/AboutPage';
import MyCardsPage from './pages/MyCardsPage';
import AddCardPage from './pages/AddCardPage';
import { CARDS, getCards, getUserCards } from './services/cardsApi';
import EditCardPage from './pages/EditCardPage';
import FavCardsPage from './pages/FavCardsPage';
import CardPag from './pages/CardPage';
import { LoadScript } from '@react-google-maps/api';
import { USER_FAV } from './services/favorietsApi';
import { FavoriteProvider } from './components/FavoriteContext';
import UserPage from './pages/UserPage';
import EditUserPage from './pages/EditeUserPage';
import SandboxPage from './pages/SandboxPage';
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...teal,
      ...(mode === 'dark' && {
        main: '#282C34',
      }),
    },
    ...(mode === 'dark' && {
      mode,
      background: {
        default: '#282C34',
        paper: '#282C34',
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
          primary: grey[900],
          secondary: grey[800],
        }
        : {
          primary: '#4dd0e1',
          secondary: cyan[50],
        }),
    },
  },
});

interface CONTEXT {
  user: USER | null,
  setUser: Function
}

export const userContext = createContext<CONTEXT | null>(null)

function App() {
  const theme = useTheme()
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const modeTheme = createTheme(getDesignTokens(mode));
  const [user, setUser] = useState<USER | null>(null)



  function handleMode() {
    const toggleMode = mode === 'dark' ? 'light' : 'dark'
    setMode(toggleMode)
  }

  return (
    <>
      <FavoriteProvider>
        <LoadScript googleMapsApiKey={'AIzaSyAkq5m2UkIwTUXTZe4pZqtxKYtHz0l3zs4'}>
          <userContext.Provider value={{ user, setUser }}>
            <ThemeProvider theme={modeTheme}>
              <CssBaseline />
              <Navbar mode={handleMode}>
                {
                  mode === 'light' &&
                  <Brightness2Icon />
                }
                {
                  mode === 'dark' &&
                  <Brightness7Icon />
                }
              </Navbar>
              <div style={{ paddingBottom: '5.5rem' }}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/fav-cards" element={<FavCardsPage />} />
                  <Route path="card/:id" element={<CardPag />} />
                  <Route path="my-cards" element={<MyCardsPage />} />
                  <Route path="my-cards/add-card" element={<AddCardPage />} />
                  <Route path="edit/:id" element={<EditCardPage />} />
                  <Route path="sign-up" element={<SignUpPage />} />
                  <Route path="log-in" element={<LogInPage />} />
                  <Route path="user-page/:id" element={<UserPage />} />
                  <Route path="edit-user/:id" element={<EditUserPage />} />
                  <Route path="sandbox" element={<SandboxPage />} />
                </Routes>
              </div>

              <Footer />
            </ThemeProvider>
          </userContext.Provider>
        </LoadScript>
      </FavoriteProvider>
    </>
  );
}

export default App;
