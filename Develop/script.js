// Assignment Code 


function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numericChars = "0123456789".split("");
  var specialChars = "!@#$%^&*()_+{}:\"<>?|[];',./`~".split("");

  var length = prompt("How many characters do you want your password to be? (Choose a length of at least 8 characters and no more than 128 characters)");
  var includeLowercase = confirm("Do you want to include lowercase letters in your password?");
  var includeUppercase = confirm("Do you want to include uppercase letters in your password?");
  var includeNumeric = confirm("Do you want to include numeric characters in your password?");
  var includeSpecial = confirm("Do you want to include special characters in your password?");

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid input for password length.");
    return;
  }

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one type of character to include in your password.");
    return;
  }

  var password = "";
  var chars = [];
  if (includeLowercase) chars = chars.concat(lowercaseChars);
  if (includeUppercase) chars = chars.concat(uppercaseChars);
  if (includeNumeric) chars = chars.concat(numericChars);
  if (includeSpecial) chars = chars.concat(specialChars);

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  document.getElementById("password").innerHTML = "Your password is: " + password;
}
