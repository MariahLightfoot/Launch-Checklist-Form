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
      console.log(pilotStatus);

      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Copilot ${copilotName.value} Ready`;
      console.log(copilotStatus);
      console.log(fuelLevel.value);

      //updating faultyItems div due to fuel being too low
      function checkFuelLevel(){
         let faultyItemsDiv = document.getElementById("faultyItems");
         let launchStatus = document.getElementById("launchStatus");

         if(fuelLevel.value < 10000){
            faultyItemsDiv.style.visibility = "visible";
            faultyItemsDiv.innerHTML = "There is too much mass for the shuttle to take off";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }

      }
      checkFuelLevel();
      

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
