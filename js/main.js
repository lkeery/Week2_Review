import People from  "./modules/DataObject.js";
import Team from "./modules/DataObject.js";

// IIFE Immediately invoked function expression
(() => {
    console.log('Connected')
    // grab the bio container and get ready to populate contents
    const bioInfo = document.querySelector('.bio-wrapper').children;

    function showProfData() {
        let currentProf = this.textContent;
        
        // this refers to the heading tag (first child of wrapper div)
        bioInfo[0].textContent = People[currentProf].name;
        
        bioInfo[1].textContent = People[currentProf].role;

        bioInfo[2].textContent = People[currentProf].bio;

        bioInfo[3].src = `images/${People[currentProf].avatar}`;
    }


    for (let prof in People) {
        console.log(prof);

        // create button for every entry in our object
        let teamButton = document.createElement('button');

        // set button text to prof
        teamButton.textContent = prof;
        
        // add listener to button
        teamButton.addEventListener('click', showProfData);

        // add the button to the top section of our webpage
        document.querySelector("#section1").appendChild(teamButton);
    }
})();