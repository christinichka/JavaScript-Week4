
// 1. Write a crewMass function that returns the total mass of the selected crew members rounded to 1 decimal place.

// Code your crewMass function here:
function crewMass(crew){
  let totalCrewMass = 0;
  for (i = 0; i < crew.length; i++){
    totalCrewMass += crew[i].mass;
  }
  return(Math.round(totalCrewMass * 10)/10);
}

// 2. The mass of the un-crewed rocket plus the food and other supplies is 75,000 kg. Create a fuelRequired function to combine the rocket and crew masses, then calculate and return the amount of fuel needed to reach LEO.
// 3. Add an extra 200 kg of fuel for each dog or cat on board, but only an extra 100 kg for the other species. Update fuelRequired to account for this, then round the final amount of fuel UP to the nearest integer.

// Code your fuelRequired function here:
function fuelRequired(crew, rocketMass=75000) {
  let fuelNeeded = 9.5 * (crewMass(crew) + rocketMass);
  for (i = 0; i < crew.length; i++) {
    if ((crew[i].species === 'dog') || (crew[i].species === 'cat')) {
      fuelNeeded += 200;
    } else {
      fuelNeeded += 100;
    }
  }
  return Math.ceil(fuelNeeded);
}


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateB,candidateD,candidateF];

// d. Print template literal about the launch mass and amount of fuel required.

console.log(`The mission has a launch mass of ${crewMass(crew)}kg and requires ${fuelRequired(crew)}kg of fuel.`)

