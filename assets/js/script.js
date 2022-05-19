// Assignment Code
//var generateBtn = document.querySelector("#generate");


// Establish possible character arrays
// var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numericValueArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialCharactersArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordCharacterArray = [];


// Establish password length between 8 and 128 characters
var passwordLength = parseInt(window.prompt("How long do you want your password to be? Please enter a number between 8 and 128."))/*; {
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You must choose a password length between 8 and 128 characters long!");
    }
};*/


// Establish password makeup
var lowerCase = window.confirm("Do you want your password to contain lowercase letters?"); {
  if (lowerCase) {
    passwordCharacterArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
}
// If TRUE, concatenate lowerCaseArray with passwordCharacterArray


// Establish if uppercase letters are wanted
var upperCase = window.confirm("Do you want your password to include uppercase letters?"); {
  if (upperCase) {
    passwordCharacterArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }
}
// If TRUE, concatenate upperCaseArray with passwordCharacterArray


// Establish if numbers are wanted
var numericValue = window.confirm("Do you want your password to contain numbers?"); {
  if (numericValue) {
    passwordCharacterArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }
}
// If TRUE, concatenate numericValueArray with passwordCharacterArray


// Establish if special characters are wanted
var specialCharacters = window.confirm("Do you want your password to contain special characters?"); {
  if (specialCharacters) {
    passwordCharacterArray.push("!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~");
  }
}
// If true, concatenate specialCharactersArray with passwordCharacterArray


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
console.log(numericValue);
console.log(specialCharacters);
console.log(passwordCharacterArray);