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
var starWarsOrStarTrek = prompt("Star Trek or Star Wars?\nCapitalization Matters!");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while ((starWarsOrStarTrek != "Star Wars") && (starWarsOrStarTrek != "Star Trek")) {
    alert("Illegal Input Type!");
    starWarsOrStarTrek = prompt("Star Trek or Star Wars?\nCapitalization Matters!");
}

// Gets input value for League of Legends or DOTA
var lolOrDota = prompt("League of Legends or DOTA?\nAcceptable inputs are League of Legends, DOTA, or huh?\nCapitalization Matters!");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while ((lolOrDota != "League of Legends") && (lolOrDota != "DOTA") && (lolOrDota != "Huh?")) {
    alert("Illegal Input Type!");
    lolOrDota = prompt("League of Legends or DOTA?\nAcceptable inputs are League of Legends, DOTA, or huh?\nCapitalization Matters!");
}

// Gets input value for Lord of The Rings
var lordOfTheRings = prompt("Is The Lord of The Rings trilogy one of the greatest trilogies ever made?\nAcceptable inputs are yes or no.\nCapitalization Matters!");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while ((lordOfTheRings != "yes") && (lordOfTheRings != "no")) {
    alert("Illegal Input Type!");
    lordOfTheRings = prompt("Is The Lord of The Rings trilogy one of the greatest trilogies ever made?\nAcceptable inputs are yes or no.\nCapitalization Matters!");
}

// Stores the different underwear data of the user
var underwearInfo = [underwearType, totalUnderwearPurchased];


// These if statements determine the amount that your underwear type helps you to find the end of a rainbow
var typeChance = 0;
if(underwearInfo[0] == "boxers") {
    typeChance = .01;
}
if(underwearInfo[0] == "boxer briefs") {
    typeChance = .5;
}
if(underwearInfo[0] == "tighty-whiteys") {
    typeChance = .8;
}

// The base chance the user has to find the end of a rainbow.
var baseChance = 0;

// These if statements determine the base score for for finding the end of a rainbow
// depending on preference of Star Wars or Star Trek
if(starWarsOrStarTrek == "Star Wars") {
    baseChance = 1;
}
if(starWarsOrStarTrek == "Star Trek") {
    baseChance = 0;
}

// These if statements determine the base score for for finding the end of a rainbow
// depending on preference of League of Legends, DOTA, or huh?
if(lolOrDota == "League of Legends") {
    baseChance = 1;
}
if(lolOrDota == "DOTA") {
    baseChance = 0;
}
if(lolOrDota == "huh?") {
    baseChance = 0;
}

// These if statements determine the base score for for finding the end of a rainbow
// depending on if the user likes The Lord of The Rings

// The overall change the user has to find the end of a rainbow
var chance = (baseChance * typeChance);

// You buy way too much underwear!!!
if(underwearInfo[1] > 25) {
    console.log("You buy way too much underwear!!\nYou will never reach the end of a rainbow...")
}
if(underwearInfo[1] <= 25) {
    console.log(chance + " your chance.");
    console.log(underwearInfo[0] + " type");
    console.log(underwearInfo[1] + " total purchased");
}