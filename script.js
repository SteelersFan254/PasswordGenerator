var genBtn = document.getElementById("createPassword");
var lower = document.getElementById("lower");

genBtn.addEventListener("click", function () {
    if (lower.checked === true) {
        console.log("lower")
    } else {
        console.log("not owrking")
    }
})