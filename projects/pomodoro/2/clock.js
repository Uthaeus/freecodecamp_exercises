let mainDisplay = document.getElementById('main-display');
let breakDisplay = document.getElementById('break-display');
let timeDisplay = document.getElementById('time-display');

const breakIncrement = () => {
    let currentValue = +document.getElementById('break-display').innerHTML
    if (currentValue < 10) {
        document.getElementById('break-display').innerHTML = currentValue + 1;
    }
}

const breakDecrement = () => {
    let currentDiv = document.getElementById('break-decrement');
    let currentValue = +currentDiv.innerHTML;
    console.log(currentValue);
}