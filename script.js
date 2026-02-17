let balance = 500;

function updateBalance(){
    const walletBoxes = document.querySelectorAll(".wallet-box");
    walletBoxes.forEach(box=>{
        box.innerText = "₹ " + balance.toFixed(2);
    });
}

function recharge(){
    let amount = prompt("Enter recharge amount:");
    if(amount && amount > 0){
        balance += parseInt(amount);
        alert("Recharge Successful!");
        updateBalance();
    }
}

function withdraw(){
    let amount = prompt("Enter withdraw amount:");
    if(amount && amount <= balance){
        balance -= parseInt(amount);
        alert("Withdraw Successful!");
        updateBalance();
    } else {
        alert("Insufficient Balance!");
    }
}

function play(){
    alert("Game Started!");
}

window.onload = updateBalance;
