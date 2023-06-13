// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Prompt for password criteria
  var length = prompt("Enter the length of the password (8-128 characters):");
  length = parseInt(length);

  // Validate the length input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
