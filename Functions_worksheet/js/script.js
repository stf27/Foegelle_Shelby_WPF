/**
 * Shelby Foegelle
 * 9/25/2014.
 * Functions Worksheet
 */

// Circumference

// Radius of circle variable
var circleRadius = 0;

// Function that calculates the circumference of a circle
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Stores circumference value here
var circumference = calculateCircumference(circleRadius);

// Outputs circumference value to console
console.log("The circumference of the circle is " + circumference);

