const LCI_THEME = 'LCI_THEME';

const onClick = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    theme.value === 'dark' ? toMoon() : toSun();
    setPreference();
}

const toMoon = () => {
    document.querySelector('.moon').classList.add('disp');
    document.querySelector('.sun').classList.remove('disp');
}

const toSun = () => {
    document.querySelector('.moon').classList.remove('disp');
    document.querySelector('.sun').classList.add('disp');
}

const getColorPreference = () => {
    if (localStorage.getItem(LCI_THEME)) {
        return localStorage.getItem(LCI_THEME);
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
}

const setPreference = () => {
    localStorage.setItem(LCI_THEME, theme.value);
    reflectPreference();
}

const reflectPreference = () => {
    theme.value === 'dark' ? toMoon() : toSun();
    document.firstElementChild.setAttribute('data-theme', theme.value);
    document.querySelector('#theme-toggle')?.setAttribute('arial-label', theme.value);
}

const theme = {
    value: getColorPreference()
}

reflectPreference();

window.onload = () => {
    reflectPreference();
    document.querySelector('#theme-toggle').addEventListener('click', onClick);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change' , 
    ({matches:isDark}) => {
        theme.value = isDark ? 'dark' : 'light';
        setPreference();
    }
);