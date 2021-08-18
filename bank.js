// Deposit calculation done
const depositBtn = document.getElementById("deposit-btn");
function depositAndBalanceUpdate() {
  const currentDepositField = document.getElementById("deposit");

  const currentDepositValue = parseFloat(currentDepositField.value);

  const myTotalDeposit = parseFloat(
    document.getElementById("totalDeposit").innerText
  );

  const newDepositBalance = myTotalDeposit + currentDepositValue;
  document.getElementById("totalDeposit").innerText = newDepositBalance;

  // Balance Section
  const totalBalance = parseFloat(
    document.getElementById("totalBalance").innerText
  );
  console.log(totalBalance);
  const myTotalBalance = totalBalance + currentDepositValue;
  document.getElementById("totalBalance").innerText = myTotalBalance;

  currentDepositField.value = "";
}

depositBtn.addEventListener("click", depositAndBalanceUpdate);

// withdraw section

function withdrawFunc() {
  const currentWithdraw = parseFloat(
    document.getElementById("totalWithdraw").innerText
  );

  const withdrawField = parseFloat(document.getElementById("withdraw").value);

  // totalBalance section
  const totalBalance = parseFloat(
    document.getElementById("totalBalance").innerText
  );
  if (withdrawField > totalBalance) {
    alert("You have no enough balance!!");
  } else {
    const myTotalBalance2 = totalBalance - withdrawField;
    document.getElementById("totalBalance").innerText = myTotalBalance2;

    const newCurrentWithdraw = currentWithdraw + withdrawField;
    document.getElementById("totalWithdraw").innerText = newCurrentWithdraw;
  }

  document.getElementById("withdraw").value = "";
}

document.getElementById("withdraw-btn").addEventListener("click", withdrawFunc);
