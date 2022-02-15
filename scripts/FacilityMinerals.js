// Import getter and setters from database
import { getMinerals, getFacilities, getFacilityMinerals, getTransientState} from "./database.js";
// Declare a variable and set it equal to invoked getter function
const minerals = getMinerals()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()
const transientState = getTransientState()

// Write and export (to Facilities.js) a function that will check the facility id selected by the User 
    //iterate the facility array
        //if facilityId === transientState.facilityId
        //const selectedFacility = transientState.selectedFacility
// and return a string interpolation of weight and mineral type (RADIO BUTTONS)

// Event Listener (change) will show 1 ton of selected mineral in Cart