// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Criteria to be selected for passwrod to be generated

function generatePassword() {
  var length = parseInt(prompt("Enter the password length:"));

  // This defines the length of the password
  while (isNaN(length) || length < 8 || length > 128) {
  length = parseInt(prompt("Invalid length! Please enter a number between 8 and 128:"));
  }

  var includeUppercase = confirm("Include uppercase characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");



  // Type of characters to be included in the password
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-="; //noticed I can't include Back Slash
  
  var criteria = ""; //This stores the character types
  var partialPassword =""; //partial password

  // If statements to add selected character types to the character set
  if (includeUppercase) {
    criteria += uppercaseChars;

    var randomIndex = Math.floor(Math.random() * uppercaseChars.length);
    partialPassword += uppercaseChars.charAt(randomIndex);

  }
  if (includeLowercase) {
    criteria += lowercaseChars;

    var randomIndex = Math.floor(Math.random() * lowercaseChars.length);
    partialPassword += lowercaseChars.charAt(randomIndex);

  }
  if (includeNumbers) {
    criteria += numberChars;

    var randomIndex = Math.floor(Math.random() * numberChars.length);
    partialPassword += numberChars.charAt(randomIndex);
  }
  if (includeSpecial) {
    criteria += specialChars;
    var randomIndex = Math.floor(Math.random() * specialChars.length);
    partialPassword += specialChars.charAt(randomIndex);
  }

  // The readonly area where the password is being displayed
  var password = partialPassword;
  for (var i = 0; i < length - partialPassword.length; i++) {
    var randomIndex = Math.floor(Math.random() * criteria.length);
    password += criteria.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
