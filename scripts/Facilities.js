//  Import the facilities array (getter & setter function)
//  Import the governors array (getter & setter function)
import { getFacilities, setFacility } from "./database.js";
import {FacilityMinerals} from "./FacilityMinerals.js";
import { getTransientState } from "./database.js";
// Declare a variable that invokes the getter function
const facilities = getFacilities()

// Event listener (change event) this will contain the setter function
    // When the change event is invoked, display facility minerals 
    document.addEventListener(
        "change",
        (event) => {
            if (event.target.id === "facility") {
                setFacility(parseInt(event.target.value))
              
            }
        }
    )

//  Write and export (to exomine) a function that returns a string of html interpolated
export const Facilities = () => {
    let html = "<select id='facility'><option value='0'>Select your facility...</option>"
    let transientState = getTransientState()
    // Use .map() for converting objects to <li> elements
    const listFacilities = facilities.map(facility => {
        return `<option ${facility.id === transientState.selectedFacility ? "selected": ""} value="${facility.id}" /> ${facility.name}`
    })

    html += listFacilities.join("")
    html += "</select>"

    return html
}

// The dropdown menu needs to be disabled until someone selects a governor.
    // filter the array of colony minerals on the colonyId foreign key as the first step

    


