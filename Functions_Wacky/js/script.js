/**
 * Shelby Foegelle
 * 9/25/2014
 * Functions - Wacky
 */

// Pizza Value Evaluator
// Takes the size of two pizzas and calculates the cost per square inch for each pizza and tells the user which one has more value
// Assumes the user is buying a whole round pizza

// Calculates the area of a circle or more importantly the area of a pizza :)
function areaOfCircle(diameter) {
    var radius = diameter / 2;
    return Math.PI * (radius * radius);
}

// Calculates the price of the pizza per square inch
function pricePerSquareInch(area, price) {
    return price / area;
}

// Gets the diameter of pizza 1 from the user and checks that it is the correct input type
var diameterOfPizza1 = prompt("What is the diameter of the first pizza (in inches)?");
while(isNaN(diameterOfPizza1)) {
    alert("Incorrect Input!");
    diameterOfPizza1 = prompt("What is the diameter of the first pizza (in inches)?\nNumbers only please!");
}

// Gets the price of pizza 1 from the user and checks that it is the correct input type
var priceOfPizza1 = prompt("What is the price of the first pizza?");
while(isNaN(priceOfPizza1)) {
    alert("Incorrect Input!");
    priceOfPizza1 = prompt("What is the price of the first pizza?\nNumbers only please!");
}

// Gets the diameter of pizza 2 from the user and checks that it is the correct input type
var diameterOfPizza2 = prompt("What is the diameter of the second pizza (in inches)?");
while(isNaN(diameterOfPizza1)) {
    alert("Incorrect Input!");
    diameterOfPizza1 = prompt("What is the diameter of the second pizza (in inches)?\nNumbers only please!");
}

// Gets the price of pizza 2 from the user and checks that it is the correct input type
var priceOfPizza2 = prompt("What is the price of the second pizza?");
while(isNaN(priceOfPizza1)) {
    alert("Incorrect Input!");
    priceOfPizza1 = prompt("What is the price of the second pizza?\nNumbers only please!");
}


// Stores the area of the pizza
var areaOfPizza1 = areaOfCircle(diameterOfPizza1);
var areaOfPizza2 = areaOfCircle(diameterOfPizza2);
// Stores the price of the pizza and sets the number of decimal places to 2
var priceOfPizzaPerSquareInch1 = (pricePerSquareInch(areaOfPizza1, priceOfPizza1)).toFixed(2);
var priceOfPizzaPerSquareInch2 = (pricePerSquareInch(areaOfPizza2, priceOfPizza2)).toFixed(2);

console.log("The price of pizza per square inch is $" + priceOfPizzaPerSquareInch1);

