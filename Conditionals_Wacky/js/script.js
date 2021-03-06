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
var startingChance = (sweetsEatenFrequency <= 1) ? 0.1 : 0.3;

// Adds or subtracts to the chance depending on the user's age.
var additionalChance = 0;
if(userAge <= 20) {
    additionalChance = -0.1;
}else if(userAge > 20 && userAge <= 45) {
    additionalChance = 0.05;
}else {
    additionalChance = 0.1;
}

// Creates a factor for if the user feels younger or older than they actually are.
var selfControlFactor = 0;
if(userSelfControl == "younger") {
    selfControlFactor = 0.5;
}
if(userSelfControl == "older") {
    selfControlFactor = 2;
}

// Formula for determining the chance that the user has to find out how many licks it takes to get to the center of a tootsie roll pop.
var finalChance = ((startingChance + additionalChance) * selfControlFactor) * 100;
// Sets decimal places to 2.
finalChance = finalChance.toFixed(2);

// Old testing outputs.
/**
console.log("Starting Chance: " + startingChance);
console.log("Additional Chance: " + additionalChance);
console.log("Self Control Factor: " + selfControlFactor);
console.log("Final Chance: " + finalChance);
**/

// Outputs the user's chance.
console.log("You have a " + finalChance + "% chance of finding out how many licks it takes to get to the center of a tootsie roll pop!")
