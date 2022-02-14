const database = {
// added an array of facilities
    facilities: [
        {id: 1, name: "Ganymede", active: true},
        {id: 2, name: "lo", active: true},
        {id: 3, name: "Titan", active: true},
    ],


    governors: [
        {id: 1, name: "Alma Jackson", active: true},
        {id: 2, name: "Jack Stell", active: true},
        {id: 3, name: "Xtina Prince", active: false},
        {id: 4, name: "Daphne Snow", active: true},
        {id: 5, name: "Diana Warship", active: false}
    ],

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
    ],

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
    return database.facilities.map(facility => ({...facility}))
}

export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}

export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire document so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

