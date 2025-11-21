var output = document.getElementById ("output");

function addInput(a) {
    output.value += a
}

function calculate() {
    output.value = eval(output.value);
}

function deleteLastElement() {
    output.value = "";
}


