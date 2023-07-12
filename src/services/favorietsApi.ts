import { getToken } from "../auth/TokenManeger"
import { CARDS } from "./cardsApi"

export interface FAV {
    userId?: string,
    cardId?: string
}
export interface USER_FAV {
    userId?: string,
    cardId?: CARDS
}

const url = 'http://localhost:8080/favorites'

export async function saveFav(favCard: FAV): Promise<FAV> {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': getToken()
        },
        body: JSON.stringify(favCard)
    })
    return res.json()
}

export async function removeFav(favCard: FAV): Promise<FAV> {
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': getToken()
        },
        body: JSON.stringify(favCard)
    })
    return res.json()
}

export async function getUserCards(userId?: string): Promise<Array<USER_FAV>> {
    const res = await fetch(`${url}/${userId}`)
    return res.json()
}