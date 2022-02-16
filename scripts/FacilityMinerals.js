// Import getter and setters from database

import { getMinerals, getFacilities, getFacilityMinerals, getTransientState } from "./database.js";

// Declare a variable and set it equal to invoked getter function
const minerals = getMinerals()
// const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()
// if the user has made a selection then store the user selection


// initialize an empty array
export const FacilityMinerals = () => {
    
    const newFacilityMineralsArray = []
    let transientState = getTransientState()

    if ("selectedFacility" in transientState) {
        let html = "<ul>"

        // iterate the facilities array and match the facility.id and the facilityMinerals.facilityId (filter)
        const filteredItemsArray = facilityMinerals.filter(facilityMineral => {
            return transientState.selectedFacility === facilityMineral.facilityId
        })
        // returns an array of matching facility mineral objects
        // iterate the filtered items array
        for (const facilityMineral of filteredItemsArray) {

            const foundMineralObject = minerals.find(mineral => {
                return mineral.id === facilityMineral.mineralId
            })

            if (transientState.selectedFacility === facilityMineral.facilityId) {
                html += `<li>${facilityMineral.mineralWeight} tons of ${foundMineralObject.name}</li>`
            }

            // const filteredFacilityMinerals = facilityMinerals.filter(facilityMineral => {
            //     if (facilityMineral.facilityId === transientState.selectedFacility)
            //     return html += `<li>${facilityMineral.mineralWeight} tons of ${foundMineralObject.name}</li>`
            // })
            // push to the empty array
            
        }
        newFacilityMineralsArray.push(html)
        // for each facility mineral object find() the corresponding mineral that matches mineralId
        // returns a mineral object
        // join all the strings in the array into a single string
        const newHtml = newFacilityMineralsArray.join("")
        html += "</ul>"
        return newHtml
    } else {
        return "asdfa"
    }
}


