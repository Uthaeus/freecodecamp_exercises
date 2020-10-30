
let isRunning = false;

const startStop = () => {
    isRunning = !isRunning;
    let x;

    if (isRunning) {
        x = setInterval(countdown(), 1000);
    } else {
        clearInterval(x);
    }
}

const countdown = () => {
    let currentVal = document.getElementById('time-left').innerHTML;
    let [min, sec] = currentVal.split(':');

    
}

const breakIncrement = () => {
    let currentVal = document.getElementById('break-length');
    if (+currentVal.innerHTML < 60) {
        currentVal.innerHTML = +currentVal.innerHTML + 1;
    }
}

const breakDecrement = () => {
    let currentVal = document.getElementById('break-length');
    if (+currentVal.innerHTML > 1) {
        currentVal.innerHTML = +currentVal.innerHTML - 1;
    }
}

const sessionIncrement = () => {
    let currentVal = document.getElementById('session-length');
    if (+currentVal.innerHTML < 60) {
        currentVal.innerHTML = +currentVal.innerHTML + 1;
        document.getElementById('time-left').innerHTML = `${currentVal.innerHTML}:00`;
    }
}

const sessionDecrement = () => {
    let currentVal = document.getElementById('session-length')
    if (+currentVal.innerHTML > 1) {
        currentVal.innerHTML = +currentVal.innerHTML - 1;
        document.getElementById('time-left').innerHTML = `${currentVal.innerHTML}:00`;
    }
}

const reSet = () => {
    // clearInterval
    document.getElementById('break-length').innerHTML = 5;
    document.getElementById('session-length').innerHTML = 25;
    document.getElementById('time-left').innerHTML = '25:00';
}