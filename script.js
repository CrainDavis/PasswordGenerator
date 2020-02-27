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
  // user chooses the length of their password
  var passwordLength = parseInt(
    prompt("How long do you want your password to be?\nPassword must be at least 8 characters, and no more than 128.")
  );
  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Password cannot be generated.\nNumber must be between 8 and 128.");
  }
  else if (typeof passwordLength != "number" || passwordLength === NaN || passwordLength === null) {
    return alert("Please choose a NUMBER!")
  }
  else if (passwordLength > 7 && passwordLength < 129)  {
    alert("OK!");
    console.log("Password Length: " + passwordLength + " characters");
    console.log("--------------");
  }

  // character parameters (lower case letters, upper case letters, numbers, and/or special characters)
  alert("Select the type(s) of characters you want in the password\n(lower & upper case letters, numbers, and/or special characters).\nYou must select at least one type.");
  var lettersLower = confirm("Will your password contain lower case letters?\n(abcdefghijklmnopqrstuvwxyz)");
  var lettersUpper = confirm("Will your password contain upper case letters?\n(ABCDEFGHIJKLMNOPQRSTUVWXYZ)");
  var numbers = confirm("Will your password contain numbers?\n(0123456789)");
  var specialChars = confirm("Will your password contain special characters?\n(!@#$%^&*()-_=+,./<>?[]{}`~)");
  
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

  var userChoices = lettersLower + lettersUpper + numbers + specialChars;

  if (userChoices === 0) {
    return alert("You must choose to use at least ONE character type!")
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