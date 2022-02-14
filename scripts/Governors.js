//  Import the governors array (getter & setter function)
import { getGovernors, setGovernor } from "./database.js";

// Declare a variable that invokes the getter function
const governors = getGovernors()

// Event listener (change event)
    // When the change event is invoked, change the html of the colony html section
    document.addEventListener(
        "change",
        (event) => {
            if (event.target.id === "governor") {
                setGovernor(parseInt(event.target.value))
            }
        }
    )

export const Governors = () => {
    let html = "<select id='governor'><option value='0'>Select your governor...</option>"

    // Use .map() for converting objects to <li> elements
    const listGovernors = governors.map(governor => {
        return `<option value="${governor.id}" /> ${governor.name}`
    })

    html += listGovernors.join("")
    html += "</select>"

    return html
}
