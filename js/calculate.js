document.getElementById('deposite-btn').addEventListener("click", function () {
    const depositeField = document.getElementById("deposite-amount");
    const newDepositeAmount = parseFloat(depositeField.value);

    if (isNaN(newDepositeAmount)) {
        alert("Please probide a Number");
    }
    else {
        let previousAmountString = document.getElementById("previous-deposite");
        const previousAmount = parseFloat(previousAmountString.innerText);

        previousAmountString.innerText = previousAmount + newDepositeAmount;

        let previousTotalString = document.getElementById("pre-total");
        const previousTotal = parseFloat(previousTotalString.innerText);

        previousTotalString.innerText = previousTotal + newDepositeAmount;
    }

    depositeField.value = " ";

})

// Withdraw start
document.getElementById('Withdraw-btn').addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-amount");
    const newWithdrawAmount = parseFloat(withdrawField.value);

    if (isNaN(newWithdrawAmount)) {
        alert("Please probide a Number");
    }
    else {
        let previousAmountString = document.getElementById("previous-withdraw");
        const previousAmount = parseFloat(previousAmountString.innerText);

        previousAmountString.innerText = previousAmount + newWithdrawAmount;

        let previousTotalString = document.getElementById("pre-total");
        const previousTotal = parseFloat(previousTotalString.innerText);

        previousTotalString.innerText = previousTotal - newWithdrawAmount;
    }

    depositeField.value = " ";
})
// Withdraw end
