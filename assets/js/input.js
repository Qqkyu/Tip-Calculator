function checkBillInput() {
    let bill = document.getElementById("billInput");
    const regex = /(^\+?\d+\.?)(\d*)$/;
    let found = bill.value.match(regex);
    // Check whether input is valid.
    if(!found || bill.value < 0) {
        bill.value = "";
    }
    else {
        if(found[1][found[1].length - 1] === ".") {
            // Decimal point - adjust accordingly.
            const decimalPointNums = found[2].length;
            if(decimalPointNums === 0) {
                bill.value = found[1] + "00";
            }
            else if(decimalPointNums === 1) {
                bill.value = found[1] + found[2] + "0";
            }
            else {
                bill.value = found[1] + found[2].slice(0, 2);
            }
        }
        if(bill.value.charAt(0) === '+') {
            // Remove unnecessary plus sign.
            bill.value = bill.value.slice(1, bill.value.length);
        }
    }
}

function removePercent() {
    let tipRate = document.getElementById("tipRate");
    const percentIndex = tipRate.value.length - 1;
    if(tipRate.value[percentIndex] === '%') {
        tipRate.value = tipRate.value.slice(0, percentIndex);
    }
}

function checkTipRateInput() {
    let tipRate = document.getElementById("tipRate");
    const regex = /^\d+$/;
    const tip = tipRate.value;
    if(!regex.test(tip) || tip < 0 || tip > 100 || tip.length === 0) {
        if(tip.charAt(0) === '+') {
            tipRate.value = tip.slice(1, tip.length) + '%';
        }
        else {
            tipRate.value = ""; 
        }
    }
    else {
        tipRate.value += "%";
    }
}

function checkPeopleAmount() {
    let people = document.getElementById("peopleAmount");
    const regex = /^\d+$/;
    if(!regex.test(people.value) || people.value <= 0) {
        people.value = "";
    }
}