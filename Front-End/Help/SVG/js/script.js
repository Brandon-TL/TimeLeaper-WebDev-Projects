const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const currentState = btn.getAttribute("data-state");

        if (!currentState || currentState === "closed") {
            btn.setAttribute("data-state", "opened");
            btn.setAttribute("aria-expanded", "true");
        } else {
            btn.setAttribute("data-state", "closed");
            btn.setAttribute("aria-expanded", "false");
        }
    });
});