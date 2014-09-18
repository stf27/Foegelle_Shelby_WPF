/**
 * Shelby Foegelle
 * 9/18/2014
 * Conditionals - Personal
 */

// Calculate how much it costs on your electric bill to run any device in your household.

// The wattage a device uses.
var deviceWattageInput = prompt("Find the wattage of each device you want to calculate the costs to run it in a month.\nPlease enter each value into the box separated by a space.");

// Removes all unwanted characters from the array.
var deviceWattageArray = deviceWattageInput.split(' ');

console.log("Array: " + deviceWattageArray[0]);
