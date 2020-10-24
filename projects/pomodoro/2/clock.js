let mainTimer = true;

const mainBreak = () => {
    mainTimer = !mainTimer;
    let display = document.getElementById('main-display');
    if (mainTimer) {
        currentValue = document.getElementById('time-display').innerHTML;
        display.innerHTML = currentValue + ':00';
    } else {
        currentValue = document.getElementById('break-display').innerHTML;
        display.innerHTML = currentValue + ':00';
    }
    console.log(mainTimer);
}

const breakIncrement = () => {
    let currentValue = +document.getElementById('break-display').innerHTML
    if (currentValue < 10) {
        document.getElementById('break-display').innerHTML = currentValue + 1;
    }
}

const breakDecrement = () => {
    let currentValue = +document.getElementById('break-display').innerHTML;
    if (currentValue > 1) {
        document.getElementById('break-display').innerHTML = currentValue - 1;
    }
}

const timeIncrement = () => {
    let currentValue = +document.getElementById('time-display').innerHTML;
    if (currentValue < 45) {
        document.getElementById('time-display').innerHTML = currentValue + 1;
    }
}

const timeDecrement = () => {
    let currentValue = +document.getElementById('time-display').innerHTML;
    if (currentValue > 1) {
        document.getElementById('time-display').innerHTML = currentValue - 1;
    }
}