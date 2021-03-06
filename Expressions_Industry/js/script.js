/**
 * Created by Shelby Foegelle on 9/10/2014.
 * Expressions - Industry
 */

// This calculator calculates how much you should charge a client hourly for freelance web design based on salary the user wishes to make,
    // hours worked weekly, overhead (for things like an office, computers, etc.), and the percent profit they wish to make.

// Gets input value for weekly hours worked
var targetSalary = prompt("How much do you want to make in a year?\n(This does not include taxes. The calculations add them for you later on.)");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while (isNaN(targetSalary)) {
    alert("Illegal Input Type!");
    targetSalary = prompt("How much do you want to make in a year?\n(This does not include taxes. The calculations add them for you later on.)");
}

// Gets input value for percent profit desired
var profitDesired = prompt("How much percent profit do you want to make in a year?\nRecommended is anywhere from 10 to 30 percent.\nPlease input a whole number for the profit.\n(e.g. 10, 11, 15, 20, etc.)");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while (isNaN(profitDesired)) {
    alert("Illegal Input Type!");
    profitDesired = prompt("How much percent profit do you want to make in a year?\nRecommended is anywhere from 10 to 30 percent.\nPlease input a whole number for the profit.\n(e.g. 10, 11, 15, 20, etc.)");
}

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
var overhead = 30000;
// With that, we need to the percentage of salary this overhead accounts for.
var percentOverhead = overhead / totalSalary;

// Calculates the hourly rate you need to pay for the overhead
// I use floor again to make a "pretty" number
var overheadHourlyRate = baseHourlyRate * percentOverhead;
var hourlyRateWithOverhead = Math.floor(overheadHourlyRate + baseHourlyRate);

// Tells use how many hours a month they would have to work to meet their income goal.
var monthlyHours = hoursCanWork / 12;

// Calculates the amount the user would have to add to their hourly rate with overhead
// if they wanted to meet their percent profit goal.
var profitRate = hourlyRateWithOverhead * (profitDesired / 100);
var finalSalary = hourlyRateWithOverhead + profitRate;

// Output for the user to see what they must do to make their desired amount of money.
console.log("In order to make the salary you desire, with the percent profit you desire,\nyou must charge your clients $" + finalSalary + " an hour and work " + monthlyHours + " hours a month.");
