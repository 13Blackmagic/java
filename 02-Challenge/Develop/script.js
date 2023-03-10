var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var password = [];
var passwordLength = 0;
var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
var passwordLength = parseInt(passwordLength);
var generateBtn = document.querySelector("#generate");


function generate () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 characters");
  return;
}
var numbers = confirm("Would you like to include numbers?");
var specialCharacters = confirm("Would you like to include special characters?");
var lowerCase = confirm("Would you like to include lowercase letters?");
var upperCase = confirm("Would you like to include uppercase letters?");
if (numbers === false && specialCharacters === false && lowerCase === false && upperCase === false) {
  alert("You must select at least one character type");
  return;
}
function generatePassword() {
  var response = prompt("How many characters would you like your password to be? (8-128)");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

do {
  // Add event listener to generate button
} while (condition);
generateBtn.addEventListener("click", writePassword);
