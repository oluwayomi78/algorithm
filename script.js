function processAddress() {
    if (address.value == "") {
        alert("input cannot be empty");
    }
    else {
        var letter = (address.value).toLowerCase();
        newAddress.innerHTML = letter
    }
}
function processTitles() {
    var userInput = list.value.toLowerCase()
    var bookList = ["israel", "tilux", "boluwatife"]
    if (userInput == '') {
        alert("Pls input book title");
    }
    else if (bookList.includes(userInput)) {
        alert("Duplicate found");
    }
    else {
        alert("no book title");
    }
}

function adjustSpace() {
    if (text.value == "") {
        alert("Please enter a text");
    }
    else {
        var words = text.value.trim(" ");
        adjustedText.innerHTML = words;
    }
}

function correctPassword() {
    var password = document.getElementById('password').value;
    var validateStataus = document.getElementById('confirmPassword');

    if (password.length > 8) {
        validateStataus.innerHTML = "Password must be at least 8 characters long";
    }
    else {
        alert('Congratualation')
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
    }
    else {
        console.log('Congratualation🎉🎉🎉🎉🎉')
    }
}

function checkCart() {
    var even = number.value

    if (even % 2 == 0) {
        yourDisount.innerHTML = "you get a discount!";
    }
    else {
        yourDisount.innerHTML = "not a discount!";
    }
}


function categoriseTemperature() {
    var temperature1 = temperature.value
    var cold = 19;
    var warm = 28;
    var hot = 29;
    if (temperature1 < cold) {
        convertedTemperature.innerHTML = "Cold";
    }
    else if (temperature1 < warm) {
        convertedTemperature.innerHTML = "warm";
    }
    else if (temperature1 >= hot && temperature1 >= cold && temperature1 >= warm && temperature1) {
        convertedTemperature.innerHTML = "hot";
    }
}

function calculateLuggage() {
    var weight1 = weight.value
    var Underweight = 20;
    var Allowed = 30;
    var Overweight = 30;
    if (weight1 < Underweight) {
        luggageStatus.innerHTML = "Underweight";
    }
    else if (weight1 < Allowed) {
        luggageStatus.innerHTML = "Allowed";
    }
    else if (weight1 > Overweight) {
        luggageStatus.innerHTML = "Overweight";
    }
}