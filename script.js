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
function writePassword() {
  // user chooses the length of their password
  var passwordLength = parseInt(
    prompt("How long do you want your password to be?\nYour password must be at least 8 characters, and no more than 128.")
  );
  if(passwordLength < 8 || passwordLength > 128 || typeof passwordLength != "number" || passwordLength === NaN || passwordLength === null) {
    return alert("password cannot be generated.");
  }
  else if (passwordLength > 7 && passwordLength < 129)  {
    alert("Password Length: " + passwordLength + " characters");
    console.log("Password Length: " + passwordLength + " characters");
    console.log("--------------");
  }

  // character parameters (lower case letters, upper case letters, numbers, and/or special characters)
  alert("Please select the type(s) of characters you want your password to have.\nYou must select at least one type.");
  var lettersLower = confirm("Will your password contain lower case letters?");
  var lettersUpper = confirm("Will your password contain upper case letters?");
  var numbers = confirm("Will your password contain numbers?");
  var specialChars = confirm("Will your password contain special characters?");

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
  alert(generatePassword);
  const finalPassword = generatePassword.slice(0, length);
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