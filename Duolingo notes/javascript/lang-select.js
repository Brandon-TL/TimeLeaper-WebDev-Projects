const selectWrapper = document.querySelector('.select-wrapper');
const selectBtn = selectWrapper.querySelector('.select-btn');
const searchInput = selectWrapper.querySelector('input');
const langViewer = selectWrapper.querySelector('.lang-viewer');
const optionsBox = selectWrapper.querySelector('.options');

searchInput.setAttribute("placeholder", "Search");

const countries = ['Inglés', 'Alemán', 'Italiano', 'Japonés', 'Ruso', 'Español', 'Sueco'];
countries.sort();

const delfaultLang = "Sueco";
const delfaultLi = document.createElement('li'); 
delfaultLi.setAttribute("onclick","updateName(this)");
delfaultLi.insertAdjacentHTML("beforeend", `
    <img src="./languages/flags/${delfaultLang}.png" class="select-none">
    <span class="select-none">${delfaultLang}</span>
`);

updateName(delfaultLi);

function addCountry (selectedLang) {
    optionsBox.innerHTML = "";
    for(let country of countries) {
        let isSelected = country == selectedLang ? " selected" : "";
        optionsBox.insertAdjacentHTML("beforeend", `
            <li onclick="updateName(this)" class="select-none${isSelected}">
                <img src="./languages/flags/${country}.png" />
                <span>${country}</span>
            </li>
        `);
    }
}

addCountry();

function updateName(selectedLi) {
    searchInput.value = "";
    addCountry(selectedLi.querySelector('span').textContent);
    selectWrapper.classList.remove('active');
    langViewer.innerHTML = selectedLi.innerHTML;
}


searchInput.addEventListener("keyup", (e) => {
    let arrSearch = [];
    let searchedLang = searchInput.value.toLowerCase();

    console.log(/[a-zA-Z0-9-_ ]/.test(e.key));
    if (/[a-zA-Z0-9]/.test(e.key)) {
        addCountry();
    } else {
        arrSearch = countries.filter(data => {
            return data.toLowerCase().startsWith(searchedLang);
        }).map((data) => `<li onclick="updateName(this)">${data}</li>`).join("");
    }
    
    optionsBox.innerHTML = arrSearch ? arrSearch : `<p class="select-none">Lang not found</p>`;
});

selectBtn.addEventListener("click", () => {
    selectWrapper.classList.toggle('active');
});