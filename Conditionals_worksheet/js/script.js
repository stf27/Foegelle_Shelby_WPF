/**
 * Shelby Foegelle
 * 9/18/2014
 * Conditionals Worksheet
 */

// Group 1: Expressions and Conditionals
// Celsius to Fahrenheit Converter

    // Givens
    var degree = 32;
    // Possible values are F or C. Capitalization matters!
    var unit = "F";

    // This variable will hold the converted temperature.
    var convertedDegree = 0;

    // If the original unit is in Fahrenheit, then convert it to Celsius.
    if(unit == "F") {
        // Converts degree in F to C.
        convertedDegree = (degree - 32) * (5/9);

        // Sets the amount of decimal places to 2.
        convertedDegree = convertedDegree.toFixed(2);

        // Outputs the converted temperature.
        console.log("The temperature is " + convertedDegree + " degrees Celsius.");
    }


    // If the original unit is in Celsius, then convert it to Fahrenheit.
    if(unit == "C") {
        // Converts degree in C to F.
        convertedDegree = (degree * (9/5)) + 32;

        // Sets the amount of decimal places to 2.
        convertedDegree = convertedDegree.toFixed(2);

        // Outputs the converted temperature.
        console.log("The temperature is " + convertedDegree + " degrees Fahrenheit.");
    }

// End Group 1.

// Group 2: Multiple Results
// Check The Login

    // Givens
    // Variables for user input.
    var username;
    var password;
    // The correct username and password.
    var correctUsername = "stf27";
    var correctPassword = "HelloWorld!";

    // Gets username from user and checks that it is an existing username.
    username = prompt("Please enter your username.\n(Correct username is stf27)");
    while(username != correctUsername) {
        alert("User not found. Try again.");
        username = prompt("Please enter your username.\n(Correct username is stf27)");
    }

    password = prompt("Please enter your password.\n(Correct password is HelloWorld!)");
    while(password != correctPassword) {
        alert("Password does not match our records.");
        password = prompt("Please enter your password.\n(Correct password is HelloWorld!)");
    }

    console.log("Welcome, " + username + "!");

// End Group 2.

// Group 3: Multiple Conditions
// Movie Ticket Price

    // Givens
    var timeOfMovie = 9;
    var AMOrPM = "PM";
    var ageOfCustomer = 22;
    var ticketPrice = 12;

    // Checks if the movie is matinee.
    if(AMOrPM == "PM") {
        if(timeOfMovie >= 3 && timeOfMovie <=5) {
            ticketPrice = 7;
        }
    }

    // Checks if the customer is a senior citizen.
    if(ageOfCustomer >= 55) {
        ticketPrice = 7;
    }

    // Checks if the customer is a child.
    if(ageOfCustomer < 10) {
        ticketPrice = 7;
    }

    // Sets the ticked price to have 2 decimals.
    ticketPrice = ticketPrice.toFixed(2);

    // Output the ticked price for the movie based on the time of the movie and the age of the customer.
    console.log("The ticket price is $" + ticketPrice + ".");

// End Group 3.