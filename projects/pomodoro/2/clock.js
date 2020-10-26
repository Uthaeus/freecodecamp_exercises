let mainTimer = true;
let playing = false;
let myVar;

const startTimer = () => {
    myVar = setInterval(countDown, 1000);
}

const stopTimer = () => {
    clearInterval(myVar);
}

const timeUpAlarm = () => {
    stopTimer();
    setInterval(function() {
        console.log('this is a test');
    }, 1000);
}

const countDown = () => {
    let currentValue = document.getElementById('main-display').innerHTML;
    let min = +currentValue.split(':')[0];
    let sec = +currentValue.split(':')[1];

    if (sec - 1 == 0 && min == 0) {
        document.getElementById('main-display').innerHTML = '00:00';
        timeUpAlarm();
    } else if (sec - 1 < 0) {
        min--;
        sec = 59;
    } else {
        sec--;
    }
    min = min < 10 ? '0' + min.toString() : min;
    sec = sec < 10 ? '0' + sec.toString() : sec;
    document.getElementById('main-display').innerHTML = `${min}:${sec}`;
}

const reSet = () => {
    stopTimer();
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