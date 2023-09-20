let body = document.querySelector('body');
body.style.maxHeight = "100vh";
body.style.overflow = "hidden";

let accept = document.querySelector('#accept').addEventListener('click', function () {
    let blur = document.querySelector('.blur');
    blur.style.display = "none";
    body.style.minHeight = "100vh";
    body.style.overflow = "visible";
});