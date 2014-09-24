/**
 * Shelby Foegelle
 * 9/25/2014.
 * Functions Worksheet
 */

// Circumference

    // Gets a radius value from the user
    var userRadiusInput = prompt("This program calculates the circumference of a circle.\nPlease enter a radius value.");

    // Function that calculates the circumference of a circle
    function calculateCircumference(radius) {
        return 2 * Math.PI * radius;
    }

    // Stores circumference value here and sets decimal places to 2
    var circumference = calculateCircumference(userRadiusInput).toFixed(2);

    // Outputs circumference value to console
    console.log("The circumference of the circle is " + circumference);

// Stung!

// Given
// Number bee stings per pound to kill an animal
var beeStingNum = 8.666666667;

// Variable that stores the weight of the animal
var victimWeight = 0;

// Calculates the total number of stings it takes to kill an animal of a given weight
function stingsToKill (weight) {
    return weight * beeStingNum;
}