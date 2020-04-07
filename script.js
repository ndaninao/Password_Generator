// Assignment Code
//window.addEventListener('load', function () {
    console.log("It's loaded!")
    var generateBtn = document.getElementById("generate");
    console.log(generateBtn)
    generateBtn.addEventListener("click", writePassword);
//})

var userInput = {};

/*obj["key"]="value"*/

let finalArray = [];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?", "_", "-", "+", "="];

var passwordDisplay = document.getElementById("password");
console.log(passwordDisplay);

// Write password to the #password input

function writePassword() {
  pwLength = prompt("Please enter the length of your password (between 8 and 128).");
  if (pwLength >= "8" && pwLength <= "128") {
    prompt === true;
  }
  else {
    prompt === false;
  }
  userInput["length"]=pwLength;
  userInput.length=pwLength;
  console.log(pwLength);

  
  lowerCaseInput = confirm("Do you wish to use lowercase characters (Y/N)?");
  if (lowerCaseInput) {
    finalArray = finalArray.concat(lowerCase);
  }
  console.log(finalArray);

  
  upperCaseInput = confirm("Do you wish to use uppercase characters (Y/N)?");
  if (upperCaseInput) {
    finalArray = finalArray.concat(upperCase);
  }
  console.log(upperCaseInput);
  
  numericInput = confirm("Do you wish to use numbers (Y/N)?");
  if (numericInput) {
   finalArray = finalArray.concat(numeric);
  }
  console.log(numericInput);

  specCharInput = confirm("Do you wish to use special characters (Y/N)?");
  if (specCharInput) {
   finalArray = finalArray.concat(specChar);
  }
  console.log(specCharInput);

 generateRandom(finalArray, pwLength);

};



function generateRandom(letters, length) {
  console.log(length);
  console.log(letters);
  let password = "";
  for (var i = 0; i < length; i++) {
   var random = Math.floor(Math.random() * letters.length);
   password = password + letters[random];
  console.log(i);
  };
  document.getElementById("password").value = password;
};


console.log(generateRandom);

