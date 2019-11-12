// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){

      //validation to make sure all inputs have a value
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" ||cargoMass.value === ""){
         alert("All fields are required!");
         event.preventDefault();
      }

      //validation to make sure fuel level and cargo mass are numbers
      function checkInputTypes(){
         let checkingFuelLevel = document.forms["launchChecklistForm"]["fuelLevel"].value;
         let checkingCargoMass = document.forms["launchChecklistForm"]["cargoMass"].value;

         if(isNaN(checkingFuelLevel)){
            alert("The Fuel Level (L) field must be in a number format!");
            event.preventDefault();
         } else if(isNaN(checkingCargoMass)){
            alert("The Cargo Mass (kg) field must be in a number format!");
            event.preventDefault();
         }
      }
      checkInputTypes();

      //updating pilotStatus and copilotStatus with names entered in form
      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;

      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Copilot ${copilotName.value} Ready`;

      //updating faultyItems div due to fuel being too low
      function checkFuelLevel(){
         let faultyItemsDiv = document.getElementById("faultyItems");
         let fuelStatus = document.getElementById("fuelStatus");
         let launchStatus = document.getElementById("launchStatus");

         if(fuelLevel.value <= 10000){
            faultyItemsDiv.style.visibility = "visible";
            fuelStatus.innerHTML = "There is not enough fuel for the journey";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }
      }
      checkFuelLevel();
      
      //updating faultyItems div due to cargo mass being too high
      function checkCargoMass(){
         let faultyItemsDiv = document.getElementById("faultyItems");
         let cargoStatus = document.getElementById("cargoStatus");
         let launchStatus = document.getElementById("launchStatus");

         if(cargoMass.value >= 10000){
            faultyItemsDiv.style.visibility = "visible";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }
      }
      checkCargoMass();
      
      //updating launchStatus
      function checkLaunchStatus(){
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         let launchStatus = document.getElementById("launchStatus");

         console.log(pilotName.value);
         console.log(copilotName.value);
         console.log(fuelLevel.value);
         console.log(cargoMass.value);
         if(pilotName.value !== "" && copilotName.value !== "" && fuelLevel.value > 10000 && cargoMass.value < 10000){
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         }
      }
      checkLaunchStatus();
      event.preventDefault();

   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
