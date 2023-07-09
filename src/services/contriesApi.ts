const url = 'http://localhost:8080/countries'

export interface COUNTRIES_CODE {
    id?: string,
    name?: string,
    currency: string,
    phone: number,
    capital: string,
    code: string,
    code3: string,
    number: number
}

export async function getCountriesCode(): Promise<Array<COUNTRIES_CODE>> {
    const res = await fetch(url)
    return res.json()
}