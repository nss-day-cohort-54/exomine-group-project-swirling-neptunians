const database = {
    colonies: [
        { id: 1, name: "Earth" },
        { id: 2, name: "Mars" },
        { id: 3, name: "Saturn" },
        { id: 4, name: "Uranus" },
        { id: 5, name: "Mercury" }
    ],
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") 
}
