/**
 * Shelby Foegelle
 * 9/25/2014
 * Functions - Personal
 */

// This program helps you to calculate your monthly expenses and compares that to your monthly income.
function myFunction(form) {

    var firstName = form.fname.value;

// Yearly Gross Income
var yearlyGrossIncome = prompt("What is your yearly gross income?");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while (isNaN(yearlyGrossIncome)) {
alert("Illegal Input Type!");
yearlyGrossIncome = prompt("What is your yearly gross income?\nNumbers only please!");
}

// Yearly Income Tax Rate


// Rent/Mortgage

// Education/Tuition

// Credit Card Minimum Payments

// Car Insurance

// Gasoline

// Other Car Expenses

// Other Loan Payments

// Home Insurance

// Life Insurance

// Health/Dental Insurance

// Telephone

// Cable/TV/Internet

// Electricity

// Water/Garbage

// Groceries

// Personal Care (clothing, haircuts, etc.)

// Eating Out

// Subscriptions

    console.log("First Name: " + firstName);
    //alert("You typed: " + firstName);
}