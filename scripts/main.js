// Import and invoke the ticket booth component functions here
import { FoodTicketHolders, FullFoodTicketHolders } from "./rides/FoodTicketHolders.js";
import { FullGameTicketHolders, GameTicketHolders } from "./rides/GameTicketHolders.js";
import { RideTicketHolders, FullRideTicketHolders } from "./rides/RideTicketHolders.js";
import { SideshowTicketHolders, FullSideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";
import { TicketBooth } from "./TicketBooth.js";

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullFoodTicketHolders()
FullGameTicketHolders()
FullRideTicketHolders()
FullSideshowTicketHolders()

const eventHub = document.querySelector("#state-fair")
const TicketCounter = document.querySelector(".ticketDisplay")


// renders html for ticket count display
const ticketDisplay = () => {
    TicketCounter.innerHTML = "Total tickets purchased: " + ticketCount
    return TicketCounter.innerHTML
}

// bean counter + event listeners to register purchase (click) events
let ticketCount = 0

eventHub.addEventListener(
    "rideTicketPurchased",
    (CustomEvent) => {
        ticketCount += 1
        ticketDisplay()
    }
    )    

eventHub.addEventListener(
    "foodTicketPurchased",
    (CustomEvent) => {
        ticketCount += 1
        ticketDisplay()
    }
)

eventHub.addEventListener(
    "gameTicketPurchased",
    (CustomEvent) => {
        ticketCount += 1
        ticketDisplay()
    }
)

eventHub.addEventListener(
    "sideshowTicketPurchased",
    (CustomEvent) => {
        ticketCount += 1
        ticketDisplay()
    }
)

eventHub.addEventListener(
    "fullPackageTicketPurchased",
    (CustomEvent) => {
        ticketCount += 1
        ticketDisplay()
    }
)

ticketDisplay()