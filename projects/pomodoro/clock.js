let isSession = true;
let interval = setInterval(clock, 1000);
let isPaused = true;
let count = 0;

breakIncrement = () => {
    let m = document.getElementById('break-length');
    let val = +m.innerHTML;
    if (val < 60) {
        m.innerHTML = val + 1;
    }
}

breakDecrement = () => {
    let m = document.getElementById('break-length');
    let val = +m.innerHTML;
    if (val > 1) {
        m.innerHTML = val - 1;
    }
}

sessionIncrement = () => {
    let m = document.getElementById('session-length');
    let val = +m.innerHTML + 1
    if (val <= 60) {
        m.innerHTML = val;
    }
    if (isSession) {
        adjustTime(val);
    }
}

sessionDecrement = () => {
    let m = document.getElementById('session-length');
    let val = +m.innerHTML - 1;
    if (val > 1) {
        m.innerHTML = val;
    }
    if (isSession) {
        adjustTime(val);
    }
}

adjustTime = (num) => {
    if (num < 10) {
        num = '0' + num.toString();
    }
    let newTime = `${num}:00`;
    document.getElementById('time-left').innerHTML = newTime;
}

reset = () => {
    location.reload();
}

startStop = () => {
    if (isPaused) {
        interval = setInterval(clock, 1000);
        isPaused = false;
    } else {
        clearInterval(interval);
        isPaused = true;
    }
}

clock = () => {
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

formatClock = (min, sec) => {
    if (min < 10) {
        min = '0' + min.toString();
    }
    if (sec < 10) {
        sec = '0' + sec.toString();
    }
    document.getElementById('time-left').innerHTML = min + ':' +sec;
}

intermission = () => {
    
}