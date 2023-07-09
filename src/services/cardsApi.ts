import { getToken } from "../auth/TokenManeger"

const url = 'http://localhost:8080/cards'

export interface CARDS {
    _id?: string,
    title: string,
    subtitle?: string
    description?: string
    phone?: string
    email?: string
    website?: string
    imageUrl?: string
    imageAlt?: string
    state?: string
    country?: string
    city?: string
    street?: string
    houseNumber?: string
    zipCode?: number | string
    userId?: string
    created_at?: Date
}

export async function getCards(): Promise<Array<CARDS>> {
    const res = await fetch(url)
    return res.json()
}

export async function getUserCards(userId?: string): Promise<Array<CARDS>> {
    const res = await fetch(`${url}/user-cards/${userId}`)
    return res.json()
}

export async function addCards(card: CARDS): Promise<CARDS> {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': getToken()
        },
        body: JSON.stringify(card)
    })
    return res.json()
}

export async function deleteCards(_id: string): Promise<CARDS> {
    const res = await fetch(`${url}/${_id}`, {
        method: 'DELETE',
        headers: {
            'x-auth-token': getToken()
        }
    })
    return res.json()
}

export async function getCardById(id: string): Promise<CARDS> {
    const res = await fetch(`${url}/${id}`, {
        method: 'GET',
        headers: {
            'x-auth-token': getToken()
        }
    })
    return res.json()
}

export async function editCard(_id: string, card: CARDS): Promise<CARDS> {
    const res = await fetch(`${url}/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': getToken()
        },
        body: JSON.stringify(card)
    })
    return res.json()
}