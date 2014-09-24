/**
 * Shelby Foegelle
 * 9/25/2014
 * Functions - Personal
 */

// This program helps you to calculate your monthly expenses and compares that to your monthly income.
function myFunction(form) {

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

    console.log("Yearly Income: " + yearlyGrossIncome);

}
