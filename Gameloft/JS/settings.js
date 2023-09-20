let set = document.querySelectorAll('.set');

let personalizar = document.getElementsByClassName('.personalizar');
let perfil = document.getElementsByClassName('.perfil');
let cuentas = document.getElementsByClassName('.cuentas');
let ayuda = document.getElementsByClassName('.ayuda');

function activeLink () {
    set.forEach((item) => 
        item.classList.remove('selected'),
    );
    
    this.classList.add('selected');
    this.style.display = "inline-block";
}

set.forEach((item) => item.addEventListener('click', activeLink));

let sett = document.querySelector('.sett');
let expand = document.querySelector('.expand');
let contract = document.querySelector('.contract');
let ul = document.querySelectorAll('ul')[1];
let cover = document.querySelector('.cover');

expand.addEventListener('click', function action () {
    expand.style.display = "none";
    contract.style.display = "block";
    sett.style.width = "15em";
    ul.style.display = "block";
    cover.style.visibility = "visible";
});

contract.addEventListener('click', function action () {
    ul.style.display = "none";
    expand.style.display = "block";
    contract.style.display = "none";
    sett.style.width = "5em";
    cover.style.visibility = "hidden";
});