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

// Gets input value for Star Wars or Star Trek
var starWarsOrStarTrek = prompt("Star Trek or Star Wars?");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while ((starWarsOrStarTrek != "Star Wars") && (starWarsOrStarTrek != "Star Trek")) {
    alert("Illegal Input Type!");
    starWarsOrStarTrek = prompt("Star Trek or Star Wars?");
}

// Gets input value for League of Legends or DOTA
var lolOrDota = prompt("League of Legends or DOTA?\nAcceptable inputs are League of Legends, DOTA, or Huh?");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while ((lolOrDota != "League of Legends") && (lolOrDota != "DOTA") && (lolOrDota != "Huh?")) {
    alert("Illegal Input Type!");
    lolOrDota = prompt("League of Legends or DOTA?");
}

// Gets input value for Lord of The Rings
var lordOfTheRings = prompt("Is The Lord of The Rings trilogy one of the greatest trilogies ever made?\nAcceptable inputs are yes or no.");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while ((lordOfTheRings != "yes") && (lordOfTheRings != "no")) {
    alert("Illegal Input Type!");
    lordOfTheRings = prompt("Is The Lord of The Rings trilogy one of the greatest trilogies ever made?\nAcceptable inputs are yes or no.");
}

// Stores the different underwear data of the user
var underwearInfo = [underwearType, totalUnderwearPurchased];


// These if statements determine the amount that your underwear type helps you to find the end of a rainbow
if(underwearInfo[0] == "boxers") {
    var typeChance = .01;
}
if(underwearInfo[0] == "boxer briefs") {
    var typeChance = .5;
}
if(underwearInfo[0] == "tighty-whiteys") {
    var typeChance = .8;
}





// You buy way too much underwear!!!
if(underwearInfo[1] > 25) {
    console.log("You buy way too much underwear!!\nYou will never reach the end of a rainbow...")
}
if(underwearInfo[1] <= 25) {
    console.log(underwearInfo[0] + " type");
    console.log(underwearInfo[1] + " total purchased");
}