// define possible character choices
var charChoice = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  specialChar: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "{", "~"]
}


// password generating function
function generatePassword(){

  // prompts user for password length
  var passLength = window.prompt("How many characters should the password be? Please choose between 8-128");

  // checks what characters to use for password
  if (passLength >= 8 && passLength <= 128){
    var confirmLC = window.confirm("Should the password contain lowercase letters?");
    var confirmUC = window.confirm("Should the password contain uppercase letters?");
    var confirmNUM = window.confirm("Should the password contain numbers?");
    var confirmSP = window.confirm("Should the password contain special characters?");

    // makes sure user has selected at least one option
    if(!confirmLC && !confirmUC && !confirmNUM && !confirmSP){
      window.alert("You must pick at least one character type");
      // restarts function if invalid response is picked
      generatePassword();
    }else{
      // create an empty array that will contain all possible choices from user picked pool
      var passChoice = []
      if (confirmLC) passChoice = passChoice.concat(charChoice.lowerCase);
      if (confirmUC) passChoice = passChoice.concat(charChoice.upperCase);
      if (confirmNUM) passChoice = passChoice.concat(charChoice.numbers);
      if (confirmSP) passChoice = passChoice.concat(charChoice.specialChar);

      // create a variable with empty password. will be filled in later
      var password = "";
      // chooses random characters x amount of times where x is passLength
      for (var i = 0; i <= passLength; i++){
        // add one to include the last item in array. example: pass choice contains 26 characters. math.random gives a result of .99 -- (.99 * 26) = 25.74. 25.74 + 1 = 26.74 -- Math.floor rounds this down to 26
        var randomizer = passChoice[Math.floor(Math.random() * passChoice.length + 1)]
        // adds random character to password variable
        password += randomizer
      }
      return password
    }
  }else{
    window.alert("Please enter a valid choice.")
    generatePassword();
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
