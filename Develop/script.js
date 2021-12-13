// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var specialCharactersConfirm = window.confirm("Would you like Special Characters in your Password?");
  if(!specialCharactersConfirm){
    specialCharacters = "Null"
    return specialCharacters;
  }
  else{
    window.confirm("Are you sure you want Special characters in your Password?"); 
    if(!window.confirm) {
  }
  else{
    
  }
  }
  var numbersConfirm = window.confirm("Would you like Numbers in your Password?");
  if(!numbersConfirm){
    numbers = "Null";
    return numbers;
  }
    else{
    window.confirm("Are you sure you want numbers in your Password?")
      if(!window.confirm){
        writePassword()
      }
    };
  var uppercaseLettersConfirm = window.confirm("Would you like Upper case letter in your Password?");
  if(!uppercaseLettersConfirm) {
    uppercaseLetters = "Null";
  }
  else{
    window.confirm("Are you sure you want Uppercase Letters in your password?")
    if(!window.confirm){
    }
    else{
    }
  }
  var lowercaseLettersConfirm = window.confirm("Would you like Lower case letters in your password?")
  if(!lowercaseLettersConfirm) {
   lowercaseLetters = "Null";
  }
  else{
    window.confirm("Are you sure you want Lowercase Letters in your password?")
   if(!window.confirm){
     writePassword()
   }
  }
  
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generatePassword = function() {
  var passwordLength = window.prompt("How many characters long do you want your Password to be?")
  if(passwordLength >= 8 && passwordLength <= 128){
    var passwordLengthConfirm = window.confirm("You want a password with " + passwordLength + " characters?");
}  
else{
      window.alert("Your password Needs to be between 8 characters and 128 characters")
      generatePassword();
    }
    var lowercaseLetters="abcdefghijklmnopqrstuvwxyz",
    uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numbers="123456789",
    specialCharacters =  "'!#$%&'()*+,-./:;<=>?@[\]^_`{|}~'";
    password='';
var length = Math.ceil(passwordLength/2);
length = length - 1;
var lenSpec = passwordLength-2*length;

for (i=0;i<length;i++) {
  password+=lowercaseLetters.charAt(Math.floor(Math.random()*lowercaseLetters.length));
  password+=numbers.charAt(Math.floor(Math.random()*numbers.length));
  password+=uppercaseLetters.charAt(Math.floor(Math.random()*uppercaseLetters.length))
}

for (i=0;i<lenSpec;i++)
  password+=specialCharacters.charAt(Math.floor(Math.random()*specialCharacters.length));

password=password.split('').sort(function(){return 0.5-Math.random()}).join('');

return password;

};