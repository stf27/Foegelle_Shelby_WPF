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
//var hoursWorkedWeekly = prompt("How many hours do you plan on working a week?");
// Checks if user input was the correct type. If not, alert user and ask for input again.
//while (isNaN(hoursWorkedWeekly)) {
//    alert("Illegal Input Type!");
//    hoursWorkedWeekly = prompt("How many hours do you plan on working a week?");
//}


// Take target salary
// Now factor in taxes, insuance, Social Security, etc.
// A safe figure for the total cost of all these things is about 30%.
// So take target salary and multiply that by 30% to find the costs
var taxCosts = targetSalary * 0.3;
var totalSalary = +targetSalary + +taxCosts;

// There are a total of 2080 working hours in a year
var workingHours = 2080;
// But that doesn't include holidays (7 legal), vacation (we will assume 2 weeks), sick days (we will use 5)
var hoursCantWork = 7 * 8 + 10 * 8 + 5 * 8;
// This all comes out to 176 hours you are unable to work.
// So there is really only 1904 working hours in a year.
// That still leaves time you are not working (lunch, calls, playing, etc.).
// I will take 25% of working hours available off to compensate for that.
var hoursCanWork = (workingHours - hoursCantWork) - ((workingHours - hoursCantWork) * .25);

// Calculates the base hourly wage before overhead.
// I use floor to make a "pretty number" to show to clients.
var baseHourlyRate = Math.floor(totalSalary / hoursCanWork);

// For the sake of making things simpler on the user,
// I will assume the overhead will be about $30,000.
var overhead = 35000;
// With that, we need to the percentage of salary this overhead accounts for.
var percentOverhead = overhead / totalSalary;

var hourlyRateWithOverhead = (baseHourlyRate * percentOverhead) + baseHourlyRate;




console.log(taxCosts + " tax costs.");
console.log(totalSalary + " total salary.");
console.log(hoursCantWork + " hours cant work.");
console.log(hoursCanWork + " hours can work.");
console.log("$" + baseHourlyRate + " per hour.");
console.log(percentOverhead + " percent overhead.");
console.log(hourlyRateWithOverhead + " hourly rate with overhead.");