// Take the contents of the sonnet div and place it in a variable
var theSonnet = document.getElementById("sonnet").innerHTML
console.log(theSonnet);

// Find and output the starting position of the word "orphans"
console.log(theSonnet.indexOf("orphans"))

// Output the number of characters in the sonnet
var numOfCharacters = theSonnet.length
console.log("numOfCharacters", numOfCharacters)

// Replace the first occurance of the string "winter" with "yuletide"
// Replace all occurances of the string "the" with "a large"
// Set the content of the sonnet div with the new string