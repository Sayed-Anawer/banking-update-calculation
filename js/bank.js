// Deposit calculation done
const depositBtn = document.getElementById("deposit-btn");

// collecting input value from (Deposit or Withdraw) inputField.
function inputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputField.value);

  inputField.value = "";
  return inputFieldValue;
}

// Add value to (Deposit or Withdraw) innerText
function calculation(textId,inputId2) {
  const totalAmount = parseFloat(document.getElementById(textId).innerText);
  
  // calling inputValue function which have the value of input field.
  const amount = inputValue(inputId2);
  const updateAmount = parseFloat((totalAmount + amount).toFixed(2));
  document.getElementById(textId).innerText = updateAmount;

  return updateAmount;
}

// // Balance calculation section
// function balanceUpdate(balanceText, inputId) {
//   const inputField = document.getElementById(inputId);
//   const inputFieldValue = parseFloat(inputField.value);
//   const totalBalanceText = document.getElementById(balanceText);
//   const totalBalanceValue = parseFloat(totalBalanceText.innerText);

//   const updateTotalBalance = parseFloat(
//     (totalBalanceValue + inputFieldValue).toFixed(2)
//   );

//   totalBalanceText.innerText = updateTotalBalance;
// }

depositBtn.addEventListener("click", function () {
  // Common (deposit + withdraw) section calculation
  // const inputField = document.getElementById("deposit");

  // const inputFieldValue = parseFloat(inputField.value);

  // const updateAmount = parseFloat((totalAmount + inputFieldValue).toFixed(2));
  // document.getElementById("totalDeposit").innerText = updateAmount;

  inputValue("deposit");
  calculation("totalDeposit","deposit");

  // Balance Section Calcultaion
  // const totalBalanceText = document.getElementById("totalBalance");
  // const totalBalanceValue = parseFloat(totalBalanceText.innerText);

  // const updateTotalBalance = parseFloat((totalBalanceValue + inputFieldValue).toFixed(2));

  // totalBalanceText.innerText = updateTotalBalance;

  // inputField.value = "";
});

// withdraw section

function withdrawFunc() {
  // const currentWithdraw = parseFloat(
  //   document.getElementById("totalWithdraw").innerText
  // );

  // const withdrawField = parseFloat(document.getElementById("withdraw").value);

  // // totalBalance section
  // const totalBalance = parseFloat(
  //   document.getElementById("totalBalance").innerText
  // );
  // if (withdrawField > totalBalance) {
  //   alert("You have no enough balance!!");
  // } else {
  //   const myTotalBalance2 = totalBalance - withdrawField;
  //   document.getElementById("totalBalance").innerText = myTotalBalance2;

  //   const newCurrentWithdraw = currentWithdraw + withdrawField;
  //   document.getElementById("totalWithdraw").innerText = newCurrentWithdraw;
  // }

  // document.getElementById("withdraw").value = "";

  inputValue("withdraw");
  calculation("totalWithdraw","withdraw");
}

document.getElementById("withdraw-btn").addEventListener("click", withdrawFunc);
