var generateBtn = document.querySelector("#generate");
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var password = generatePassword()
//var passwordtext= document.querySelector("#password");





function generatePassword() {
  
  var passwordLength = prompt("How many characters would you like your password to be?");
  var numbers = confirm("Would you like to include numbers?");
  var specialCharacters = confirm("Would you like to include special characters?");
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  arguments = [passwordLength, numbers, specialCharacters, lowerCase, upperCase];
  let passwordChars = [];
  let password  = '';

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
  //
  }
  if (numbers === false && specialCharacters === false && lowerCase === false && upperCase === false) {
    alert("You must select at least one character type");
   //
  }
  if (numbers === true) {
    passwordChars = passwordChars.concat(num);
  }
  if (specialCharacters === true) {
    passwordChars = passwordChars.concat(special);
  }
  if (lowerCase === true) {
    passwordChars = passwordChars.concat(lower);
  }
  if (upperCase === true) {
    passwordChars = passwordChars.concat(upper);
  }
  console.log("passwordChars = ", passwordChars);

  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars[random];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Assignment Code
  // Add event listener to generate button
//  assignBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);
// addEventListener.apply(generateBtn, writePassword);
