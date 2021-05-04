const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".sideshow")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener(
        "sideshowTicketPurchased",
        (CustomEvent) => {
            contentTarget.innerHTML += "<div class='person gawker'></div>"
            return contentTarget.innerHTML
        }
    )
}

export const FullSideshowTicketHolders = () => {
    eventHub.addEventListener(
        "fullPackageTicketPurchased",
        (CustomEvent) => {
            contentTarget.innerHTML += "<div class='person bigSpender'></div>"
            return contentTarget.innerHTML
        }
    )
}