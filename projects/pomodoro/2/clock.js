

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