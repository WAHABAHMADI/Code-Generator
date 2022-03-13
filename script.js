// Assignment Code
var generateBtn = document.querySelector("#generate");
//create variables for all the character classes that we will work with
var wholepassword = []
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

var specialcharecters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

function generatePassword() {
  wholepassword = []
  //need to ask the user the length of their password
  var length = parseInt(prompt("How long would you like your password to be?"));
  //need to make sure the user selected between 8-128 characters max
  if (length < 8 || length > 128) {
    alert("The password can't be lessthen 8 or more then 128 characters");
    return null;
  }

  //what happens if the user types in Eight instead of 8
  if (isNaN(length)) {
    alert("Please declair in numbers");
    return null;
  }
  //need to ask if they want uppercase characters
  var isUppercase = confirm("would you like to add uppercase letter? ") 

  //need to ask if they want lowercase characters
  var isLowercase = confirm("would you like to add loWercase letter? ")

  //need to ask if they Want special characters
  var isSpecialcharacters = confirm("Would you like to add special characters? ")
  
  //need to ask if they want numbers
  var isNumbers = confirm("Would you like to add numbers? ")

console.log(isUppercase)
  //check if the user made atleast 1 choice from the confirms. if not make sure that they choose atlease 1 option.
if(isUppercase) {
   wholepassword = wholepassword.concat(capitalLetters)
}

if(isLowercase) {
   wholepassword =  wholepassword.concat(lowercase)
}

if(isSpecialcharacters) {
   wholepassword = wholepassword.concat(specialcharecters)
}

if(isNumbers) {
  wholepassword =  wholepassword.concat(numbers)
}

console.log(wholepassword)

  //create a function that will randomize any array that is passed into it.
 var result = "";
  for ( var i = 0; i < length; i++) {
  result = result + wholepassword[Math.floor(Math.random() * wholepassword.length)]
 }
console.log (result)
 
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
