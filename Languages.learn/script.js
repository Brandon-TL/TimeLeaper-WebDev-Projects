// fetch('selector/selector.json')
//     .then((response) => response.json())
//     .then(function (json) {
//         languageArr = new Array;
//         for (let key in json) {
//             if (json.hasOwnProperty(key)) {
//                 languageArr.push(json[key]);
//             }
//         }
//         print(languageArr)
//     })
    
// function print (arr) {
//     arr.forEach(language => {
//         console.log(language.lang + ", " + language.f_link);
//         $('.select-dropdown').append('<div><img src="'+language.f_link+'"><span>' + language.lang + '</span></div>');
//     });
// }

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

document.getElementById('theme-checkbox').addEventListener('click', function (event) {
    if (event.target.checked) {
        console.log("light");
    } else {
        console.log("dark");
    }
    document.getElementById('theme-indicator').classList.toggle("ml-40");
});