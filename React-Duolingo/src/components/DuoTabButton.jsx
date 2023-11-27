export function DuoTabButton ({ id , children }) {
    return (
        <button id={id} className="tab-button select-none">
            {children}
        </button>
    )
}