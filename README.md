# PasswordGenerator
-------------------------------------------------------------------------------------------------------
## Project Description:
This is a random password generator that, by incorporating the user's choices of character type and password length, will generate a randomized password such as the following: 
```
bT1(aA6@yS2<
wX2aY2zV
6,8[0%0{3%
vH6vL7qS9sK9lN5jL4rC6oO7q
kY1-kE9)fG0^cS9=fE5[fB3}oJ8?uK5-hB9=oE5]nP9$mH4[bE1-kL5#aI8)uH9$oA7$eG6?aV0,oZ2=cR1-lD6?fN2-kB8]rW4=
```
## What does this program do?
* Upon clicking the "Generate Password" button, the user will first be alerted with a message instructing them to next choose yes/no to the four character types (choices to be made in the subsequent four confirms):
    * lower case letters `abcdefghijklmnopqrstuvwxyz`
    * upper case letters `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    * numbers `0123456789`
    * special characters `!@#$%^&*()-_=+,./<>?[]{}~`
* The user is required to choose "OK" to at least one of the four character types; if user selects "Cancel" for all, the program will tell the user through an alert that at least one character type is required to proceed, and the user will need to re-click the "Generate Password" button.
* Once the user makes their choice of character type(s), he/she will then be prompted to input their choice of password length (number of characters in password). The user will be instructed to input a number that is at least 8, and no more than 128. If the user puts a number outside of this range, he/she will receive an alert saying that the password could not be generated, and will be told to try to input a number again. 
* If the user inputs something other than a number (ie, a letter or symbol) or leaves the input box empty, the password generator will fail to create a password; the user will have to restart the password criteria selection process.
* When the user finishes selecting their character criteria and inputing their desired password length, the program will notify the user of the choices they made, and then display the randomly generated password.
* The program runs by pulling possible characters from the object storing each of the four character type values (lower & upper case letters, numbers, and special characters); a filter method is used to remove undesired password character choices. The possible characters for each variable are stored in the getRandom__ functions.
* The for-loop will run for the length of the password (based on the user's input), randomizing a character for each iteration, and the slice method allows for just a portion of the character types array to be selected based on the user's selected length.
* Finally, the randomly generated password is displayed in the password input box. The user can then copy their generated password. However, clicking the "Generate Password" button again will cause the already-generated password to disappear forever.

## URLS:
* deployed application: https://craindavis.github.io/PasswordGenerator/
* GitHub Repository: https://github.com/CrainDavis/PasswordGenerator
