import { DuoTab } from "./DuoTab";

export function DuoHeader () {
    return (
        <header>
            <DuoTab />
            <button id="theme-toggle" title="Toggle light / dark theme">
                <div className="moon"><ion-icon name="moon"></ion-icon></div>
                <div className="sun"><ion-icon name="sunny"></ion-icon></div>
            </button>
        </header>
    )
}
