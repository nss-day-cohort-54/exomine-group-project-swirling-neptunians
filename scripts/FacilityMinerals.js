// Import getter and setters from database
import { getMinerals, getFacilities, getFacilityMinerals, getTransientState} from "./database.js";
// Declare a variable and set it equal to invoked getter function
const minerals = getMinerals()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()

// Write and export (to Facilities.js) a function that will check the facility id selected by the User 
        //if facilityId === transientState.facilityId
export const FacilityMinerals = () => {
    const transientState = getTransientState()

    const selectedFacility = transientState.selectedFacility
         if(selectedFacility) {
            // if someone has selected a facility, use find() method to search for facility Id's

            //iterate the facility array
            const facilityName = facilities.find(facility => facility.id === selectedFacility).name
            
                // and return a string interpolation of weight and mineral type (RADIO BUTTONS)
    // use string interpolation inside the html
            let html = `<h2>Facility Minerals for ${facilityName}</h2>`
            return html 
        }
    return `<h3>Facility Minerals</h3>`
}


// define a function that compares facilityMinersls.mineralId === minerals.id
// if they are equal, return a radio button with the minerals.id as the value

// const mineralName = 
// Event Listener (change) will show 1 ton of selected mineral in Cart
