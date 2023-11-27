export function DuoTabButton ({ id , children, isSelected }) {
    const selected = isSelected ? ' active' : ''

    return (
        <button id={id} className={`tab-button select-none${selected}`}>
            {children}
        </button>
    )
}