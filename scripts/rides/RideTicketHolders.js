const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener(
        "rideTicketPurchased", 
        (customEvent) => {
            contentTarget.innerHTML += "<div class='person rider'></div>"
            return contentTarget.innerHTML
    })
}

export const FullRideTicketHolders = () => {
    eventHub.addEventListener(
        "fullPackageTicketPurchased",
        (CustomEvent) => {
            contentTarget.innerHTML += "<div class='person bigSpender'></div>"
            return contentTarget.innerHTML
        }
    )
}