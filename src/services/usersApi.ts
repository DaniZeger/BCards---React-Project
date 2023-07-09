export type UserType = 1 | 2 | 3

export enum UserTypeEnum {
    ADMIN = 1,
    BUSINESS = 2,
    REGULAR = 3
}

export interface USER {
    id?: string,
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
    password: string,
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
