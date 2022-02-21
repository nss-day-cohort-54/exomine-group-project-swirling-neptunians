// Import getter and setters from database

import {
  getMinerals,
  getFacilityMinerals,
  getTransientState,
  setFacilityMineral,
  getFacilities,
} from "./database.js";

// Declare a variable and set it equal to invoked getter function
const minerals = getMinerals();
// const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals();

// if the user has made a selection then store the user selection
document.addEventListener("change", (event) => {
  if (event.target.name === "mineralList") {
    setFacilityMineral(parseInt(event.target.value));
  }
});
// add a change event listener for when the user selects what mineral they want to purchase

// define a function that displays 1 ton of the selected mineral in the cart:
export const ChosenMinerals = () => {
  const facilities = getFacilities();
  let transientState = getTransientState();
  // write an if statement to see if a mineral has been selected
  if ("selectedFacilityMineral" in transientState) {
    //iterate through the facilityMinerals (find)
    const chosenFacilityMineral = facilityMinerals.find((facilityMineral) => {
      return facilityMineral.id === transientState.selectedFacilityMineral;
    });
    // match the mineral.id to the selectedFacilityMineral.mineralId (transientState)
    const foundMineralObject = minerals.find((mineral) => {
      return mineral.id === chosenFacilityMineral.mineralId;
    });
    const foundFacility = facilities.find(
      (facility) => transientState.selectedFacility === facility.id
    );
    // write an html string that outputs 1 ton of selected mineral from selected facility
    let html = `1 ton of ${foundMineralObject.name} from ${foundFacility.name}`;
    //from ${facility.name}
    return html;
  } else {
    return "";
  }
};
// initialize an empty array
export const FacilityMinerals = () => {
  const newFacilityMineralsArray = [];
  let transientState = getTransientState();

  if ("selectedFacility" in transientState) {
    let html = "<ul class='facility_mineral_list'>";

    // iterate the facilities array and match the facility.id and the facilityMinerals.facilityId (filter)
    const filteredItemsArray = facilityMinerals.filter((facilityMineral) => {
      return transientState.selectedFacility === facilityMineral.facilityId;
    });
    // returns an array of matching facility mineral objects
    // iterate the filtered items array
    for (const facilityMineral of filteredItemsArray) {
      const foundMineralObject = minerals.find((mineral) => {
        return mineral.id === facilityMineral.mineralId;
      });

      if (transientState.selectedFacility === facilityMineral.facilityId) {
        html += `<li>
        <input type="radio" ${facilityMineral.id === transientState.selectedFacilityMineral ? "checked" : ""} 
        name="mineralList" value="${facilityMineral.id}" />${facilityMineral.mineralWeight} tons of ${foundMineralObject.name}</li>`;
      }

      // const filteredFacilityMinerals = facilityMinerals.filter(facilityMineral => {
      //     if (facilityMineral.facilityId === transientState.selectedFacility)
      //     return html += `<li>${facilityMineral.mineralWeight} tons of ${foundMineralObject.name}</li>`
      // })
      // push to the empty array
    }
    newFacilityMineralsArray.push(html);
    // for each facility mineral object find() the corresponding mineral that matches mineralId
    // returns a mineral object
    // join all the strings in the array into a single string
    const newHtml = newFacilityMineralsArray.join("");
    html += "</ul>";
    return newHtml;
  } else {
    return "";
  }
};
