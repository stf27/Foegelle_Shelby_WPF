/**
 * Shelby Foegelle
 * 9/18/2014
 * Conditionals - Industry
 */

// This program can calculate two things. The font size you want to use in ems based off of the size you want the text to be in pixels and the font size of the container the text is in. It can also calculate the percent width of a column based on the pixel size the user wants the column to be.
alert("This program can calculate two things. The font size you want to use in ems based off of the size you want the text to be in pixels and the font size of the container the text is in. It can also calculate the percent width of a column based on the pixel size the user wants the column to be.");

var emsOrColumn = prompt("Would you like to calculate the em value for text or the column width for a webpage layout?\nAppropriate input is 'em' or 'width'.");
while(emsOrColumn != "em" && emsOrColumn != "width") {
    alert("Incorrect Input!");
    emsOrColumn = prompt("Would you like to calculate the em value for text or the column width for a webpage layout?\nAppropriate input is 'em' or 'width'.");
}

// Givens. Will get values from the user.
var targetValue = 0;
var contextValue = 0;

// Checks if the user wants to calculate ems or width and then does it.
if(emsOrColumn == "em") {
    // Gets target pixel size from the user and checks that it is the correct input type (a number).
    targetValue = prompt("Enter the desired font size you want in pixels.");
    while(isNaN(targetValue)) {
        alert("Incorrect Input!");
        targetValue = prompt("Enter the desired font size you want in pixels.\nNumbers only please.");
    }

    // Gets context pixel size from the user and checks that it is the correct input type (a number).
    contextValue = prompt("Enter the font size of the container the text will be in.\nFor example, the default font size for the body of most browsers is 16 pixels.\n If you are unsure what to input, then use 16.");
    while(isNaN(contextValue)) {
        alert("Incorrect Input!");
        contextValue = prompt("Enter the font size of the container the text will be in.\nFor example, the default font size for the body of most browsers is 16 pixels.\n If you are unsure what to input, then use 16.\nNumbers only please.");
    }

    // Calculates the em value for the desired pixel size of the text.
    var emValue = targetValue / contextValue;
}else if(emsOrColumn == "width") {
    // Gets target width from the user and checks that it is the correct input type (a number).
    targetValue = prompt("Enter the desired width of the element you want in pixels.");
    while(isNaN(targetValue)) {
        alert("Incorrect Input!");
        targetValue = prompt("Enter the desired width of the element you want in pixels.\nNumbers only please.");
    }

    // Gets context width from the user and checks that it is the correct input type (a number).
    contextValue = prompt("Enter the width of the container the element will be in.");
    while(isNaN(contextValue)) {
        alert("Incorrect Input!");
        contextValue = prompt("Enter the width of the container the element will be in.\nNumbers only please.");
    }

    // Calculates the width for the desired element in terms of percentage.
    var widthValue = (targetValue / contextValue) * 100;
}


console.log("Target Value: " + targetValue);
console.log("Context Value: " + contextValue);
