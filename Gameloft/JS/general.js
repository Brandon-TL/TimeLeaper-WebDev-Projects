let list = document.querySelectorAll('.list');

function activeLink () {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active')
}

list.forEach((item) => item.addEventListener('click', activeLink));

let left = document.querySelector('.left');
let bg = document.querySelector('.slider');

left.addEventListener('onclick', function () {

});