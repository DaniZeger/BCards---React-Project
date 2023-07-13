import { CARDS } from "./cardsApi"

export interface FAV {
    _id?: string,
    userId?: string,
    cardId?: string
}
export interface USER_FAV {
    userId?: string,
    cardId?: CARDS
}

const url = 'http://localhost:8080/favorites'


export async function getUserCards(userId?: string): Promise<Array<USER_FAV>> {
    const res = await fetch(`${url}/${userId}`)
    return res.json()
}