// Random Password Generator

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = [];

    if (includeLowercase) {
        allowedChars += lowercaseChars;
        password.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
    }

    if (includeUppercase) {
        allowedChars += uppercaseChars;
        password.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
    }

    if (includeNumbers) {
        allowedChars += numberChars;
        password.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
    }

    if (includeSymbols) {
        allowedChars += symbolChars;
        password.push(symbolChars[Math.floor(Math.random() * symbolChars.length)]);
    }

    if (length <= 0) return "Password length must be at least 1";
    if (allowedChars.length === 0) return "Select at least one character type";

    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password.push(allowedChars[randomIndex]);
    }

    return password.sort(() => Math.random() - 0.5).join("");
}


// DOM Interaction
document.getElementById("generateBtn").addEventListener("click", function () {

    const length = parseInt(document.getElementById("length").value);
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    document.getElementById("result").value = password;
});


// Copy button
document.getElementById("copyBtn").addEventListener("click", function () {
    const result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    alert("Password Copied!");
});