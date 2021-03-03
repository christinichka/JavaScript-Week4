// a. Define a function that returns the circumference (C = 2πr) of the orbit. Round the circumference to an integer.
 
// Code your orbitCircumference function here:
function orbitCircumference(orbitRadius = 2000) {
  return Math.round(2 * Math.PI * orbitRadius);
}
// console.log(orbitCircumference(orbitRadius));

// b. Define the missionDuration function to take three parameters - the number of orbits completed, the orbit radius, and the orbital speed. Set the default radius to 2000 km and the default orbital speed to 28000 km/hr. 
// c. Calculate how long it will take our animals to complete 5 orbits (time = distance/speed). Round the answer to 2 decimal places, then return the result.

// Code your missionDuration function here:
function missionDuration(completedOrbits, orbitRadius = 2000, orbitalSpeed = 28000) {
  return (Math.round((((orbitCircumference(orbitRadius))/(orbitalSpeed)) * completedOrbits) * 100))/100;
}
console.log(`The mission will travel ${orbitCircumference()}km around the planet, and it will take ${missionDuration(5)} hours  to complete.\n`);


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array) {
  let entry = []
  entry = Math.floor(Math.random()*array.length);
  return array[entry];
}

// Code your oxygenExpended function here:
// a. The function should take a candidate object as a parameter and NOT the crew array.
// b. The spacewalk will last for three orbits around the earth. Use missionDuration to calculate how many hours the spacewalk will take.
// c. Use the candidate's o2Used method to calculate how much oxygen (O 2) they consume during the spacewalk. Round the answer to 3 decimal places.
function oxygenExpended(candidateObj, completedOrbits=3, orbitRadius=2000, orbitalSpeed=28000) {
  candidateObj = selectRandomEntry(crew);
  let oxygenRequired = candidateObj.o2Used(missionDuration(3));
  // d. Print template literal about the distance and hours it will take the orbit
  return `${candidateObj.name} will perform the spacewalk, which will last ${missionDuration(completedOrbits)} hours and require ${oxygenRequired.toFixed(3)} kg of oxygen.\n`;
}


// Candidate data & crew array.
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

// Array of randomly selected crew
let crew = [candidateA,candidateC,candidateE];
// console.log(crew);

// Array of Animal Crew Member Objects
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

console.log(oxygenExpended());





