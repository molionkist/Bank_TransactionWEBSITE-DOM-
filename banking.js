//handle deposite button

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');

    const newdepositAmount = depositInput.value;
    //update deposit event

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newdepositTotal = parseFloat(previousDepositAmount) + parseFloat(newdepositAmount);
    depositTotal.innerText = newdepositTotal;
    depositInput.value = '';

    //update balance  event
    const balanceTotal = document.getElementById('balance-Total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newdepositAmount);
    balanceTotal.innerText = newBalanceTotal;


})

//update withdraw event
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-Total');
    const previousWithdrawTotal = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;
    //update balance total
    const balanceTotal = document.getElementById('balance-Total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal;
    withdrawInput.value = '';
})





