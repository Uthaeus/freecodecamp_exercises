
let isRunning = false;
let myVar;

const startStop = () => {
    isRunning = !isRunning;
    if (isRunning) {
        myVar = setInterval(countdown, 1000);
        document.getElementById('start_stop').innerHTML = 'pause';
    } else {
        clearInterval(myVar);
        document.getElementById('start_stop').innerHTML = 'play';
    }
}

const countdown = () => {
    let currentVal = document.getElementById('time-left').innerHTML;
    let [min, sec] = currentVal.split(':');

    if (+sec - 1 < 0 && +min > 0) {
        sec = 59;
        min--;
    } else if (+sec - 1 == 0 && +min == 0) {
        intermission()
    } else {
        +sec--;
    }
    if (+min < 10) min = '0' + min.toString();
    if (+sec < 10) sec = '0' + sec.toString();

    document.getElementById('time-left').innerHTML = `${min}:${sec}`;
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
    clearInterval(myVar);
    document.getElementById('start_stop').innerHTML = 'play';
    document.getElementById('break-length').innerHTML = 5;
    document.getElementById('session-length').innerHTML = 25;
    document.getElementById('time-left').innerHTML = '25:00';
}