let isSession = true;
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

const intermission = () => {
    // ding.play()
    isSession = !isSession;
    let min;
    if (isSession) {
        min = document.getElementById('session-length').innerHTML;
    } else {
        min = document.getElementById('break-length').innerHTML;
    }
    if (+min < 10) min = '0' + min.toString();

    document.getElementById('time-left').innerHTML = min.toString() + ':00';

}

const countdown = () => {
    let currentValue = document.getElementById('time-left').innerHTML;
    let min = +currentValue.split(':')[0];
    let sec = +currentValue.split(':')[1];
    console.log(min);
    if (sec - 1 == 0 && min == 0) {
        sec = sec - 1
    } else if (sec - 1 < 0) {
        min--;
        sec = 59;
    } else {
        sec--;
    }
    min = min < 10 ? '0' + min.toString() : min;
    sec = sec < 10 ? '0' + sec.toString() : sec;
    document.getElementById('time-left').innerHTML = `${min}:${sec}`;
    if (+min == 0 && +sec == 0) intermission();
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
        if (currentVal.innerHTML < 10) {
            document.getElementById('time-left').innerHTML = `0${currentVal.innerHTML}:00`;
        } else {
            document.getElementById('time-left').innerHTML = `${currentVal.innerHTML}:00`;
        }
    }
}

const sessionDecrement = () => {
    let currentVal = document.getElementById('session-length')
    if (+currentVal.innerHTML > 1) {
        currentVal.innerHTML = +currentVal.innerHTML - 1;
        if (currentVal.innerHTML < 10) {
            document.getElementById('time-left').innerHTML = `0${currentVal.innerHTML}:00`;
        } else {
            document.getElementById('time-left').innerHTML = `${currentVal.innerHTML}:00`;
        }
    }
}

const reSet = () => {
    clearInterval(myVar);
    document.getElementById('start_stop').innerHTML = 'play';
    document.getElementById('break-length').innerHTML = 5;
    document.getElementById('session-length').innerHTML = 25;
    document.getElementById('time-left').innerHTML = '25:00';
}