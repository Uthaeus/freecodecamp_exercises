let isSession = true;
let interval;
let isPaused = true;
let count = 0;

const breakIncrement = () => {
    let m = document.getElementById('break-length');
    let val = +m.innerHTML;
    if (val < 60) {
        m.innerHTML = val + 1;
    }
}

const breakDecrement = () => {
    let m = document.getElementById('break-length');
    let val = +m.innerHTML;
    if (val > 1) {
        m.innerHTML = val - 1;
    }
}

const sessionIncrement = () => {
    let m = document.getElementById('session-length');
    let val = +m.innerHTML + 1
    if (val <= 60) {
        m.innerHTML = val;
    }
    if (isSession) {
        adjustTime(val);
    }
}

const sessionDecrement = () => {
    let m = document.getElementById('session-length');
    let val = +m.innerHTML - 1;
    if (val > 1) {
        m.innerHTML = val;
    }
    if (isSession) {
        adjustTime(val);
    }
}

const adjustTime = (num) => {
    if (num < 10) {
        num = '0' + num.toString();
    }
    let newTime = `${num}:00`;
    document.getElementById('time-left').innerHTML = newTime;
}

const reset = () => {
    location.reload();
}

const startStop = () => {
    let startButton = document.getElementById('start_stop');

    if (isPaused) {
        interval = setInterval(clock, 1000);
        startButton.innerHTML = 'Pause';
        isPaused = false;
    } else {
        clearInterval(interval);
        startButton.innerHTML = 'Start';
        isPaused = true;
    }
}

const clock = () => {
    count++;
    let currentTime = document.getElementById('time-left').innerHTML.split(':');
    let min = +currentTime[0];
    let sec = +currentTime[1];
    let total = min * 60 + sec;
    let out = true;
    if (count == total) {
        out = false;
        formatClock(0, 0);
        intermission();
    }
    if (out) {
        let preOut = total - count;
        let min = Math.floor(preOut / 60);
        let sec = preOut % 60;
        formatClock(min, sec);
    }
}

const formatClock = (min, sec) => {
    if (min < 10) {
        min = '0' + min.toString();
    }
    if (sec < 10) {
        sec = '0' + sec.toString();
    }
    document.getElementById('time-left').innerHTML = min + ':' +sec;
}

const intermission = () => {
    clearInterval(interval)
    document.getElementById('beep').play();
    
    isSession = false;
    let breakTime = +document.getElementById('break-length').innerHTML;
    adjustTime(breakTime);
    interval = setInterval(clock, 1000);
}