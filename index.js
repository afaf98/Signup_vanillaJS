(function () {
  var form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    var nameValid = validateName();
    var surnameValid = validateSurname();
    var emailValid = validateEmail();
    var passwordValid =
      pattern.charLength() &&
      pattern.lowercase() &&
      pattern.special() &&
      pattern.uppercase();
    if (nameValid && emailValid && surnameValid && passwordValid) {
      console.log("Sending request here");
    }
  });
  function validateName() {
    x = document.getElementById("name").value;
    console.log("name surname", x);
    if (x === "") {
      document.getElementById("errorsName").innerHTML =
        "Name is a required field";
      return false;
    } else {
      return true;
    }
  }

  function validateSurname() {
    y = document.getElementById("surname").value;
    if (y === "") {
      document.getElementById("errorsSurname").innerHTML =
        "Surname is a required field";
      return false;
    } else {
      return true;
    }
  }
  function validateEmail() {
    var email = document.getElementById("email").value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var check = re.test(String(email).toLowerCase());
    if (check) {
      return check;
    } else {
      document.getElementById("errorsEmail").innerHTML = "Email not valid";
      return false;
    }
  }

  var password = document.getElementById("password");

  var helperText = {
    charLength: document.getElementById(".helper-text .length"),
    lowercase: document.querySelector(".helper-text .lowercase"),
    uppercase: document.querySelector(".helper-text .uppercase"),
    special: document.querySelector(".helper-text .special"),
  };

  var pattern = {
    charLength: function () {
      if (password.value.length >= 8) {
        document.getElementById("length").innerHTML = "";
        return true;
      } else {
        document.getElementById("length").innerHTML =
          "Must be at least 8 characters long.";
        return false;
      }
    },
    lowercase: function () {
      var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

      if (regex.test(password.value)) {
        document.getElementById("lowercase").innerHTML = "";
        return true;
      } else {
        document.getElementById("lowercase").innerHTML =
          "Must contain a lowercase letter.";
        return false;
      }
    },
    uppercase: function () {
      var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

      if (regex.test(password.value)) {
        document.getElementById("uppercase").innerHTML = "";
        return true;
      } else {
        document.getElementById("uppercase").innerHTML =
          "Must contain an uppercase letter.";
        return false;
      }
    },
    special: function () {
      var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

      if (regex.test(password.value)) {
        document.getElementById("special").innerHTML = "";
        return true;
      } else {
        document.getElementById("special").innerHTML =
          "Must contain a number or special character.";
        return false;
      }
    },
  };

  // Listen for keyup action on password field
  password.addEventListener("keyup", function () {
    //     // Check that password is a minimum of 8 characters
    pattern.charLength();

    //     // Check that password contains a lowercase letter
    pattern.lowercase();

    //     // Check that password contains an uppercase letter
    pattern.uppercase();

    //     // Check that password contains a number or special character
    pattern.special();
  });
})();
