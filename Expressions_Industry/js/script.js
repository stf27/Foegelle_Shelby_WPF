/**
 * Created by Shelby Foegelle on 9/10/2014.
 * Expressions - Industry
 */

// This calculator calculates how much you should charge a client hourly for freelance web design based on salary the user wishes to make,
// hours worked weekly, and overhead (for things like an office, computers, etc.).

// Gets input value for weekly hours worked
var targetSalary = prompt("How much do you want to make in a year?");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while (isNaN(targetSalary)) {
    alert("Illegal Input Type!");
    targetSalary = prompt("How much do you want to make in a year?");
}

// Gets input value for weekly hours worked
var hoursWorkedWeekly = prompt("How many hours do you plan on working a week?");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while (isNaN(hoursWorkedWeekly)) {
    alert("Illegal Input Type!");
    hoursWorkedWeekly = prompt("How many hours do you plan on working a week?");
}


// Take target salary
// Now factor in taxes, insuance, Social Security, etc.
// A safe figure for the total cost of all these things is about 30%.
// So take target salary and multiply that by 30% to find the costs
var taxCosts = targetSalary * 0.3;

targetSalary += taxCosts;

console.log(taxCosts + " tax costs.")
console.log(targetSalary + " total salary.");