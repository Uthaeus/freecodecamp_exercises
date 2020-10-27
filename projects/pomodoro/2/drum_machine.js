let source = document.getElementById('out');
let result = document.getElementById('display');

const myfunc = (a) => {
    console.log('func', a);
    document.getElementById('out').value =  '';
    document.getElementById('display').innerHTML = a;
}

const inputHandler = e => {
    result.innerHTML = e.target.value;
}
