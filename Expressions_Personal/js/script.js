/**
 * Created by Shelby Foegelle on 9/10/2014.
 * Expressions - Personal
 */

// How many minions do you need to farm to buy an item? While taking into account the amount of passive gold you have made.

// *Does not take into account gold generating items*
// This is because there is no telling what time the player will no longer have that item.
// *Does not take into account the gold generating masteries Scavenger and Bandit*
// This is due to unpredictable factors.

// Time in game

// % creeps farmed

// Value of each minion:
// Melee: 19g + (0.5g * (gameTime / 180sec))
// Caster: 14g + (0.2g * (gameTime / 90sec))
// Siege: 40g + (1g * (gameTime / 180sec))

// Value of each wave (in sets of three):
// First two waves same value: meleeValue * 3 + casterValue * 3
// Last wave higher value: meleeValue * 3 + casterValue * 3 + siegeValue

// Passive Gold:
// 19g / 10sec

// gameTime in terms of minutes
var gameTime = 5;

// percentMinionsFarmed in terms of percent not in decimal form
var percentMinionsFarmed = 100;

// greedLevel refers to the mastery called Greed. Can be a value of 0, 1, 2, 3.
// Level 1 Greed = 0.5g / 10sec
// Level 2 Greed = 1.0g / 10sec
// Level 3 Greed = 1.5g / 10sec
var greedLevel = 2;

// wealth refers to the mastery called Wealth.
// If the player has Wealth activated, then they start the game with an extra 40g.
// Correct inputs for wealth include yes, no.
var wealth = "no";