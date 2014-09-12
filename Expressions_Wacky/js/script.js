/**
 * Created by Shelby Foegelle on 9/10/2014.
 * Expressions Wacky
 */

// The calculator determines the percent chance you have to reach the end of a rainbow
// depending on the type of underwear you wear, the amount of underwear you buy in a year, and several other wacky factors...


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
while ((lolOrDota != "League of Legends") && (lolOrDota != "DOTA") && (lolOrDota != "huh?")) {
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
    typeChance = .7;
}

// The base chance the user has to find the end of a rainbow.
var baseChance = 0;

// These if statements determine the base score for for finding the end of a rainbow
// depending on preference of Star Wars or Star Trek
if(starWarsOrStarTrek == "Star Wars") {
    baseChance = 0.5;
}
if(starWarsOrStarTrek == "Star Trek") {
    baseChance = 0.2;
}

// These if statements determine the base score for for finding the end of a rainbow
// depending on preference of League of Legends, DOTA, or huh?
if(lolOrDota == "League of Legends") {
    baseChance += 0.2;
}
if(lolOrDota == "DOTA") {
    baseChance += 0;
}
if(lolOrDota == "huh?") {
    baseChance -= 0.1;
}

// These if statements determine the base score for for finding the end of a rainbow
// depending on if the user likes The Lord of The Rings
var lordOfTheRingsChance = 0;
if(lordOfTheRings == "yes") {
    lordOfTheRingsChance = 0.5;
}
if(lordOfTheRings == "no") {
    lordOfTheRingsChance = 3;
}

// The overall change the user has to find the end of a rainbow
var chance = ((baseChance * typeChance) / lordOfTheRingsChance) * 100;

// You buy way too much underwear!!!
if(underwearInfo[1] > 15) {
    console.log("You buy way too much underwear!!\nYou will never reach the end of a rainbow...");
    console.log("*Disclaimer: This is a very judgemental calculator.*");
}
// Determines the message the user sees depending on their % chance of finding a rainbow
if(underwearInfo[1] <= 15) {
    if(chance > .4) {
        console.log("You have a " + chance + "% chance of finding the end of a rainbow. Yay!");
        console.log("*Disclaimer: This is a very judgemental calculator.*");
    }
    if(chance <= .4) {
        console.log("You have a " + chance + "% chance of finding the end of a rainbow.");
        console.log("Good luck ever finding the end of a rainbow...It doesn't seem likely.");
        console.log("*Disclaimer: This is a very judgemental calculator.*");
    }
}