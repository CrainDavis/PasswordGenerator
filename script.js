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

/////////////////////////////////////////////////////////////////////////

// object with generator functions:
var randomFunction = {
  lettersLower : getRandomLower,
  lettersUpper : getRandomUpper,
  numbers : getRandomNumber,
  specialChars : getRandomSymbol
};

// clicking "Generate Password" button => PASSWORD CRITERIA SELECTION & GENERATES PASSWORD:
function generatePassword() {
  // PASSWORD CRITERIA SELECTION:
  // user selects their password character type criteria:
  alert("What character type(s) will your password have?\n(lower or upper case letters, numbers, and/or special characters)");
  var lettersLower = confirm("Do you want lower case letters?\n( abcdefghijklmnopqrstuvwxyz )");
  var lettersUpper = confirm("Do you want upper case letters?\n( ABCDEFGHIJKLMNOPQRSTUVWXYZ )");
  var numbers = confirm("Do you want numbers?\n( 0123456789 )");
  var specialChars = confirm("Do you want special characters?\n( !@#$%^&*()-_=+,./<>?[]{}`~ )");
  // Create a variable to store the user selections . . .
  var userChoices = lettersLower + lettersUpper + numbers + specialChars;
  // ensures that user selects at least one character type:
  if (userChoices === 0) {
    return alert("You need to select at least ONE character type.")
  }

  // prompt user for password length, store in variable (passwordLength):
  var passwordLength = parseInt(
    prompt("How long will the password be?\nChoose a number that is at least 8 and no more than 128.")
  );
  // establish requirements for password length, and re-prompts if input does not match requirements:
  while (
    passwordLength < 8 || passwordLength > 128 || typeof passwordLength != "number" || passwordLength === NaN || passwordLength === null) {
    alert("Cannot generate password.");
    var passwordLength = parseInt(
      prompt("Select length of password, between 8 and 128.")
    );
  }
  // alert telling the user their length & character choices:
  if (passwordLength > 7 && passwordLength < 129) {
    alert(
    "Lower case letters: " + lettersLower + 
    "\nUpper case letters: " + lettersUpper + 
    "\nNumbers: " + numbers + 
    "\nSpecial characters: " + specialChars +
    "\n--------------" +
    "\nPassword length: " + passwordLength + " characters"
    );
  }

  // PASSWORD CREATION:
  var generatedPassword = "";
  // create an array that will contain all the character type choices; filters out false values
  var charTypesArray = [ {lettersLower}, {lettersUpper}, {numbers}, {specialChars}] .filter(item => Object.values(item)[0]);
  // for loop to generate the password
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

/////////////////////////////////////////////////////////////////////////

// GENERATOR FUNCTIONS:
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
