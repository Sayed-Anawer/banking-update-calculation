function clickEvent() {
  const userEmail = document.getElementById("user-email");
  const emailValue = userEmail.value;
  console.log(emailValue);

  const userPassword = document.getElementById("user-password");
  const passwordValue = userPassword.value;
  console.log(passwordValue);

  window.location.href = "bank.html";
}
document.getElementById("submit-btn").addEventListener("click", clickEvent);
