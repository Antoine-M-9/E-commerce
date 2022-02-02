const add = document.getElementById('more');
const less = document.getElementById('less');
const result = document.getElementById('result');

let number = 0;
number = parseInt(result.innerText);



add.addEventListener('click', function() {
    number++;
    result.innerText = number;
})

less.addEventListener('click', function() {
    number = number <= 0 ? result.innerText == 0 : result.innerText = number;
    number--;
    result.innerText = number;
})

