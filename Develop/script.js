// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

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

  // One character selection validation here

}

//Password generation goes here

//selected criteria character builder

//Random password generation

// Add event listener to generate button
