// Assignment Code
var generateBtn = document.querySelector("#generate"); 

var randomFunction = {
  lettersLower : getRandomLower,
  lettersUpper : getRandomUpper,
  numbers : getRandomNumber,
  specialChars : getRandomSymbol
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// clicking "Generate Password" button will lead to prompts/confrims asking for user to input their desired password length and character parameters:
function generatePassword() {
  // asking for user input of password character criteria:
  alert("Select what kind of character types you want");
  var lettersLower = confirm("Do you want lower case letters?");
  var lettersUpper = confirm("Do you want upper case letters?");
  var numbers = confirm("Do you want numbers?");
  var specialChars = confirm("Do you want special characters?");

  var userChoices = lettersLower + lettersUpper + numbers + specialChars;

  if (userChoices === 0) {
    return alert("You need to select at least ONE character type.")
  }

  var passwordLength = parseInt(
    prompt("Input a password length. It must be between 8 and 128.")
  );

  while (
    passwordLength < 8 ||
    passwordLength > 128 ||
    typeof passwordLength != "number" ||
    passwordLength === NaN ||
    passwordLength === null
  ) {
    alert("Your password must be at least 8, and no more than 128.");

    var passwordLength = parseInt(
      prompt("Select length of password, between 8 and 128.")
    );
  }
  
  // Create password:
  var generatePassword = "";

  var charTypesArray = [
    {lettersLower},
    {lettersUpper},
    {numbers},
    {specialChars}
  ] .filter(item => Object.values(item)[0]);

  for (let i = 0; i < passwordLength; i += userChoices) {
    charTypesArray.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatePassword += randomFunction[funcName]();
    });
  }
  
  // returning the new password to the user via input box
  const finalPassword = generatePassword.slice(0, passwordLength);
  return finalPassword;
}

// Generator Functions -- randomly selected from character sets seen below)
function getRandomLower() {
  const lettersLower = "abcdefghijklmnopqrstuvwxyz"
  return lettersLower[Math.floor(Math.random() * lettersLower.length)];
}
function getRandomUpper() {
  const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
}
function getRandomNumber() {
  const numbers = "0123456789"
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getRandomSymbol() {
  const specialChars = "!@#$%^&*()-_=+,./<>?[]{}`~"
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}