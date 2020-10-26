let mainTimer = true;
let playing = false;

const start = () => {
    playing = !playing;

    if (playing) {
        setInterval(countDown, 1000);
    } else {
        setInterval(countDown, 0);
    }
}

const countDown = () => {
    let currentValue = document.getElementById('main-display').innerHTML;
    let min = +currentValue.split(':')[0];
    let sec = +currentValue.split(':')[1];

    if (sec - 1 == 0 && min == 0) {
        timeUpAlarm();
    } else if (sec - 1 < 0) {
        min--;
        sec = 59;
    } else {
        sec--
    }
}

const reSet = () => {
    playing = false;
    mainTimer = true;
    document.getElementById('break-display').innerHTML = 5;
    document.getElementById('time-display').innerHTML = 25;
    document.getElementById('main-display').innerHTML = '25:00'
}

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