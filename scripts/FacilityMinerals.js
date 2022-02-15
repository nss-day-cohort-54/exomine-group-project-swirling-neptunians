// Import getter and setters from database
import { getMinerals, getFacilities, getFacilityMinerals } from "./database.js";
// Declare a variable and set it equal to invoked getter function
const minerals = getMinerals()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()

// if the user has made a selection then store the user selection

// initialize an empty array
const newFacilityMineralsArray = []
export const FacilityMinerals = () => {
    // iterate the facilities array and match the facility.id and the facilityMinerals.facilityId (filter)
    const filteredItemsArray = facilities.filter(facility => {return facility.id === facilityMinerals.facilityId})
    // returns an array of matching facility mineral objects
        // iterate the filtered items array
        // for each facility mineral object find() the corresponding mineral that matches mineralId
        const foundMineralObjects = minerals.find(mineral => {return mineral.id === facilityMinerals.mineralId})
        // returns a mineral object
                // build a string with the mineral name and weight
                return `${foundMineralObjects.weight} tons of ${foundMineralObjects.name}`
                // push to the empty array
                newFacilityMineralsArray.push(foundMineralObjects)
                // join all the strings in the array into a single string
                filteredItemsArray += foundMineralObjects.join("")
                
    // return string
}

