// You must create code to:
// A. Select the crew.
// B. Perform critical mission calculations.
// C. Determine the fuel required for launch.

// Here are the candidates and the 'animals' array:
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

// Array of ID Numbers
let idNumbers = [291, 414, 503, 599, 796, 890];

// Empty Array to hold the randomly selected ids
let entry = [];

// Array of Animal Crew Member Objects
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your selectRandomEntry function here:
// Select a random entry from the idNumbers array
function selectRandomEntry(array) {
  // while loop with nested if/else statements to pull three random ids and check to see if that id has already been pulled
  while(entry.length < 3) {
    selectedId = Math.floor(Math.random()*array.length);
    if (entry.includes(array[selectedId])) {
      selectRandomEntry(array);
    } else {
      entry.push(array[selectedId]);
    }
  }
  return entry;
}
console.log(selectRandomEntry(idNumbers));


// Design a function that takes two arrays as parameters. These hold the randomly selected ID numbers and the candidate objects.

// Use one or more loops to check which animals hold the lucky ID numbers. They will be going on the space mission! Store these animals in a crew array, and then return that array.


// Code your buildCrewArray function here:
function buildCrewArray(selectedIdArray, candidatesArray) {
  luckyCrewArray = [];
  // for loop to loop through ids
  for (i = 0; i < selectedIdArray.length; i++) {
    // for loop to loop through candidates
    for (j = 0; j < candidatesArray.length; j++) {
      // if pulled ids are equal to the candidate's astronaut id then store into the lucky crew array 
      if (selectedIdArray[i] === candidatesArray[j].astronautID) {
        luckyCrewArray.push(candidatesArray[j]);
      }
    }
  }
  return luckyCrewArray;
}

// Code your template literal and console.log statements:
console.log(`${buildCrewArray(entry, animals)[0].name}, ${buildCrewArray(entry, animals)[1].name}, and ${buildCrewArray(entry, animals)[2].name} are going to space!`)
