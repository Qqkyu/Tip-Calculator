function checkBillInput() {
    let bill = document.getElementById("billInput");
    const regex = /^\d+$/;
    if(!(regex.test(bill.value)) || bill.value < 0) {
        bill.value = "";
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
    if(!regex.test(tipRate.value)) {
        tipRate.value = "";
    }
    else if(tipRate.value < 0 || tipRate.value > 100 || tipRate.value.length === 0) {
        tipRate.value = "";
    }
    else {
        tipRate.value += "%";
    }
}

function checkPeopleAmount() {
    let people = document.getElementById("peopleAmount");
    if(people.value <= 0) {
        people.value = "";
    }
}