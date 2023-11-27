export function DuoFooter () {
    const year = new Date().getFullYear()

    return (
        <footer className="select-none">
            &copy; 2023-{ year } &middot;&nbsp;
            <a href="https://github.com/Brandon-TL" target="_blank" rel="noreferrer" title="GitHub">Time Leaper</a> &middot; Todos los derechos reservados
        </footer>
    )
}