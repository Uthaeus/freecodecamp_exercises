
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