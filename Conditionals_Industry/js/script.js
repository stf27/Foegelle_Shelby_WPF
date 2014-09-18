/**
 * Shelby Foegelle
 * 9/18/2014
 * Conditionals - Industry
 */

// This calculates the font size you want to use in ems based off of the target value (size you want in pixels) and the context value (the font size of its container).

alert("This program calculates the font size you want to use in ems based off of the size you want the text to be in pixels and the font size of the container the text is in.");

// Gets target pixel size from the user and checks that it is the correct input type (a number).
var targetValue = prompt("Enter the desired font size you want in pixels.");
while(isNaN(targetValue)) {
    alert("Incorrect Input!");
    targetValue = prompt("Enter the desired font size you want in pixels.\nNumbers only please.");
}

// Gets context pixel size from the user and checks that it is the correct input type (a number).
var contextValue = prompt("Enter the font size of the container the text will be in.\nFor example, the default font size for the body of most browsers is 16 pixels.\n If you are unsure what to input, then use 16.");
while(isNaN(contextValue)) {
    alert("Incorrect Input!");
    contextValue = prompt("Enter the font size of the container the text will be in.\nFor example, the default font size for the body of most browsers is 16 pixels.\n If you are unsure what to input, then use 16.\nNumbers only please.");
}

console.log("Target Value: " + targetValue);
console.log("Context Value: " + contextValue);
