// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Establish password makeup
var passwordLength = parseInt(window.prompt("How long do you want your password to be? Please enter a number between 8 and 128.")); {
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You must choose a password length between 8 and 128 characters long!");
    }
};
var lowerCase = window.confirm("Do you want your password to contain lowercase letters?")
var upperCase = window.confirm("Do you want your password to include uppercase letters?")
var numericalValues = window.confirm("Do you want your password to contain numbers?")
var specialCharacters = window.confirm("Do you want your password to contain special characters?")

// Establish password character arrays

// Concatenate TRUE statement character arrays

// Use math.random to generate password - must pull characters from each TRUE array

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/
console.log(passwordLength);
console.log(lowerCase);
console.log(upperCase);
console.log(numericalValues);
console.log(specialCharacters);