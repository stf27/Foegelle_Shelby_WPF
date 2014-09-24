/**
 * Shelby Foegelle
 * 9/25/2014.
 * Functions Worksheet
 */

// Circumference

// Radius of circle variable
var circleRadius = 2;

// Function that calculates the circumference of a circle
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Stores circumference value here and sets decimal places to 2
var circumference = calculateCircumference(circleRadius).toFixed(2);

// Outputs circumference value to console
console.log("The circumference of the circle is " + circumference);

