/**
 * Shelby Foegelle
 * 9/25/2014
 * Functions - Industry
 */

// Calculates a recommended cost to make a website
function industryFunction(form) {

    // Sums up the total cost for creating a website
    function totalCost(pages, design, database, eCommerce) {
        return pages + design + database + eCommerce;
    }

    // Number of Pages (1k for 1 to 10 pages, 2k for 10 to 50, 3k for 50 to 100, 4k for 100 to 150)
    // If statements check the user input value and assign a cost to it
    var numPages = form.webPages.value;
    var numPagesCost = 0;
    if(numPages == "1-10") {
        numPagesCost = 1000;
    }
    if(numPages == "11-50") {
        numPagesCost = 2000;
    }
    if(numPages == "51-100") {
        numPagesCost = 3000;
    }
    if(numPages == "101-150") {
        numPagesCost = 4500;
    }

    // Amount of design needed (2k for basic, 3k for modern style, 4k for high end design)
    // If statements check the user input value and assign a cost to it
    var designNeeded = form.designNeeded.value;
    var designNeededCost = 0;
    if(designNeeded == "basic") {
        designNeededCost = 2000;
    }
    if(designNeeded == "modern") {
        designNeededCost = 3000;
    }
    if(designNeeded == "highEnd") {
        designNeededCost = 4000;
    }

    // Database Integration (2k for Basic, 4k for Advanced)
    // If statements check the user input value and assign a cost to it
    var databaseIntegration = form.databaseIntegration.value;
    var databaseIntegrationCost = 0;
    if(databaseIntegration == "none") {
        databaseIntegrationCost = 0;
    }
    if(databaseIntegration == "basic") {
        databaseIntegrationCost = 2000;
    }
    if(databaseIntegration == "advanced") {
        databaseIntegrationCost = 4000;
    }

    // E-Commerce Functionality (2k for Basic, 4k for Advanced)
    // If statements check the user input value and assign a cost to it
    var eCommerce = form.eCommerce.value;
    var eCommerceCost = 0;
    if(eCommerce == "none") {
        eCommerceCost = 0;
    }
    if(eCommerce == "basic") {
        eCommerceCost = 2000;
    }
    if(eCommerce == "advanced") {
        eCommerceCost = 4000;
    }

    // Stores the final cost of the website using the totalCost function made earlier
    var finalCost = totalCost(numPagesCost, designNeededCost, databaseIntegrationCost, eCommerceCost);

    // Sets the number of decimal places to 2 for all currency variables
    numPagesCost = numPagesCost.toFixed(2);
    designNeededCost = designNeededCost.toFixed(2);
    databaseIntegrationCost = databaseIntegrationCost.toFixed(2);
    eCommerceCost = eCommerceCost.toFixed(2);
    finalCost = finalCost.toFixed(2);

    // Final output for user to see the recommended cost to create the website
    console.log("It is recommended that you charge $" + finalCost + " to create this website.");
    console.log("Page Cost Recommendation: $" + numPagesCost);
    console.log("Design Needed Cost Recommendation: $" + designNeededCost);
    console.log("Database Integration Cost Recommendation: $" + databaseIntegrationCost);
    console.log("E-Commerce Integration Cost Recommendation: $" + eCommerceCost);

}
