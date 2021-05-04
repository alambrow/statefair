const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".games")

export const GameTicketHolders = () => {
    eventHub.addEventListener(
        "gameTicketPurchased",
        (CustomEvent) => {
            contentTarget.innerHTML += "<div class='person player'></div>"
            return contentTarget.innerHTML
        }
    )
}