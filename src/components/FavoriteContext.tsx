import React, { ReactNode, createContext, useState } from 'react';
import { FAV, } from '../services/favorietsApi';
import { getToken } from '../auth/TokenManeger';

interface FavoriteContextProps {
    favorites: string[];
    toggleFavorite: (userId: string, cardId: string) => void;
    saveFav: (userId: string, cardId: string) => void;
    removeFav: (userId: string, cardId: string) => void;
}

export const FavoriteContext = createContext<FavoriteContextProps>({
    favorites: [],
    toggleFavorite: () => { },
    saveFav: () => { },
    removeFav: () => { },
});

interface FavoriteProviderProps {
    children: ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {

    const url = 'http://localhost:8080/favorites'

    const [favorites, setFavorites] = useState<string[]>([]);

    async function saveFav(userId?: string, cardId?: string): Promise<FAV> {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': getToken()
            },
            body: JSON.stringify({ userId, cardId })
        })
        return res.json()
    }

    async function removeFav(userId?: string, cardId?: string): Promise<FAV> {
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': getToken()
            },
            body: JSON.stringify({ userId, cardId })
        })
        return res.json()
    }

    const toggleFavorite = (userId: string, cardId: string) => {
        const isFavorite = favorites.includes(cardId);

        if (isFavorite) {
            setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== cardId));
            removeFav(userId, cardId);
        } else {
            setFavorites((prevFavorites) => [...prevFavorites, cardId]);
            saveFav(userId, cardId)
        }
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite, saveFav, removeFav }}>
            {children}
        </FavoriteContext.Provider>
    );
};
