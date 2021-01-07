function removeCurrentDescriptionIconClass() {
    if(document.getElementById("cur-opt-icon").classList.contains("fa-angry")) {
        document.getElementById("cur-opt-icon").classList.remove("fa-angry");
    }
    else if(document.getElementById("cur-opt-icon").classList.contains("fa-frown")) {
        document.getElementById("cur-opt-icon").classList.remove("fa-frown");
    }
    else if(document.getElementById("cur-opt-icon").classList.contains("fa-meh")) {
        document.getElementById("cur-opt-icon").classList.remove("fa-meh");
    }
    else if(document.getElementById("cur-opt-icon").classList.contains("fa-grin")) {
        document.getElementById("cur-opt-icon").classList.remove("fa-grin");
    }
    else if(document.getElementById("cur-opt-icon").classList.contains("fa-laugh-beam")) {
        document.getElementById("cur-opt-icon").classList.remove("fa-laugh-beam");
    }
    else if(document.getElementById("cur-opt-icon").classList.contains("fa-grin-stars")) {
        document.getElementById("cur-opt-icon").classList.remove("fa-grin-stars");
    }
    else if(document.getElementById("cur-opt-icon").classList.contains("fa-grin-hearts")) {
        document.getElementById("cur-opt-icon").classList.remove("fa-grin-hearts");
    }
}

function addCurrentDescriptionIconClass(value) {
    // Icons associated with options.
    let tipIcons = new Map([
        ["very-poor", "fa-angry"], ["poor", "fa-frown"], ["average", "fa-meh"], 
        ["good", "fa-grin"], ["excellent", "fa-laugh-beam"], ["outstanding", "fa-grin-stars"], 
        ["relative", "fa-grin-hearts"]
    ]);
    document.getElementById("cur-opt-icon").classList.add(tipIcons.get(value));
}

function displayOptionInfo(obj) {
    document.getElementById("option-desc").style.display = "flex";
    // Select values with tip rates.
    let tipRates = new Map([
        ["very-poor", "Very poor: 0-10%"], ["poor", "Poor: 10-15%"], 
        ["average", "Average: 15-20%"], ["good", "Good: 20-25%"],
        ["excellent", "Excellent: 25-30%"], ["outstanding", "Outstanding: 30-35%"],
        ["relative", "Relative: 35%+"]
    ]);
    // Change description based on current select option.
    let value = obj.value;
    document.getElementById("val-desc").innerHTML = tipRates.get(value);
    // Change icon accordingly.
    removeCurrentDescriptionIconClass();
    addCurrentDescriptionIconClass(value);
}