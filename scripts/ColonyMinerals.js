/**Import getter and setter functions for colonies

* store getter function in a variable. Invoke

* Define and export(to governors) the function that changes the colony name when the governor 
   is chosen.

* Write and export (to exomine) a function that outputs a string of html
 */
import { getColonies, getTransientState } from "./database.js";

const colonies = getColonies();

// define and export function that when you pick a governor, it displays their colony
export const ColonyMinerals = () => {
  let transientState = getTransientState();

  if ("selectedGovernor" in transientState) {
    //    const filteredColony = colonies.filter(colony => {
    //       if (transientState.selectedGovernor === colony.governorId) {
    //          return `${colony.name}`
    //       }
    //    })
    // }
    for (const colony of colonies) {
      if (transientState.selectedGovernor === colony.governorId) {
        return `${colony.name} Minerals`;
      }
    }
  }
};

// get transient state
// if statement that reads if "selectedgovernor" in transient state
// iterate through the governors array and match the governor.id with colony.governorId use .filter()method
// return the colony and build html ""
//
