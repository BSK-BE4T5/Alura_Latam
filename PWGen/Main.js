//Gets the value of the slider
function updateLength(value) {
    document.getElementById("sliderValue").textContent = value;
}

function generatePassword() {
    //Sets a value for all the info in the GUI
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    //checks if the checkboxes are selected and if they are checked is added to the random set of characters to be used
    let charset = "";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*()_+{}[]|:;<>,.?/";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");

    //Provides feedback that the password was copied
    alert("Password copied to clipboard!");
}

// Initial password generation
generatePassword();
