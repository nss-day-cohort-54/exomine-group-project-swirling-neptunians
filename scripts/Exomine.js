// Import all the things
import { Governors } from "./Governors.js";
import { Facilities } from "./Facilities.js";
import { ChosenMinerals, FacilityMinerals } from "./FacilityMinerals.js";
import { ColonyMinerals } from "./ColonyMinerals.js";
import { setColonyMineral, purchaseMineral } from "./database.js";

// Event listener for the purchase mineral button (with the purhcaseMineral function)
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "purchase") {
    // invoking setPaint function which puts a property onto the orderBuilder object
    setColonyMineral(parseInt(clickEvent.target.value));
    purchaseMineral();
  }
});

// Write and export a function that will interpolate all of the innerHTML with the imported
// functions (minus the purchaseMineral function)
export const Exomine = () => {
  return `
        <h2>Governors</h2>
        ${Governors()}
        <h2>Facilities</h2>
        ${Facilities()}
        ${FacilityMinerals()}
        ${ColonyMinerals()}
        ${ChosenMinerals()}
        <h2>Space Cart</h2>
         <article>
            <button id="purchase">Purchase Mineral</button>
        </article>

        `;
};
