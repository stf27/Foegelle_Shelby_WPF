/**
 * Shelby Foegelle
 * 9/25/2014
 * Functions - Personal
 */

// This program helps you to calculate your monthly expenses and compares that to your monthly income.

// Function to sum an array
function arraySum(array) {
    return array.reduce(function(a, b) {return a + b;});
}

// Function that gets data from HTML form and runs the calculations
function myFunction(form) {

    // Variables get their value from the HTML form input boxes
    // Array that stores the user's income and income tax amount
    var income =[];
    // Array that stores the user's expenses
    var expenses = [];

    // Gets values from form and stores them into their respective array
    // Yearly Gross Income
    income[0] = form.yearGrossIncome.value;
    // Yearly Income Tax Rate
    income[1] = form.yearIncomeTaxRate.value;
    // Rent/Mortgage
    expenses[0] = form.rentMortgage.value;
    // Education/Tuition
    expenses[1] = form.educationTuition.value;
    // Credit Card Minimum Payments
    expenses[2] = form.creditCardPayments.value;
    // Car Insurance
    expenses[3] = form.carInsurance.value;
    // Gasoline
    expenses[4] = form.gasoline.value;
    // Other Car Expenses
    expenses[5] = form.otherCarExpenses.value;
    // Other Loan Payments
    expenses[6] = form.otherLoanPayments.value;
    // Home Insurance
    expenses[7] = form.homeInsurance.value;
    // Life Insurance
    expenses[8] = form.lifeInsurance.value;
    // Health/Dental Insurance
    expenses[9] = form.healthDentalInsurance.value;
    // Telephone
    expenses[10] = form.telephone.value;
    // TV/Internet
    expenses[11] = form.tvInternet.value;
    // Electricity
    expenses[12] = form.electricity.value;
    // Water/Garbage
    expenses[13] = form.waterGarbage.value;
    // Groceries
    expenses[14] = form.groceries.value;
    // Personal Care (clothing, haircuts, etc.)
    expenses[15] = form.personalCare.value;
    // Eating Out
    expenses[16] = form.eatingOut.value;
    // Subscriptions
    expenses[17] = form.subscriptions.value;

    // Converts the array values into numbers
    var numIncome = income.map(Number);
    var numExpenses = expenses.map(Number);

    // *Anonymous function*
    // Calculates monthly income with income tax percentage in mind
    var monthlyIncome = function() {
        return (numIncome[0] - (numIncome[0] * (numIncome[1]/100))) / 12;
    };

    // Uses the function arraySum to find the total expenses of the user per month
    var monthlyExpenses = arraySum(numExpenses);

    // Calculates the amount the user saves every month
    var amountSaved = monthlyIncome() - monthlyExpenses;

    // Outputs the monthly income of the user and sets the decimal places to 2
    console.log("Monthly Income: $" + monthlyIncome().toFixed(2));
    // Outputs the monthly expenses of the user and sets the decimal places to 2
    console.log("Monthly Expenses: $" + monthlyExpenses.toFixed(2));
    // Outputs the amount the user is saving each month
    console.log("Monthly Savings: $" + amountSaved.toFixed(2));

    // Tests if the user is saving money or overspending and then outputs a specific message based off of that criteria
    if(amountSaved < 0) {
        console.log("You are overspending!");
    }else if (amountSaved == 0) {
        console.log("You are spending the max amount of money you have available! You may want to rethink your spending habits.");
    }else {
        console.log("You are saving $" + amountSaved.toFixed(2) + " a month.")
    }
}
