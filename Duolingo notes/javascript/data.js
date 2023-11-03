const mainBox = document.querySelector('main');
const phpFile = './php/get_info.php';

fetch(phpFile)
    .then((res) => {
        if (!res.ok) {
            console.log('An error has occurred');
            console.log(res);
            return;
        }
    }).then((data) => {
        mainBox.insertAdjacentHTML("beforeend", data);
    }).catch((err) => {
        console.log(err);
    });