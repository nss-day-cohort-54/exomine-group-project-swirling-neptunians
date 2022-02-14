const database = {
    facilities: [
        {id: 1, name: "Ganymede", active: true},
        {id: 2, name: "lo", active: true},
        {id: 3, name: "Titan", active: true},
    ]

    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
}
