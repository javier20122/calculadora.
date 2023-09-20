let display = document.getElementById('display');
let result = 0;

function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
    result = 0;
}

function calculate() {
    try {
        result = eval(display.textContent);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}
