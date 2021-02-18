var genBtn = document.getElementById("createPassword");
var copyBtn = document.getElementById("copyPassword");
var lower = document.getElementById("lower");
var upper = document.getElementById("upper");
var numbers = document.getElementById("numbers");
var special = document.getElementById("special");
var slider = document.getElementById("slider");
var password = "";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChars = "0123456789";
var specialChars = "!@#$%^&*()_+=-{}|[]:;'<>?,./";
var possibleChars = "";
var newPassword = document.getElementById("generatedPassword")
var genPassword = "";


function getCharChoice() {
    if (possibleChars !== "") {
        possibleChars = "";
    }
    if (lower.checked === true) {
        possibleChars += lowerChars;
        //console.log(possibleChars)
    };
    if (upper.checked === true) {
        possibleChars += upperChars;
        //console.log(possibleChars)
    };
    if (numbers.checked === true) {
        possibleChars += numChars;
        console.log(possibleChars)
    };
    if (special.checked === true) {
        possibleChars += specialChars;
        //console.log(possibleChars)
    };
    if (possibleChars === "") {
        //console.log("no characters selected")
    }
    console.log("completed getcharchoice function");
    return possibleChars;
}

function generatePassword(chars, slider) {
    var passwordLength = slider;

    for (i = 0; i < passwordLength; i++) {
        genPassword += chars[Math.floor(Math.random() * chars.length)];
        console.log(genPassword);
    }
    console.log("completed for loop")
    return genPassword;
}
genBtn.addEventListener("click", function () {

    genPassword = "";
    getCharChoice();
    console.log("completed button click function");

    generatePassword(possibleChars, slider.value);
    console.log("completed gernerate password function");
    console.log(genPassword);

    newPassword.textContent = genPassword;

})

copyBtn.addEventListener("click", function () {
    newPassword.select();
    document.execCommand("copy");
})
function outputUpdate(vol) {
	document.querySelector('#currentCharCount').value = vol;
}

