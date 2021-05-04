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

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
        </div>`
}