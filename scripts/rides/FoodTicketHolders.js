const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".food")

export const FoodTicketHolders = () => {
    eventHub.addEventListener(
        "foodTicketPurchased",
        (CustomEvent) => {
            contentTarget.innerHTML += "<div class='person eater'></div>"
            return contentTarget.innerHTML
        }
    )
}

export const FullFoodTicketHolders = () => {
    eventHub.addEventListener(
        "fullPackageTicketPurchased",
        (CustomEvent) => {
            contentTarget.innerHTML += "<div class='person bigSpender'></div>"
            return contentTarget.innerHTML
        }
    )
}