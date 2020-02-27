# PasswordGenerator
## Project Description:
This is a random password generator that will incorporate the user's choices of character type and password length to generate a random password. 
* Upon clicking the "Generate Password" button, the user will be alerted with a message instructing them to next choose yes/no to four character types (lower case letters, upper case letters, numbers, and/or special characters). 
* These four character type choices will appear in the subsequent four confirm boxes. The user is required to choose reply with "OK" to at least one of the four character types; if user selects "Cancel" for all, the program will tell the user through an alert that at least one character type is required to proceed.
* Once the user makes their choice(s) of character type, he/she will then be prompted to provide their preferred password length (number of characters). The user will be instructed to input a number that is at least 8, and no more than 128. If the user puts a number outside of this range, he/she will receive an alert saying that the password could not be generated, and will be told to try again. 
* If the user inputs something other than a number (ie a letter or symbol), the password generator will fail to create a password; the user will have to retry from the beginning.
* When the user finishes selecting their character criteria and inputing their desired password length, the program will alert the user to their choices made, and then create the randomly generated password.
* The program works by pulling possible characters from an array of the four character types stored as values (lower & upper case letters, numbers, and special characters); these four values each store their own string of characters. This can be seen in the getRandom__ functions. 
* The for-loop will run through the length of the password (based on the user's input), randomizing a character for each iteration.
* Finally, the randomly generated password is displayed in the password input box. The user can then copy their generated password. However, clicking the "Generate Password" button again will cause the already-generated password to disappear forever.
### Character Types and Randomized Possibilities:
* Lower Case Letters: `abcdefghijklmnopqrstuvwxyz`
* Upper Case Letters: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
* Numbers: `0123456789`
* Special Characters: `!@#$%^&*()-_=+,./<>?[]{}~`

## URLS:
* deployed application: https://craindavis.github.io/PasswordGenerator/
* GitHub Repository: https://github.com/CrainDavis/PasswordGenerator
