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
        {id: 1, name: "iron"},
        {id: 2, name: "copper"},
        {id: 3, name: "magnesium"},
        {id: 4, name: "cobalt"},
        {id: 5, name: "zinc"}
    ],

    colonies: [
        { id: 1, name: "Earth", governorId: 1},
        { id: 2, name: "Mars", governorId: 2},
        { id: 3, name: "Saturn", governorId: 3},
        { id: 4, name: "Uranus", governorId: 4},
        { id: 5, name: "Mercury", governorId: 5}
    ],
    // add facility minerals array with mineral objects
    facilityMinerals: [
        {id: 1, mineralId: 3, mineralWeight: 58, facilityId: 1},
        {id: 2, mineralId: 1, mineralWeight: 78, facilityId: 2},
        {id: 3, mineralId: 1, mineralWeight: 32, facilityId: 3},
        {id: 4, mineralId: 5, mineralWeight: 77, facilityId: 1},
        {id: 5, mineralId: 2, mineralWeight: 90, facilityId: 2},
        {id: 6, mineralId: 5, mineralWeight: 3, facilityId: 3},
        {id: 7, mineralId: 1, mineralWeight: 46, facilityId: 1},
        {id: 8, mineralId: 4, mineralWeight: 15, facilityId: 2}
    ],
    // add colony minerals EMPTY ARRAY
    colonyMinerals: [],
    
    transientState: {}
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setFacilityMineral = (facilityMineralId) => {
    database.transientState.selectedFacilityMineral = facilityMineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
//  ADD GETTER FOR TRANSIENT STATE
export const getTransientState = () => {
    return {...database.transientState }
}

export const purchaseMineral = () => {
        // Broadcast custom event to entire document so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

