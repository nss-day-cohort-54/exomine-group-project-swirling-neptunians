/**Import getter and setter functions for colonies

* store getter function in a variable. Invoke

* Define and export(to governors) the function that changes the colony name when the governor 
   is chosen.

* Write and export (to exomine) a function that outputs a string of html
 */
import { getColonies, getTransientState, getMinerals, getColonyMinerals } from "./database.js";

const colonyMinerals = getColonyMinerals()
const minerals = getMinerals()
const colonies = getColonies();
// get transient state
let transientState = getTransientState();

// define and export function that when you pick a governor, it displays their colony
export const ColonyMinerals = () => {
  let foundColonyMineralName = {}
// if statement that reads if "selectedgovernor" in transient state

  if ("selectedGovernor" in transientState) {
    // iterate through the governors array and match the governor.id with colony.governorId use .filter()method

    for (const colony of colonies) {
      if (transientState.selectedGovernor === colony.governorId) {
        return `<h2>${colony.name} Minerals</h2>`;
      }
    }
  } else {
    return `<h2>Colony Minerals</h2>`;
  }

  if (!("mineralWeight" in transientState) && !("name" in foundColonyMineralName)) {
    return ""
  } else if (filteredColony.id === foundColony.id) {
    foundColonyMineralName = minerals.find((mineral) => transientState.mineralId === mineral.id)
    let html = `<ul>`
    html += `${transientState.mineralWeight} tons of ${foundColonyMineralName.name}`
    html += `</ul>`
    return html
  }
};

const filteredColonyMinerals = colonyMinerals.filter(colonyMineral => foundColony.id === colonyMineral.colonyId)
// return the colony and build html ""

const filteredColony = colonies.filter(colony => transientState.selectedGovernor === colony.governorId)


const foundColony = colonies.find(
  (colony) => transientState.selectedGovernor === colony.governorId
);




// 

// A list of all the mineral names and amounts of minerals at a given colony