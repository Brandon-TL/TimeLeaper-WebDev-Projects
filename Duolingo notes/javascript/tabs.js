const LCI_ACTIVE_TAB = "LCI_ACTIVE_TAB";

const tabsButtons = document.querySelectorAll('.tab-button');
const defaultTab = "first-tab";

function setTab () {
    if (activeTab = localStorage.getItem(LCI_ACTIVE_TAB)) {
        document.querySelector(activeTab).classList.add("active");
    } else {
        localStorage.setItem(LCI_ACTIVE_TAB, `#${defaultTab}`);
        document.querySelector(`#${defaultTab}`).classList.add("active");
    }
}

setTab();

tabsButtons.forEach(tabBtn => {
    tabBtn.addEventListener("click", (e) => {
        document.querySelector('.active').classList.remove("active");
        e.target.classList.add("active");
        localStorage.setItem(LCI_ACTIVE_TAB, `#${e.target.id}`);
    });
});