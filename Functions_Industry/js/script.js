/**
 * Shelby Foegelle
 * 9/25/2014
 * Functions - Industry
 */

// Calculate how much it should cost to make a website

function industryFunction(form) {

    // Number of Pages (1k for 1 to 10 pages, 2k for 10 to 50, 3k for 50 to 100, 4k for 100 to 150)
    var numPages = form.webPages.value;

    // Amount of design needed (2k for simple, 3k for modern style, 4k for high end design)
    var designNeeded = form.designNeeded.value;

    // Database Integration (2k for Basic, 4k for Advanced)
    var databaseIntegration = form.databaseIntegration.value;

    // E-Commerce Functionality (2k for Basic, 4k for Advanced)
    var eCommerce = form.eCommerce.value;

    console.log("Number of Web Pages: " + numPages);
    console.log("Design Needed: " + designNeeded);
    console.log("Database Integration: " + databaseIntegration);
    console.log("E-Commerce Integation: " + eCommerce);

}