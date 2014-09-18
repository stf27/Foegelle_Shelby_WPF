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
        deviceWattageInput = prompt("Find the wattage of each device you want to calculate the costs to run it in a month.\nPLEASE ENTER EACH VALUE INTO THE BOX SEPARATED BY A SPACE AND ONLY ENTER NUMBERS.");
        deviceWattageArray = deviceWattageInput.split(' ').map(Number);
    }
}

// The amount of time each device runs in a month.
var deviceHoursRunningInput = prompt("Enter how many hours each device is on per month.\nBe sure that you enter each value in the same order as you did when entering values for the wattage each device uses.\nPlease enter each value into the box separated by a space.");
// Removes all unwanted characters from the array and converts each element in the array into a number.
var deviceHoursRunningArray = deviceHoursRunningInput.split(' ').map(Number);

// Checks if each element of deviceHoursRunningArray is a number. If not, then ask for input again.
for(arrayIncrement = 0; arrayIncrement < deviceHoursRunningArray.length; ++arrayIncrement) {
    if(isNaN(deviceHoursRunningArray[arrayIncrement])) {
        alert("Incorrect Input!");
        // Clears the array.
        deviceHoursRunningArray.length = 0;
        deviceHoursRunningInput = prompt("Enter how many hours each device is on per month.\nBe sure that you enter each value in the same order as you did when entering values for the wattage each device uses.\nPLEASE ENTER EACH VALUE INTO THE BOX SEPARATED BY A SPACE AND ONLY ENTER NUMBERS.");
        deviceHoursRunningArray = deviceHoursRunningInput.split(' ').map(Number);
    }
}

// Throws error if the user did not input same amount of records in each array.
if(deviceWattageArray.length != deviceHoursRunningArray.length) {
    //alert("Array lengths do not match! Please start over.")
    throw new Error("Array lengths do not match! Please start over.");
}

// Calculates the kiloWatt-hour for each element in the arrays.
var kiloWattPerHourArray = [];
for(arrayIncrement = 0; arrayIncrement < deviceWattageArray.length; ++arrayIncrement) {
    kiloWattPerHourArray[arrayIncrement] = (deviceWattageArray[arrayIncrement] / 1000) * deviceHoursRunningArray[arrayIncrement];
}

// Value used to calculate the costs of running the users devices each month.
var costPerKWH = 0.11;
alert("We will use the U.S. Energy Information Administration June 2014 average of $0.11 per kWh to calculate the cost of running your devices every month.");

// Calculates the cost per kWh for each device the user input.
var costPerKWHArray = [];
for(arrayIncrement = 0; arrayIncrement < deviceWattageArray.length; ++arrayIncrement) {
    costPerKWHArray[arrayIncrement] = kiloWattPerHourArray[arrayIncrement] * costPerKWH;
}

// Calls the function reduce to add every element in the cost per kWh array to find the final cost per month for the user to run their devices.
var totalCostPerMonth = costPerKWHArray.reduce(function(a, b) {
   return a + b;
});

// Sets the total decimal places to 2 in order to make the output appear as currency.
totalCostPerMonth = totalCostPerMonth.toFixed(2);

// Old outputs. These were used to test that each array was working properly.
/**
console.log("Array Wattage: " + deviceWattageArray);
console.log(typeof deviceWattageArray[0]);
console.log("Array Hours: " + deviceHoursRunningArray);
console.log(typeof deviceHoursRunningArray[0]);
console.log("Array kWh: " + kiloWattPerHourArray);
console.log(typeof kiloWattPerHourArray[0]);
console.log("Array Cost Per kWh: " + costPerKWHArray);
console.log(typeof costPerKWHArray[0]);
console.log("Total Cost Per Month: " + totalCostPerMonth);
**/

// Final output. Tells the user how much it costs them to run all of their devices every month.
console.log("It costs you $" + totalCostPerMonth + " every month to run these devices for the amount of hours you run them.");
