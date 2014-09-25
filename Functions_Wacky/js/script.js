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

// Stores the area of the pizzas
var areaOfPizza1 = areaOfCircle(diameterOfPizza1);
var areaOfPizza2 = areaOfCircle(diameterOfPizza2);

// Stores the price of the pizzas and sets the number of decimal places to 2
var priceOfPizzaPerSquareInch1 = (pricePerSquareInch(areaOfPizza1, priceOfPizza1)).toFixed(2);
var priceOfPizzaPerSquareInch2 = (pricePerSquareInch(areaOfPizza2, priceOfPizza2)).toFixed(2);

// Checks the prices of the two pizzas per square inch and creates a message to tell the user which one is a better buy
var financialAdvice = "The " + ((priceOfPizzaPerSquareInch1 < priceOfPizzaPerSquareInch2) ? "value of the first pizza is better. You should probably go for that one!" : "value of the second pizza is better. You should probably go for that one!");

// Outputs the value of the pizzas per square inch and tell the user which one they should probably buy based on price
console.log("The price of the first pizza per square inch is $" + priceOfPizzaPerSquareInch1 + ".");
console.log("The price of the second pizza per square inch is $" + priceOfPizzaPerSquareInch2 + ".");
console.log(financialAdvice);
