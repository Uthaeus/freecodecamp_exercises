let source = document.getElementById('out');
let result = document.getElementById('display');

document.addEventListener("keypress", function onEvent(e) {
    console.log(e.key);
    myfunc(e.key)
});

const myfunc = (a) => {
    console.log(a);
    let drums = 'qweasdzxc';
    //document.getElementById('out').value =  '';
    if (drums.includes(a)) {
        document.getElementById('display').innerHTML = a.toUpperCase();
        // drum a .play()
    }
}

const inputHandler = e => {
    result.innerHTML = e.target.value;
}

const drumClick = id => {
    let drum = id[id.length - 1];
    document.getElementById('display').innerHTML = drum;
    console.log(drum);
}
