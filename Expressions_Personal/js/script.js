/**
 * Created by Shelby Foegelle on 9/10/2014.
 * Expressions - Personal
 */

// Calculates the max gold a player can have at any time in the game.
    // This algorithm take into account the amount of passive gold you have made.
    // It also takes into account a few other forms of income from the utility masteries page.

// *At this time, this algorith is somewhat basic considering the vast amount of ways a player can make money in the game*
    // I ask that you forgive me of its simplicity compared to what it could turn into.
    // I hope to one day expand on it and possibly take into account every possible way a player can make money.

// *Assumes the player has perfect farm*
    // This is because if I were to take into account missed farm,
    // it would be impossible to tell what minions the player did not get.
    // I would have to ask specifically which types were missed and how many.
    // While I could do that, I feel that it asks a bit too much of the user.
    // So I wanted to keep it a bit more friendly for the user of this algorithm.

// *Does not take into account gold generating items*
    // This is because there is no telling what time the player will no longer have that item.

// *Does not take into account the gold generating masteries Scavenger and Bandit*
    // This is due to unpredictable factors.

// *Does not take into account farm from the jungle*

// *Does not take into account gold generated from killing Dragon or Baron*

// *Does not take into account gold from champion kills and assists*

// *Does not take into account gold generated by pets and summons*

// *Does not take into account gold generated from destroying structures*

// *Does not take into account gold generated from destroying wards*

// *Does not take into account gold generated from certain champion gold generating passive abilities*


// Time in game

// Value of each minion:
    // Melee: 19g + (0.5g * (gameTime / 180sec))
    // Caster: 14g + (0.2g * (gameTime / 90sec))
    // Siege: 40g + (1g * (gameTime / 180sec))

// Value of each wave (in sets of three):
// First two waves same value: meleeValue * 3 + casterValue * 3
// Last wave higher value: meleeValue * 3 + casterValue * 3 + siegeValue

// Gets input value for game time
var gameTimeInput = prompt("Enter Game Time\nAcceptable inputs are whole numbers like 1 or half numbers like 1.5.");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while (isNaN(gameTimeInput)) {
    alert("Illegal Input Type!");
    gameTimeInput = prompt("Enter Game Time\nAcceptable inputs are whole numbers like 1 or half numbers like 1.5.");
}

// Gets input value for greed level
var greedLevelInput = prompt("Enter Mastery Level of Greed\nAcceptable inputs are 0, 1, 2, and 3");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while ((greedLevelInput != 3) && (greedLevelInput != 2) && (greedLevelInput != 1) && (greedLevelInput != 0)) {
    alert("Illegal Input Type!");
    greedLevelInput = prompt("Enter Mastery Level of Greed\nAcceptable inputs are 0, 1, 2, and 3");
}

// Gets input value for if wealth mastery was used
var wealthInput = prompt("Was the mastery Wealth used?\nAcceptable inputs are yes or no");
// Checks if user input was the correct type. If not, alert user and ask for input again.
while (wealthInput != "yes" && wealthInput != "no") {
    alert("Illegal Input Type!");
    wealthInput = prompt("Was the mastery Wealth used?\nAcceptable inputs are yes or no");
}

// gameTime in terms of minutes
var gameTime = gameTimeInput;

// greedLevel refers to the mastery called Greed. Can be a value of 0, 1, 2, 3.
// Level 1 Greed = 0.5g / 10sec
// Level 2 Greed = 1.0g / 10sec
// Level 3 Greed = 1.5g / 10sec
var greedLevel = greedLevelInput;

// wealth refers to the mastery called Wealth.
// If the player has Wealth activated, then they start the game with an extra 40g.
// Correct inputs for wealth include yes, no.
var wealth = wealthInput;

// Converts all units of time to seconds
var time = gameTime * 60;

// Calculates the total number of minion waves spawned so far
var numWaves = ((time - 90) / 30) + 1;

// Calculates the number of minion waves spawned without siege minions
var numSmallWaves = Math.ceil((numWaves / (3/2)));

// Calculates the number of minion waves spawned with siege minions
var numBigWaves = Math.floor(numWaves / 3);

// passiveGold generates the amount of gold the player has made through the passive gold generating system.
// The system gives the player 19 gold every 10 seconds.
var passiveGoldGenerated = 19 * (time / 10);

var farmGoldGenerated =

console.log(time + " seconds.");
console.log(passiveGoldGenerated + " passive gold generated.");
console.log(greedLevel);
console.log(wealth);
console.log(numWaves + " total waves.");
console.log(numSmallWaves + " total small waves.");
console.log(numBigWaves + " total big waves.");