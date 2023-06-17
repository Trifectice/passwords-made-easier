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
  var includeNumber = confirm(" Do you want numeric characters?");
  var includeSpecial = confirm("Do you want special characters?");
  
  // One character selection validation here
  if (!includeLowercase && !includeUppercase && !includeNumber && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  var password = generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Password generation goes here
function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSpecial) {
 var characters = "";
 var lowercase = "abcdefghijklmnopqrstuvwxyz";
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var number = "0123456789"; 
 var special = "!@#$%^&*:;?><,./-=()_+~`|{}[]\:"

  //selected criteria character builder
  if (includeLowercase) {
    characters =+ lowercase;
  }
  if (includeUppercase) {
    characters =+ uppercase;
  }
  if (includeNumber) {
    characters =+ number;
  }
  if (includeSpecial) {
    characters =+ special;
  }

  var password = "";
  //Random password generation
    for (var i = 0; i < length; i++) {
      var outPut = Math.floor(Math.random() * characters.length);
      password =+ characters[outPut];
 }

  return password;
}