/**
 * Shelby Foegelle
 * 9/25/2014
 * Functions - Wacky
 */

// Pizza Value Evaluator
// Takes the size of a pizza and the cost and tells the user the cost per square inch of pizza
// Assumes the user is buying a whole round pizza

// Gets the diameter of the pizza from the user and checks that it is the correct input type
var diameterOfPizza = prompt("What is the diameter of the pizza (in inches)?");
while(isNaN(diameterOfPizza)) {
    alert("Incorrect Input!");
    diameterOfPizza = prompt("What is the diameter of the pizza (in inches)?\nNumbers only please!");
}

// Gets the price of the pizza from the user and checks that it is the correct input type
var priceOfPizza = prompt("What is the price of the pizza?");
while(isNaN(priceOfPizza)) {
    alert("Incorrect Input!");
    priceOfPizza = prompt("What is the price of the pizza?\nNumbers only please!");
}

// Calculates the area of a circle or more importantly the area of a pizza :)
function areaOfCircle(diameter) {
    var radius = diameter / 2;
    return Math.PI * (radius * radius);
}

// Calculates the price of the pizza per square inch
function pricePerSquareInch(area, price) {
    return price / area;
}

// Stores the area of the pizza
var areaOfPizza = areaOfCircle(diameterOfPizza);

// Stores the price of the pizza
var priceOfPizzaPerSquareInch = pricePerSquareInch(areaOfPizza, priceOfPizza);


console.log("The diameter of the pizza is " + diameterOfPizza);
console.log("The price of the pizza is " + priceOfPizza);
