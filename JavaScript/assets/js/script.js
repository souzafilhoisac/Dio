let currentNumber = 0;
let currentNumberWrapper = document.getElementById('currentNumber');

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}