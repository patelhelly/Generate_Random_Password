function generateRandomPassword() {
    var password = "";
    var characters = "0123456789";
    var length = 6;
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    
    return password;
  }
  
  function displayRandomPassword() {
    var randomPassword = generateRandomPassword();
    var passwordInput = document.getElementById("password-input");
    passwordInput.value = randomPassword;
  }