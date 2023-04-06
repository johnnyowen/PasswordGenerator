
    // Function to generate password using chosen length and criteria from concatenated string
    for (var i = 0; i < passLength; i++) {
        randomPassword += chosenCriteria.charAt(Math.floor(Math.random() * chosenCriteria.length));
    }
    password.value = randomPassword;
}