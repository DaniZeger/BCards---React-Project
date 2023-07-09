export function defaultImageAlt(alt: string) {
    const imageAlt = 'User image'
    if (alt != '') {
        return alt
    }
    return imageAlt
}
export function defaultImageUrl(url: string) {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
    if (url != '') {
        return url
    }
    return imageUrl
}


export function formsRequireValidate(value: string,): boolean {
    if (!value) {
        return false
    }
    return true
}

export function formsPasswordValidate(password: string): boolean {
    if (password.length < 6 || password.length > 15) {
        return false
    }
    return true
}

export function formsLengthValidate(value: string): boolean {
    if (value.length < 2) {
        return false
    }
    return true
}

export function formsMailValidate(email: string): boolean {
    const emailRe = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/
    if (!emailRe.test(email)) {
        return false
    }

    return true
}


export function formsValidation(
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    city: string,
    street: string,
    houseNumber: string,
    country: string,
    password: string,
): boolean {

    if (!firstName ||
        !lastName ||
        !phone ||
        !email ||
        !city ||
        !street ||
        !houseNumber ||
        !country ||
        !password
    ) {
        return false
    }

    if (firstName.length < 2 || lastName.length < 2) {
        return false
    }
    if (password.length < 6 || password.length > 15) {
        return false
    }

    const emailRe = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/
    if (!emailRe.test(email)) {
        return false
    }

    return true
}


