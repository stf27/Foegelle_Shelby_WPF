/**
 * Shelby Foegelle
 * 9/18/2014
 * Conditionals - Personal
 */

// Calculate how much it costs on your electric bill to run any device in your household.

// The wattage a device uses.
var deviceWattageInput = prompt("Find the wattage of each device you want to calculate the costs to run it in a month.\nPlease enter each value into the box separated by a space.");
// Removes all unwanted characters from the array and converts each element in the array into a number.
var deviceWattageArray = deviceWattageInput.split(' ').map(Number);

// Checks if each element of deviceWattageArray is a number. If not, then ask for input again.
var arrayIncrement;
for(arrayIncrement = 0; arrayIncrement < deviceWattageArray.length; ++arrayIncrement) {
    if(isNaN(deviceWattageArray[arrayIncrement])) {
        alert("Incorrect Input!");
        // Clears the array.
        deviceWattageArray.length = 0;
        deviceWattageInput = prompt("Find the wattage of each device you want to calculate the costs to run it in a month.\nPLEASE ENTER EACH VALUE INTO THE BOX SEPARATED BY A SPACE.");
        deviceWattageArray = deviceWattageInput.split(' ').map(Number);
    }
}



console.log("Array: " + deviceWattageArray[0]);
console.log(typeof deviceWattageArray[0]);