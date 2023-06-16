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

  var includeLowercase = confirm("Would you like lowercase characters?");
  var includeUppercase = confirm("Would you like uppercase characters?");
  var includeNumeric = confirm(" Do you want numeric characters?");
  var includeSpecial = confirm("Do you want special characters?");
  
  // One character selection validation here
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  var password = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Password generation goes here

//selected criteria character builder

//Random password generation

// Add event listener to generate button
