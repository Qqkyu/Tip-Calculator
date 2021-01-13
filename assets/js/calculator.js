function isInputFilled() {
    let bill = document.getElementById("billInput").value;
    let tipRate = document.getElementById("tipRate").value;
    let people = document.getElementById("peopleAmount").value;
    return bill.length != 0 && tipRate.length != 0 && people.length != 0;
}

function percentage(percent, total) {
    return ((percent/ 100) * total).toFixed(2);
}

function calculateTip() {
    let blankInputInfo = document.getElementById("blankInput");
    let result = document.getElementById("result");
    if(!isInputFilled()) {
        result.style.display = "none";
        blankInputInfo.style.display = "block";
    }
    else {
        // Change visibility.
        blankInputInfo.style.display = "none";
        result.style.display = "block";
        // Get values.
        let bill = parseInt(document.getElementById("billInput").value);
        let tipRate = parseInt(document.getElementById("tipRate").value);
        let people = parseInt(document.getElementById("peopleAmount").value);
        // Display result.
        if(people === 1) {
            document.getElementById("totalTip").innerHTML = `Tip: ${percentage(tipRate, bill)}$`;
            document.getElementById("totalBill").innerHTML = `Total (bill + tip): ${(bill + parseFloat(percentage(tipRate, bill))).toFixed(2)}$`;
            document.getElementById("perPersonInfo").style.display = "none";
        }
        else {
            document.getElementById("totalTip").innerHTML = `Tip: ${(parseFloat(percentage(tipRate, bill)) / people).toFixed(2)}$`;
            document.getElementById("totalBill").innerHTML = `Total (bill + tip): ${((bill + parseFloat(percentage(tipRate, bill))) / people).toFixed(2)}$`;
            document.getElementById("perPersonInfo").style.display = "block";
        }
    }
}