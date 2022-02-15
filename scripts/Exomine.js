// Import all the things
import { Governors } from "./Governors.js";
import { Facilities } from "./Facilities.js";


// Event listener for the purchase mineral button (with the purhcaseMineral function)

// Write and export a function that will interpolate all of the innerHTML with the imported
    // functions (minus the purchaseMineral function)
    export const Exomine = () => {
        return `
        <h2>Governors</h2>
        ${Governors()}
        <h2>Facilities</h2>
        ${Facilities()}
        `
    }