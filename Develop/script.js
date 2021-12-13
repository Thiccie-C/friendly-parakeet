// Assignment code here

// Get references to the #generate element


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
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
      writePassword();
    }
  var lowerCaseLetters="abcdefghijklmnopqrstuvwxyz",
  upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numbers="123456789",
  specialCharacters = 
  password='';
var length = Math.ceil(passwordLength/2);
length = length - 1;
var lenSpec = passwordLength-2*length;

for (i=0;i<length;i++) {
  password+=lowerCaseLetters.charAt(Math.floor(Math.random()*lowerCaseLetters.length));
  password+=numbers.charAt(Math.floor(Math.random()*numbers.length));
  password+=upperCaseLetters.charAt(Math.floor(Math.random()*upperCaseLetters.length))
}

for (i=0;i<lenSpec;i++)
  password+=specialCharacters.charAt(Math.floor(Math.random()*specialCharacters.length));

password=password.split('').sort(function(){return 0.5-Math.random()}).join('');

return password;

};