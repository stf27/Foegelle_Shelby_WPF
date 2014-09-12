/**
 * Created by Shelby Foegelle on 9/10/2014.
 * Expressions Wacky
 */

// The calculator determines the percent chance you have to reach the end of a rainbow
// depending on the amount of underwear you buy in a year, and several other factors...


// Gets input value for type of underwear the user wears most frequently
var underwearType = prompt("What type of underwear do you wear most often?\nAcceptable inputs are boxers, boxer briefs, or tighty-whiteys");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while ((underwearType != "boxers") && (underwearType != "boxer briefs") && (underwearType != "tighty-whiteys")) {
    alert("Illegal Input Type!");
    underwearType = prompt("What type of underwear do you wear most often?\nAcceptable inputs are boxers, boxer briefs, or tighty-whiteys");
}

// Gets input value for total pairs of underwear purchased in a year
var totalUnderwearPurchased = prompt("How many pairs of underwear do you purchase in a year?");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while (isNaN(totalUnderwearPurchased)) {
    alert("Illegal Input Type!");
    totalUnderwearPurchased = prompt("How many pairs of underwear do you purchase in a year?");
}

var underwearInfo = [underwearType, totalUnderwearPurchased];

console.log(underwearInfo[0] + " type");
console.log(underwearInfo[1] + " total purchased");
