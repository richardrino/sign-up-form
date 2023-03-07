const passwordInputs = document.querySelectorAll(".password");
const password = passwordInputs[0];
const passwordConfirm = passwordInputs[1];

password.addEventListener("input", (e) => {
  const isEqual = checkEqualPassword(password.value, passwordConfirm.value);

  if (isEqual) {
    password.classList.add("password-matches");
    password.classList.remove("password-mismatch");
    passwordConfirm.classList.add("password-matches");
    passwordConfirm.classList.remove("password-mismatch");
  } else if (passwordConfirm.value) {
    password.classList.remove("password-matches");
    password.classList.add("password-mismatch");
    passwordConfirm.classList.remove("password-matches");
    passwordConfirm.classList.add("password-mismatch");
  }

  if (!password.value && !passwordConfirm.value) {
    password.classList.remove("password-matches");
    passwordConfirm.classList.remove("password-matches");
    password.classList.remove("password-mismatch");
    passwordConfirm.classList.remove("password-mismatch");
  }
});

function checkEqualPassword(pass1, pass2) {
  if (pass1 === pass2) return true;
  else return false;
}

passwordConfirm.addEventListener("input", (e) => {
  const isEqual = checkEqualPassword(passwordConfirm.value, password.value);

  if (isEqual) {
    password.classList.add("password-matches");
    password.classList.remove("password-mismatch");
    passwordConfirm.classList.add("password-matches");
    passwordConfirm.classList.remove("password-mismatch");
  } else if (passwordConfirm.value) {
    password.classList.remove("password-matches");
    password.classList.add("password-mismatch");
    passwordConfirm.classList.remove("password-matches");
    passwordConfirm.classList.add("password-mismatch");
  }

  if (!password.value && !passwordConfirm.value) {
    password.classList.remove("password-matches");
    passwordConfirm.classList.remove("password-matches");
    password.classList.remove("password-mismatch");
    passwordConfirm.classList.remove("password-mismatch");
  }
});
