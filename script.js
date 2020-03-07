// Assignment Code
//window.addEventListener('load', function () {
    console.log("It's loaded!")
    var generateBtn = document.getElementById("generate");
    console.log(generateBtn)
    generateBtn.addEventListener("click", writePassword);
//})


var passwordDisplay = document.getElementById("#password");

// Write password to the #password input

function writePassword() {
  pwLength = prompt("Please enter the length of your password (between 8 and 128).");
  if (pwLength >= "8" && pwLength <= "128") {
    prompt === true;
  }
  else {
    prompt === false;
  }
  console.log(pwLength);

  /*var isNumber
  isnumber = checkNum(pwLength);
  while (!isNumber) {
    pwLength = prompt("Value must be a number between 8 and 128, try again");
  }*/


  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  lowerCase = prompt("Do you wish to use lowercase characters (Y/N)?");
  if (lowerCase === "Y") {
    lowerCase = true;
  }
  else {
    lowerCase = false;
  }
  console.log(lowerCase);

  
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  upperCase = prompt("Do you wish to use uppercase characters (Y/N)?");
  if (upperCase == "Y") {
    upperCase = true;
  }
  else {
    upperCase = false;
  }
  console.log(upperCase);

  
  let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  numeric = prompt("Do you wish to use numbers (Y/N)?");
  if (numeric == "Y") {
    numeric = true;
  }
  else {
    numeric = false;
  }
  console.log(numeric);

  
  var specChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?", "_", "-", "+", "="];
  specChar = prompt("Do you wish to use special characters (Y/N)?");
  if (specChar == "Y") {
    specChar = true;
  }
  else {
    specChar = false;
  }
  console.log(specChar);
}

function passwordText(pwLength, lowerCase, upperCase, numeric, specChar) {
      var pwArray = "";
      for (var i = 0; i < pwLength.length; i++) {
        pwArray += lowerCase[i]; upperCase[i]; numeric[i]; specChar[i];
        pwArray[i] = Math.floor(Math.random() * pwLength.length);
      }
      return passwordText.textContent();
}

passwordText.textContent = passwordDisplay; 

console.log(passwordDisplay);



