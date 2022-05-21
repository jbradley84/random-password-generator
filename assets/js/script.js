// function to generate random password
var generatePassword = function () {


  // establish password length between 8 and 128 characters
  var passwordLength = parseInt(window.prompt("How long do you want your password to be? Please enter a number between 8 and 128.")); 
  
  
  // validate prompt answer
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("You must choose a password length between 8 and 128 characters long!");
    return generatePassword();
  }

  
  // Create empty password character array
  var passwordCharacterArray = [];


  // establish password makeup
  // confirm Y/N lowercase letters
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
    return generatePassword();
  }


  // function to shuffle passwordCharacterArray into random order using Fisher Yates Method

  let arrayShuffle = function (arr) {
    let newPos, temp;

    for (let i = arr.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
    }
    return passwordCharacterArray;
  };


  // create new shuffledCharacterArray using shuffle function
  let shuffledCharacterArray = arrayShuffle(passwordCharacterArray);


  // create randomPassword by slicing shuffledCharacterArray at value equal to passwordLength, remove commas
  let randomPassword = shuffledCharacterArray.slice(0, passwordLength).join("");
  

  // display randomPassword in textarea with ID "#password"
  var randomPasswordInput = document.querySelector("#password").innerHTML = randomPassword;
}


// on click, run generatePassword
document.getElementById("generate").onclick = function() {generatePassword()};


