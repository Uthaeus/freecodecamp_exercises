let isSession = true;
let timer = document.getElementById('time-left');

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
    let val = +m.innerHTML
    if (val < 60) {
        m.innerHTML = val + 1;
    }
    if (isSession) {
        console.log(timer.innerHTML);
    }
}

sessionDecrement = () => {
    let m = document.getElementById('session-length');
    let val = +m.innerHTML;
    if (val > 1) {
        m.innerHTML = val - 1;
    }
}