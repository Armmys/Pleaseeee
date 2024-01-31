function isValidPassword(password) {
    if (!password) return false;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[@#$%^&*!]/.test(password);

    return password.length >= 8 && hasUpperCase && hasLowerCase && hasDigit && hasSpecial;
}

console.log(isValidPassword());
