const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener(
    "click",
    (event) => {
        // To check whether the user clicks RideTicket button
        if (event.target.id === "rideTicket") {
            const rideEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(rideEvent)
        }
    }
)

eventHub.addEventListener(
    "click",
    (event) => {
        // To check whether the user clicks FoodTicket button
        if (event.target.id === "foodTicket") {
            const eatEvent = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(eatEvent)
        }
    }
)

eventHub.addEventListener(
    "click",
    (event) => {
        // To check whether the user clicks GameTicket button
        if (event.target.id === "gameTicket") {
            const playEvent = new CustomEvent("gameTicketPurchased")
            eventHub.dispatchEvent(playEvent)
        }
    }
)

eventHub.addEventListener(
    "click",
    (event) => {
        // To check whether user clicks SideshowTicket button
        if (event.target.id === "sideshowTicket") {
            const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
            eventHub.dispatchEvent(sideshowEvent)
        }
    }
)

eventHub.addEventListener(
    "click",
    (event) => {
        // To check whether user clicks for the full package
        if (event.target.id === "fullPackageTicket") {
            const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")
            eventHub.dispatchEvent(fullPackageEvent)
        }
    }
)

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full-Package Ticket</button>
        </div>`
}