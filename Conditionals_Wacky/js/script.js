/**
 * Shelby Foegelle
 * 9/18/2014
 * Conditionals - Wacky
 */

// Calculates the percent chance a person has to find out how many licks it really does take to get to the center of a
// tootsie roll pop based off of the frequency the user eats sweets, their age, and their own level of self control.
alert("This program calculates the percent chance you have to find out how many licks it really does take to get to the center of a tootsie roll pop.");

// How often the user eats sweets a week.
var sweetsEatenFrequency = prompt("On average, how many times a week do you eat sweets?");
while(isNaN(sweetsEatenFrequency)) {
    alert("Incorrect Input!");
    sweetsEatenFrequency = prompt("On average, how many times a week do you eat sweets?\nInput numbers only please.");
}

// Gets the user's age.
var userAge = prompt("What is your age?");
while(isNaN(userAge)) {
    alert("Incorrect Input!");
    userAge = prompt("What is your age?\nInput numbers only please.");
}

// Checks if user feels younger or older than they actually are.
var userSelfControl = prompt("Do you feel younger or older than your actual age?\nAccepted values are 'younger' or 'older'.");
while(userSelfControl != "younger" && userSelfControl != "older") {
    alert("Incorrect Input!");
    userSelfControl = prompt("Do you feel younger or older than your actual age?\nAccepted values are 'younger' or 'older'.");
}

// Checks if the user eats sweets frequently. If the user doesn't eat many sweets, then their chance to get to the center is lower than if they eat sweets frequently.
var startingChance = (sweetsEatenFrequency <= 1) ? 0.1 : 0.4;

console.log("Starting Chance: " + startingChance);
