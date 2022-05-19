// Assignment Code
var generateBtn = document.querySelector("#generate");


// Create empty password character array
var passwordCharacterArray = [];


// Establish password length between 8 and 128 characters
var passwordLength = parseInt(window.prompt("How long do you want your password to be? Please enter a number between 8 and 128."))/*; {
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You must choose a password length between 8 and 128 characters long!");
    }
};*/


// establish password makeup
// confirm Y/N lowercase letters
var lowerCase = window.confirm("Do you want your password to contain lowercase letters?"); {
  // if TRUE, push lowercase letters into passwordCharacterArray
  if (lowerCase) {
    passwordCharacterArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
}


// confirm Y/N uppercase letters
var upperCase = window.confirm("Do you want your password to include uppercase letters?"); {
  // if TRUE, push uppercase letters into passwordCharacterArray
  if (upperCase) {
    passwordCharacterArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }
}


// confirm Y/N numbers
var numericValue = window.confirm("Do you want your password to contain numbers?"); {
  // if TRUE, push numbers into passwordCharacterArray
  if (numericValue) {
    passwordCharacterArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }
}


// confirm Y/N special characters
var specialCharacters = window.confirm("Do you want your password to contain special characters?"); {
  // if true, push special characters into passwordCharacterArray
  if (specialCharacters) {
    passwordCharacterArray.push("!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~");
  }
}

// figure out a way to shuffle passwordCharacterArray
function shuffle(passwordCharacterArray) {
  var m = passwordCharacterArray.length, t, i;

  // while there remain elements to shuffle...
  while (m) {
    // pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // and swap it with the current element
    t = passwordCharacterArray[m];
    passwordCharacterArray[m] = passwordCharacterArray[i];
    passwordCharacterArray[i] = t;
  }

  return passwordCharacterArray;
}

// figure out a way to pull characters from shuffled passwordCharacterArray

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
console.log(passwordLength);
console.log(passwordCharacterArray);