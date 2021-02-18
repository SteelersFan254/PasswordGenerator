var genBtn = document.getElementById("createPassword");
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

function getCharChoice() {
    if (possibleChars !== "") {
        possibleChars = "";
    }
    if (lower.checked === true) {
        possibleChars += lowerChars;
        console.log(possibleChars)
    };
    if (upper.checked === true) {
        possibleChars += upperChars;
        console.log(possibleChars)
    };
    if (numbers.checked === true) {
        possibleChars += numChars;
        console.log(possibleChars)
    };
    if (special.checked === true) {
        possibleChars += specialChars;
        console.log(possibleChars)
    };
    if (possibleChars === "") {
        console.log("no characters selected")
    }
    return possibleChars;
}

function generatePassword(chars) {
    var genPassword = "";
}
genBtn.addEventListener("click", function () {
    getCharChoice();
})
console.log("is working " + possibleChars);

function outputUpdate(vol) {
	document.querySelector('#currentCharCount').value = vol;
}

