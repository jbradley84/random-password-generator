// Assignment Code
var generateBtn = document.querySelector("#generate");

// Establish password length - prompt user, 8 - 128 characters long

// Establish password makeup
/* Confirm user, lowercase: Y/N
   Confirm user, uppercase: Y/N
   Confirm user, numbers: Y/N
   Confirm user, special characters: Y/N
*/

// Establish password character arrays

// Concatenate TRUE statement character arrays

// Use math.random to generate password - must pull characters from each TRUE array

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
