var generate = document.querySelector("#generate");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var password = generatePassword()
var passwordtext= document.querySelector("#password");

addEventListener("click"), function() {
}


function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?");
  var numbers = confirm("Would you like to include numbers?");
  var specialCharacters = confirm("Would you like to include special characters?");
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  arguments = [passwordLength, numbers, specialCharacters, lowerCase, upperCase];
  return arguments;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Assignment Code
  // Add event listener to generate button
  assignBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);
addEventListener.apply(generateBtn, writePassword);
