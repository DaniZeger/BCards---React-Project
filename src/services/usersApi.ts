import { getToken } from "../auth/TokenManeger"

export interface TYPES {
    id: number,
    type: string
}

export const userType = [
    {
        id: 1,
        type: 'ADMIN'
    },
    {
        id: 2,
        type: 'BUSINESS'
    },
    {
        id: 3,
        type: 'REGULAR'
    }
]

export interface USER {
    _id?: string,
    firstName?: string,
    middleName?: string,
    lastName?: string,
    phone?: string,
    email: string,
    city?: string,
    street?: string,
    houseNumber?: number,
    country?: string,
    state?: string,
    imageUrl?: string,
    imageAlt?: string,
    userType?: number,
    zipCode?: number,
    password?: string,
    token?: string,
}

const url = 'http://localhost:8080/users/'

export async function signUp(user: USER): Promise<USER> {
    const res = await fetch(`${url}signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (res.status === 400) {
        throw new Error('User already registered.')
    }
    return res.json()
}
export async function logIn(user: USER): Promise<USER> {
    const res = await fetch(`${url}login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (res.status >= 400) {
        throw new Error('Email or password does not exist')
    }
    return res.json()
}

export async function getUserById(_id: string): Promise<USER> {
    const res = await fetch(`${url}${_id}`, {
        method: 'GET',
        headers: {
            'x-auth-token': getToken()
        }
    })
    return res.json()
}

export async function deleteUser(_id: string): Promise<USER> {
    const res = await fetch(`${url}/${_id}`, {
        method: 'DELETE',
        headers: {
            'x-auth-token': getToken()
        }
    })
    return res.json()
}

export async function editUserImage(_id: string, imageUrl: string, imageAlt: string): Promise<USER> {
    const res = await fetch(`${url}update-image/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': getToken()
        },
        body: JSON.stringify({ imageUrl, imageAlt })
    })
    return res.json()
}

export async function editUser(_id: string, user: USER): Promise<USER> {
    const res = await fetch(`${url}/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': getToken()
        },
        body: JSON.stringify(user)
    })
    return res.json()
}

export async function getUsers(): Promise<Array<USER>> {
    const res = await fetch(url)
    return res.json()
}

