export function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) return true;
    else return false;
}

export function validatePassword(input) {

    if (input.length >= 8) return true;
    else return false;
}
