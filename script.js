var arrayItems = ["Apple", "Banana", "Cherry", "Dragonfruit", "Pear", "Watermelon", "Grapes"];

const arrayDisplay = document.getElementById("arrayDisplay");

const output = document.getElementById("output");

const addValueInput = document.getElementById("addValue");



function refreshDisplay(){

let text = "[";
for (let i = 0; i < arrayItems.length; i++){
    text += arrayItems[i];
    if (i < arrayItems.length - 1) text += ",";
}
text += "]";
arrayDisplay.innerText = text;
} 



function validateInput(value){
    if (value === null) return false;
    const trimmed = value.toString().trim();
    return trimmed.length >0;
}



function showArray(){
    if (arrayItems.length === 0){
        output.innerText = "The array is empty :p ";
        refreshDisplay();
        return;
    }

    let result = "Array (forward):\n";
    for (let i = 0; i < arrayItems.length; i++){ result += (i + 1) + ". " + arrayItems[i] + "\n";
    }

    output.innerText = result;
    refreshDisplay();
}



function showReverse(){
    if (arrayItems.length === 0){
        output.innerText = "The array is empty.";
        refreshDisplay();
        return;
    }

    let result = "Array(reverse):\n";
    for(let i = arrayItems.length - 1; i >= 0; i--) {
        result += (i + 1) + ". " + arrayItems[i] + "\n";
    }
    output.innerText = result;
    refreshDisplay();
}



function addPush(){
    const val = addValueInput.value;
    if(!validateInput(val)) {
        output.innerText = "Please write a non empty value to add with push.";
        return;
    }

    arrayItems.push(val);
    output.innerText = `Push: Added "${val}" to the end.\nLength now: ${arrayItems.length}.`;
    addValueInput.value = "";
    refreshDisplay();
}



function addUnshift(){
    const val = addValueInput.value;
    if(!validateInput(val)) {
        output.innerText = "Please write a non-empty value to add with unshift.";
        return;
    }

    arrayItems.unshift(val);
    output.innerText = `Unshift: Added "${val}" to the start.\nLength now: ${arrayItems.length}.`;

    addValueInput.value = "";
    refreshDisplay();
}



function removePop(){
    if(arrayItems.length === 0) {
        output.innerText = "Pop: The array is already empty, there is nothing to delete. ";
        return;
    }

    const removed = arrayItems.pop();
    output.innerText = `Pop: It was deleted "${removed}" from the start.\nLength now: ${arrayItems.length}.`;
    refreshDisplay();
}



function removeShift(){
    if (arrayItems.length === 0) {
        output.innerText = "Shift: The array is already empty, there is nothing to deleted.";
        return;
    }

    const removed = arrayItems.shift();
    output.innerText = `Shift: Removed "${removed}" from the start.\nLength now: ${arrayItems.length}.`;
    refreshDisplay();
}


window.addEventListener("DOMContentLoaded", function() {
    refreshDisplay();
    output.innerText = "Done. Press the buttons to see actions on the array.";
});

