// Assignment Code
// Declaring global variables using query selector
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Variables for all character sets
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "`~!@#$%^&*()-_=+[]{}\|;:',.<>/? ";
var chosenCriteria = "";

// Event listener for generate button 
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

    // Resets page variables so generator can be reused without refreshing  
    password.value === "";
    var randomPassword = "";

    // Prompts for user to decide password qualifications
    var lowercaseChoice = confirm("Will your password contain lowercase letters?");
    var uppercaseChoice = confirm("Will your password contain uppercase letters?");
    var numbersChoice = confirm("Will your password contain numbers?");
    var specialChoice = confirm("Will your password contain special characters?");
    var passLength = prompt("Choose one positive whole integer between and including 8 and 128 for your password length");

    // Varifies the number is between 8 and 128
    if (passLength < 8 || length > 128) {
        alert("Your password length must contain be a positive whole integer between and including 8 and 128, please input again");
        var passLength = prompt("Choose one positive whole integer between and including 8 and 128 for your password length");
    }

    // Forces user to meet at least one criteria
    else if (lowercase === false && uppercase === false && numbers === false && special === false) {
        alert("Please select OK for at least one password criteria");
        var lowercaseChoice = confirm("Will your password contain lowercase letters?");
        var uppercaseChoice = confirm("Will your password contain uppercase letters?");
        var numbersChoice = confirm("Will your password contain numbers?");
        var specialChoice = confirm("Will your password contain special characters?");
    }

    // If statement to concatenate password criteria into one variable
    if (lowercaseChoice) {
        chosenCriteria += lowercase;
    }
    if (uppercaseChoice) {
        chosenCriteria += uppercase;
    }
    if (numbersChoice) {
        chosenCriteria += numbers;
    }
    if (specialChoice) {
        chosenCriteria += special;
    }

    // Function to generate password using chosen length and criteria from concatenated string
    for (var i = 0; i < passLength; i++) {
        randomPassword += chosenCriteria.charAt(Math.floor(Math.random() * chosenCriteria.length));
    }
    password.value = randomPassword;
}