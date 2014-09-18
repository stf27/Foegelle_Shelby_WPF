/**
 * Shelby Foegelle
 * 9/18/2014
 * Conditionals - Wacky
 */

// Calculates the percent chance a person has to find out how many licks it really does take to get to the center of a
// tootsie roll pop based off of the frequency the user eats sweets, their age, and their own level of self control.
alert("This program calculates the percent chance you have to find out how many licks it really does take to get to the center of a tootsie roll pop");

// Givens.
// How often the user eats sweets a day.
var sweetsEatenFrequency = prompt("On average, how many times a day do you eat sweets?");
while(isNaN(sweetsEatenFrequency)) {
    alert("Incorrect Input!");
    sweetsEatenFrequency = prompt("On average, how many times a day do you eat sweets?\nInput numbers only please.");
}
