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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// object with generator functions:
var randomFunction = {
  lettersLower: getRandomLower,
  lettersUpper: getRandomUpper,
  numbers: getRandomNumber,
  specialChars: getRandomSymbol,
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// clicking "Generate Password" button => PASSWORD CRITERIA SELECTION & GENERATES PASSWORD:
function generatePassword() {
  // PASSWORD CRITERIA SELECTION:
  // user selects their password character type criteria:
  alert(
    "Select which character type(s) your password should have:\n(lower or upper case letters, numbers, and/or special characters)."
  );
  var lettersLower = confirm(
    "Do you want lower case letters?\n( abcdefghijklmnopqrstuvwxyz )"
  );
  var lettersUpper = confirm(
    "Do you want upper case letters?\n( ABCDEFGHIJKLMNOPQRSTUVWXYZ )"
  );
  var numbers = confirm("Do you want numbers?\n( 0123456789 )");
  var specialChars = confirm(
    "Do you want special characters?\n( !@#$%^&*()-_=+,./<>?[]{}`~ )"
  );
  // Create a variable to store the user selections . . .
  var userChoices = lettersLower + lettersUpper + numbers + specialChars;
  console.log("number of true user choices: " + userChoices);
  console.log("--------------");
  // ensures that user selects at least one character type:
  if (userChoices === 0) {
    return alert("You need to select at least ONE character type.");
  }
  console.log("Lower case letters: " + lettersLower);
  console.log("Upper case letters: " + lettersUpper);
  console.log("Numbers: " + numbers);
  console.log("Special characters: " + specialChars);
  console.log("--------------");

  // prompt user for password length, store in variable (passwordLength):
  var passwordLength = prompt(
    "How many characters will the password contain?\nPlease input a NUMBER (8-128)."
  );
  // if user clicks "cancel"
  if (passwordLength === null) {
    return;
  }

  // establish requirements for password length, and re-prompts if input does not match range requirement or if input space is left blank:
  while (passwordLength < 8 || passwordLength > 128 || passwordLength === "") {
    alert("Please input a number between 8 and 128.");
    var passwordLength = prompt(
      "How many characters will the password contain?\nPlease input a NUMBER (8-128)."
    );
    // if user clicks "cancel"
    if (passwordLength === null) {
      return;
    }
  }

  console.log("Password length: " + passwordLength + " characters");
  console.log("--------------");

  // PASSWORD CREATION:
  var generatedPassword = "";
  // create an array that will contain all the character type choices; filters out false values
  var charTypesArray = [
    { lettersLower },
    { lettersUpper },
    { numbers },
    { specialChars },
  ].filter((item) => Object.values(item)[0]);
  // for loop to generate the password
  for (let i = 0; i < passwordLength; i += userChoices) {
    charTypesArray.forEach((type) => {
      var funcName = Object.keys(type)[0];
      generatedPassword += randomFunction[funcName]();
    });
  }
  console.log("User's new password " + generatedPassword);
  console.log("--------------");

  // returning the new password to the user via input box
  const password = generatedPassword.slice(0, passwordLength);
  // slice ensures that the generated password has the user's chosen length rather than creating one with a length divisible by the number of generator functions used
  return password;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GENERATOR FUNCTIONS -- character randomizer:
function getRandomLower() {
  const lettersLower = "abcdefghijklmnopqrstuvwxyz";
  return lettersLower[Math.floor(Math.random() * lettersLower.length)];
}
function getRandomUpper() {
  const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
}
function getRandomNumber() {
  const numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getRandomSymbol() {
  const specialChars = "!@#$%^&*()-_=+,./<>?[]{}~";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
