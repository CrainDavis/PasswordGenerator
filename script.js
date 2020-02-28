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

// clicking "Generate Password" button will lead to prompts/confrims asking for user to input their desired character parameters and password length:
function generatePassword() {
  // asking for user input of password character criteria:
  alert("What character type(s) will your password have?\n(lower or upper case letters, numbers, and/or special characters)");
  var lettersLower = confirm("Do you want lower case letters?\n(abcdefghijklmnopqrstuvwxyz)");
  var lettersUpper = confirm("Do you want upper case letters?\n(ABCDEFGHIJKLMNOPQRSTUVWXYZ)");
  var numbers = confirm("Do you want numbers?\n(0123456789)");
  var specialChars = confirm("Do you want special characters?\n(!@#$%^&*()-_=+,./<>?[]{}`~)");

  var userChoices = lettersLower + lettersUpper + numbers + specialChars;

  // assures that user selects at least one character type
  if (userChoices === 0) {
    return alert("You need to select at least ONE character type.")
  }

  // asking user to input their desired password length:
  var passwordLength = parseInt(
    prompt("How long will the password be?\nChoose a number that is at least 8 and no more than 128.")
  );

  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    typeof passwordLength != "number" ||
    passwordLength === NaN ||
    passwordLength === null
  ) {
    // if user picks a number not between 8-128, enters something other than a number, leaves the field blank, or cancels
    alert("Cannot generate password.");

    var passwordLength = parseInt(
      prompt("Select length of password, between 8 and 128.")
    );
  }

  // alert telling the user their length & character choices:
  alert("Password length: " + passwordLength + " characters" +
  "\n--------------" +
  "\nLower case letters: " + lettersLower + 
  "\nUpper case letters: " + lettersUpper + 
  "\nNumbers: " + numbers + 
  "\nSpecial characters: " + specialChars);
  // logging the user's chosen password criteria into the console:
  console.log("Lower case letters: " + lettersLower);
  console.log("Upper case letters: " + lettersUpper);
  console.log("Numbers: " + numbers);
  console.log("Special characters: " + specialChars);
  console.log("--------------");
  
  // Create password:
  var generatedPassword = "";

  // create an object that will contain all the character type choices; filtered out by user's choices
  var charTypesArray = [ {lettersLower}, {lettersUpper}, {numbers}, {specialChars}] .filter(item => Object.values(item)[0]);

  // for loop that creates the randomized password by first looping through the user's character choices (in the order seen in the charTypesArray)
  // the for loop, for each index of the password, then uses the corresponding generator function to randomly pick a character
  for (let i = 0; i < passwordLength; i += userChoices) {
    charTypesArray.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatedPassword += randomFunction[funcName]();
    });
  }
  
  // returning the new password to the user via input box
  const password = generatedPassword.slice(0, passwordLength);
  return password;
}

// Generator Functions -- once character type is determined, a character corresponding to the type is randomly selected)
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
  const specialChars = "!@#$%^&*()-_=+,./<>?[]{}~"
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}