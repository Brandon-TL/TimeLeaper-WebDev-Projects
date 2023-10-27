const selectWrapper = document.querySelector('.select-wrapper');
const selectBtn = selectWrapper.querySelector('.select-btn');
const searchInput = selectWrapper.querySelector('input');
const optionsBox = selectWrapper.querySelector('.options');

const countries = [
    'Anguilla','Aruba','Austria','Azerbaijan',
    'Belgium','Bulgaria','Croatia','Curacao',
    'Cyprus','Denmark','Finland','France',
    'Georgia','Germany','Greece','Italy',
    'Luxembourg','Malta','Monaco','Netherlands',
    'Netherlands','Antilles','Norway','Poland',
    'Portugal','Romania','Spain','Sweden',
    'Switzerland','Ukraine','United Kingdom'
];

function addCountry () {
    for(let country of countries) {
        optionsBox.insertAdjacentHTML("beforeend", `
            <li onclick="updateName(this)">${country}</li>
        `);
    }
}

addCountry();

function updateName(selectedLi) {
    selectWrapper.classList.remove('active');
    selectBtn.firstElementChild.textContent = selectedLi.textContent;
}

searchInput.addEventListener("keyup", () => {
    let arrSearch = [];
    let searchedLang = searchInput.value.toLowerCase();
    
    arrSearch = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedLang);
    }).map((data) => {
        `<li>${data}</li>`
    }).join("");
    
    optionsBox.innerHTML = arrSearch;
});

selectBtn.addEventListener("click", () => {
    selectWrapper.classList.toggle('active');
});