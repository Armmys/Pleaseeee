function isValidPassword(password) {
    if (password === null || password === undefined) return false
    const setOfPassword = [...password]
    return setOfPassword.length >= 8 && upperCaseCheck(setOfPassword) && lowerCaseCheck(setOfPassword) && digitCheck(setOfPassword) && specialCheck(setOfPassword)
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const setOfAlphabet = [...alphabet]
const setOfSpecial = ['@', '#', '$', '%', '^', '&', '\*', '!']

function upperCaseCheck(setOfPassword) {
    for (const charPassword of setOfPassword) {
        for (const alphabet of setOfAlphabet) {
            if (charPassword === alphabet.toUpperCase()) return true
        }
    }
    return false
}

function lowerCaseCheck(setOfPassword) {
    for (const charPassword of setOfPassword) {
        for (const alphabet of setOfAlphabet) {
            if (charPassword === alphabet) return true
        }
    }
    return false
}

function digitCheck(setOfPassword) {
    for (const charPassword of setOfPassword) {
        for (let i = 0; i < 10; i++) {
            if (charPassword === `${i}`) return true
        }
    }
    return false
}

function specialCheck(setOfPassword) {
    for (const charPassword of setOfPassword) {
        for (const special of setOfSpecial) {
            if (charPassword === special) return true
        }
    }
    return false
}

console.log(isValidPassword())