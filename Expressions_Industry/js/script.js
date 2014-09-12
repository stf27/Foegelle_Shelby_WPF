/**
 * Created by Shelby Foegelle on 9/10/2014.
 * Expressions - Industry
 */

// This calculator calculates how much you should charge a client hourly for freelance web design based on overhead, hours worked weekly, and percent profit the user wants to make.


// Gets input value for if wealth mastery was used
var hoursWorkedWeekly = prompt("How many hours do you plan on working a week?");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while (isNaN(hoursWorkedWeekly)) {
    alert("Illegal Input Type!");
    hoursWorkedWeekly = prompt("How many hours do you plan on working a week?");
}
