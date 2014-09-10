/**
 * Created by Shelby Foegelle on 9/10/2014.
 * Expressions Worksheet
 */

// Dog Years: Calculate how old Sparky the pit bull is in dog years.
    var sparkyHumanAge = 4;

    // Multiply sparkyHumanAge by 7 and assign the value to sparkyDogAge
    var sparkyDogAge = sparkyHumanAge * 7;

    // Print out the calculated dog age of Sparky
    console.log("Sparky is " + sparkyHumanAge + " human years old which is " + sparkyDogAge + " in dog years.");


// Slice of Pie Part 1: Calculate how much pizza each partygoer will get at the party.
    var numSlicesPerPizza = 8;
    var numPizzas = 4;
    var numPeople = 1000;

    // Multiply the number of slices per pizza by the number of pizzas to get the total amount of slices.
    // Then divide that number by the number of people to get the total number of slices per person.
    // I then use the toFixed function to round the result to two decimal places.
    var numSlicesPerPerson = (numSlicesPerPizza * numPizzas) / numPeople;
    numSlicesPerPerson = numSlicesPerPerson.toFixed(2);

    // Print out the calculated slices of pizza given to each person.
    console.log("Each person ate " + numSlicesPerPerson + " slices of pizza at the party.");


// Slice of Pie Part 2: Sparky gets the left over pizza slices assuming everyone at the party gets whole slices.
// Calculate how many slices will Sparky get.
    // First I create an if statement that checks that every person at the party gets at least 1 slice of pizza.
    // Then I calculate the amount of pizza slices Sparky gets by using modulus (division remainder).
    // If there is not enough pizza for everyone to get an entire slice, then I output that Sparky gets 0 slices of pizza.
    if (numSlicesPerPerson >= 1) {
        var numSlicesForSparky = (numSlicesPerPizza * numPizzas) % numPeople;
    }else console.log("Sparky got 0 slices of pizza. :'(");

    console.log("Sparky got " + numSlicesForSparky + " slices of pizza.");


// Average Shopping Bill: Create an expression that sums up the values in the array and then finds the average.
var groceryWeeklyTotals = [66, 84, 72, 127, 31]

// Calls the function, reduce, which applies a function to each value of an array,
// from left to right, in order to reduce it to a single value.
// So I use reduce and create a function that adds the current index to the next index.
// This adds up each element in the array and returns the total value of the array.
var totalCosts = groceryWeeklyTotals.reduce(function(a,b) {
    return a + b;
});

// Calculates the average cost of groceries per week by taking the total amount spend and dividing it by 5.
var avgWeeklyCosts = totalCosts / 5;

console.log(totalCosts);
console.log(avgWeeklyCosts);
// Discounts:

