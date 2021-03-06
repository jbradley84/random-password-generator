// empty password character array
var passwordCharacterArray = [];


// function to generate random password
var generatePassword = function () {


  // establish password length between 8 and 128 characters
  var passwordLength = parseInt(window.prompt("How long do you want your password to be? Please enter a number between 8 and 128."));

  // validate prompt answer
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("You must choose a password length between 8 and 128 characters long!");
    return generatePassword();
  }


  // call function to establish password character makeup
  passwordCharacterMakeup();


  // run a for loop to generate random newpassword by pulling randomCharacter values from passwordCharacterArray
  let newpassword = [];
  // loop through passwordCharacterArray
  for (let i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * passwordCharacterArray.length);
    let randomCharacter = passwordCharacterArray[randomNum];
    newpassword.push(randomCharacter);
  }


  // display randomPassword in textarea with ID "#password"
  var randomPasswordInput = document.querySelector("#password").innerHTML = newpassword.join("");
}


// function to establish password character makeup
var passwordCharacterMakeup = function () {
  var lowerCase = window.confirm("Do you want your password to contain lowercase letters?"); {
    // if TRUE, push lowercase letters into passwordCharacterArray
    if (lowerCase) {
      passwordCharacterArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
  };


  // confirm Y/N uppercase letters
  var upperCase = window.confirm("Do you want your password to include uppercase letters?"); {
    // if TRUE, push uppercase letters into passwordCharacterArray
    if (upperCase) {
      passwordCharacterArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }
  };


  // confirm Y/N numbers
  var numericValue = window.confirm("Do you want your password to contain numbers?"); {
    // if TRUE, push numbers into passwordCharacterArray
    if (numericValue) {
      passwordCharacterArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
  };


  // confirm Y/N special characters
  var specialCharacters = window.confirm("Do you want your password to contain special characters?"); {
    // if true, push special characters into passwordCharacterArray
    if (specialCharacters) {
      passwordCharacterArray.push("!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~");
    }
  };

  // validate user has selected at least one character type
  if (!passwordCharacterArray.length) {
    window.alert("You must choose at least one password character type!");
    return passwordCharacterMakeup();
  }
}


// on click, run generatePassword
document.getElementById("generate").onclick = function () { generatePassword() };


