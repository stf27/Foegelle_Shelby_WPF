/**
 * Shelby Foegelle
 * 9/25/2014.
 * Functions Worksheet
 */

// Circumference

    // Gets a radius value from the user and checks that it is the correct variable type
    var userRadiusInput = prompt("This program calculates the circumference of a circle.\nPlease enter a radius value.");
    if(isNaN(userRadiusInput)) {
        alert("Incorrect Input!")
        userRadiusInput = prompt("This program calculates the circumference of a circle.\nPlease enter a radius value.\nNumbers only!");
    }

    // Function that calculates the circumference of a circle
    function calculateCircumference(radius) {
        return 2 * Math.PI * radius;
    }

    // Stores circumference value here and sets decimal places to 2
    var circumference = calculateCircumference(userRadiusInput).toFixed(2);

    // Outputs circumference value to console
    console.log("The circumference of the circle is " + circumference);

// Circumference End

// Stung!

    // Given
    // Number bee stings per pound to kill an animal
    var beeStingNum = 8.666666667;

    // Gets user input and stores the weight of the animal and checks that it is the correct variable type
    var victimWeight = prompt("This program calculates the number of bee stings it would take to kill an animal depending on their weight.\nPlease enter a weight (in pounds).");
    if(isNaN(victimWeight)) {
        alert("Incorrect Input!")
        victimWeight = prompt("This program calculates the number of bee stings it would take to kill an animal depending on their weight.\nPlease enter a weight (in pounds).\nNumbers only!");
    }

    // Calculates the total number of stings it takes to kill an animal of a given weight
    function stingsToKill (weight) {
        return weight * beeStingNum;
    }

    // Stores value for the number of bee stings it takes to kill an animal and sets the number of decimals to 2
    var numBeeStings = stingsToKill(victimWeight).toFixed(2);

    // Outputs the number of stings it takes to kill an animal to the console
    console.log("It takes " + numBeeStings + " bee stings to kill this animal.")

// Stung! End