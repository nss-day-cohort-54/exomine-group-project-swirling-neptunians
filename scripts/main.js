// Import Exomine
import { Exomine } from "./Exomine.js"
// query selector to container id in index.html


const mainContainer = document.querySelector("#container")
const renderAllHTML = () => {


    mainContainer.innerHTML = Exomine()
}

renderAllHTML()
// function that renders Exomine into html

// invoke function that renders Exomine into html

// Event listener, to re-render all html
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})