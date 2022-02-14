const database = {
    transientState: {},
    //added an array of minerals
    minerals: [
        {
            id: 1,
            name: "iron",
            weight: 72
        },
        {
            id: 2,
            name: "copper",
            weight: 16
        },
        {
            id: 3,
            name: "magnesium",
            weight: 25
        },
        {
            id: 4,
            name: "cobalt",
            weight: 100
        },
        {
            id: 5,
            name: "zinc",
            weight: 8
        }
    ]
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

    // Broadcast custom event to entire document so that the
    // application can re-render and update state
    document.dispatchEvent( new CustomEvent("stateChanged") )
}