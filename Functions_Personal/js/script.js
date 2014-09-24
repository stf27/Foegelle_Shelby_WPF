/**
 * Shelby Foegelle
 * 9/25/2014
 * Functions - Personal
 */

// This program helps you to calculate your monthly expenses and compares that to your monthly income.
function myFunction(form) {

    // Variables get their value from the HTML form input boxes
    // Array that stores the user's income and income tax amount
    var income =[];
    // Array that stores the user's expenses
    var expenses = [];
    /**
    // Yearly Gross Income
    var yearlyGrossIncome = form.yearGrossIncome.value;
    // Yearly Income Tax Rate
    var yearlyIncomeTaxRate = form.yearIncomeTaxRate.value;
    // Rent/Mortgage
    var rentMortgage = form.rentMortgage.value;
    // Education/Tuition
    var educationTuition = form.educationTuition.value;
    // Credit Card Minimum Payments
    var creditCardPayments = form.creditCardPayments.value;
    // Car Insurance
    var carInsurance = form.carInsurance.value;
    // Gasoline
    var gasoline = form.gasoline.value;
    // Other Car Expenses
    var otherCarExpenses = form.otherCarExpenses.value;
    // Other Loan Payments
    var otherLoanPayments = form.otherLoanPayments.value;
    // Home Insurance
    var homeInsurance = form.homeInsurance.value;
    // Life Insurance
    var lifeInsurance = form.lifeInsurance.value;
    // Health/Dental Insurance
    var healthDentalInsurance = form.healthDentalInsurance.value;
    // Telephone
    var telephone = form.telephone.value;
    // TV/Internet
    var tvInternet = form.tvInternet.value;
    // Electricity
    var electricity = form.electricity.value;
    // Water/Garbage
    var waterGarbage = form.waterGarbage.value;
    // Groceries
    var groceries = form.groceries.value;
    // Personal Care (clothing, haircuts, etc.)
    var personalCare = form.personalCare.value;
    // Eating Out
    var eatingOut = form.eatingOut.value;
    // Subscriptions
    var subscriptions = form.subscriptions.value;
    **/

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

    function sum() {

    }



    console.log("Yearly Income: " + yearlyGrossIncome);
    console.log("Yearly Income: " + yearlyIncomeTaxRate);
    console.log("Yearly Income: " + rentMortgage);
    console.log("Yearly Income: " + educationTuition);
    console.log("Yearly Income: " + creditCardPayments);
    console.log("Yearly Income: " + carInsurance);
    console.log("Yearly Income: " + gasoline);
    console.log("Yearly Income: " + otherCarExpenses);
    console.log("Yearly Income: " + otherLoanPayments);
    console.log("Yearly Income: " + homeInsurance);
    console.log("Yearly Income: " + lifeInsurance);
    console.log("Yearly Income: " + healthDentalInsurance);
    console.log("Yearly Income: " + telephone);
    console.log("Yearly Income: " + tvInternet);
    console.log("Yearly Income: " + electricity);
    console.log("Yearly Income: " + waterGarbage);
    console.log("Yearly Income: " + groceries);
    console.log("Yearly Income: " + personalCare);
    console.log("Yearly Income: " + eatingOut);
    console.log("Yearly Income: " + subscriptions);

}
