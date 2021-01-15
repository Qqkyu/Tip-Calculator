function checkBillInput() {
    let bill = document.getElementById("billInput");
    // Get rid of + sign and 0s at the beginning.
    const regex = /^\+?0*(\d+\.?)(\d*)$/;   // Capture integer-part and fractional-part separately.
    let found = bill.value.match(regex);
    // Check whether input is valid.
    if(!found || bill.value < 0) {
        bill.value = "";
    }
    else if(found[1][found[1].length - 1] === ".") {
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
    else {
        bill.value = found[1];
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
    // Get rid of + sign and 0s at the beginning.
    const regex = /^\+?(-?0*(\d+))%*?/;
    let found = tipRate.value.match(regex);
    // Check whether input is valid.
    if(!found || found[2].length === 0) {
        tipRate.value = ""; 
    }
    else if(found[1] < 0) {
        tipRate.value = "0%";
    }
    else if(found[1] > 100) {
        tipRate.value = "100%";
    }
    else {
        tipRate.value = found[2] + "%";
    }
}

function checkPeopleAmount() {
    let people = document.getElementById("peopleAmount");
    const regex = /^\d+$/;
    if(!regex.test(people.value) || people.value <= 0) {
        people.value = "";
    }
}