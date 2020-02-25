// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
var password = writePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

// Write password to the #password input
  function writePassword() {
    pwLength = prompt("Please enter the length of your password (between 8 and 128).");
    if (pwLength >= "8" && pwLength <= "128") {
      prompt === true;
    }

    else {
      prompt === false;
    }

    var isNumber 
    isnumber = checkNum(pwLength);
    while (!isNumber)
    {
      pwLength = prompt("Value must be a number between 8 and 128, try again");
    }



    lowerCase = prompt("Do you wish to use lowercase characters (Y/N)?");
    if(input == "Y") {
      lowerCase = true;
    }
    else {
      lowerCase = false;
     }

    let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    upperCase = prompt("Do you wish to use uppercase characters (Y/N)?");
      if(input == "Y") {
          upperCase = true;
        }
      else {
          upperCase = false;
      }

    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    numeric = prompt ("Do you wish to use numbers (Y/N)?");
      if(input == "Y") {
        numeric = true;
      }
      else {
        numeric = false;
      }

    let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

     specChar = prompt ("Do you wish to use special characters (Y/N)?");
      if(input == "Y") {
        specChar = true;
      }
      else {
        specChar = false;
      }

    var specChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?", "_", "-", "+", "="];


    window.confirm("writePassword");
    if (confirm) {
      txt = "ok";
    }
    else {
      txt = "Try Again!";
    }
  }

 


    //Do I need a for loop to limit how many times? Or does that matter? 
  