const selectWrapper = document.querySelector('.select-wrapper');
const selectBtn = selectWrapper.querySelector('.select-btn');
const searchInput = selectWrapper.querySelector('input');
const optionsBox = selectWrapper.querySelector('.options');

searchInput.setAttribute("placeholder", "Search");

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

function addCountry (selectedLang) {
    optionsBox.innerHTML = "";
    for(let country of countries) {
        let isSelected = country == selectedLang ? "class='selected'" : "";
        optionsBox.insertAdjacentHTML("beforeend", `
            <li onclick="updateName(this)" ${isSelected}>${country}</li>
        `);
    }
}

addCountry();

function updateName(selectedLi) {
    searchInput.value = "";
    addCountry(selectedLi.textContent);
    selectWrapper.classList.remove('active');
    selectBtn.firstElementChild.textContent = selectedLi.textContent;
}

searchInput.addEventListener("keyup", () => {
    let arrSearch = [];
    let searchedLang = searchInput.value.toLowerCase();
    
    arrSearch = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedLang);
    }).map((data) => `<li onclick="updateName(this)">${data}</li>`).join("");
    
    optionsBox.innerHTML = arrSearch ? arrSearch : `<p>Lang not found</p>`;
});

selectBtn.addEventListener("click", () => {
    selectWrapper.classList.toggle('active');
});