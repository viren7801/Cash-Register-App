const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");

const cashDiv = document.querySelector(".cash-div")
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const availableNotes = [2000,500,100,20,10,5,1];

function hideDiv() {
    hideMessage()
    if(Number(billAmount.value)>0) {
        nextButton.style.display = "none";
        cashDiv.style.display = "block";
    } else {
        showMessage("Enter valid bill amount")
    }
}



function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if(Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash provided should atleast be equal to the bill amount");
        }
    } else {
      showMessage("Invalid Bill Amount");
    }
};




function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
    message.innerText = msg;
    message.style.display = "block"
}

function hideMessage() {
    message.style.display = "none"
}

checkButton.addEventListener("click", validateBillAndCashAmount)
nextButton.addEventListener("click", hideDiv)