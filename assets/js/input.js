function checkBillInput() {
    let bill = document.getElementById("billInput");
    const regex = /^\d+$/;
    if(!(regex.test(bill.value)) || bill.value < 0) {
        if(bill.value.charAt(0) === '+') {
            bill.value = bill.value.slice(1, bill.value.length);
        }
        else {
            bill.value = "";
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