let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    // move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    // move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    // move: function() {return Math.floor(Math.random()*11)}
};

let dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    // move: function() {return Math.floor(Math.random()*11)}
};

let moss_piglet = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    // move: function() {return Math.floor(Math.random()*11)}
};


// Add astronautID property to each animal
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
dog["astronautID"] = 4;
moss_piglet["astronautID"] = 5;


// Add move method to each animal object
let move = function() {
  let animalSteps = Math.floor(Math.random()*11);
  return animalSteps;
}

superChimpOne["move"] = move;
salamander["move"] = move;
superChimpTwo["move"] = move;
dog["move"] = move;
moss_piglet["move"] = move;

// console.log(superChimpOne.move());
// console.log(salamander.move());
// console.log(superChimpTwo.move());
// console.log(dog.move());
// console.log(moss_piglet.move());


// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dog, moss_piglet];
console.log(crew);


// Print out the relevant information about each animal.
function crewReports(obj) {
return `${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`
}
console.log(crewReports(superChimpOne)+"\n");
console.log(crewReports(salamander)+"\n");
console.log(crewReports(superChimpTwo)+"\n");
console.log(crewReports(dog)+"\n");
console.log(crewReports(moss_piglet)+"\n");


// Start an animal race!
function fitnessTest(crew) {
  let results = [], numSteps, turns;
  for (let i = 0; i < crew.length; i++) {
    numSteps = 0;
    turns = 0;
    while(numSteps < 20) {
      numSteps += crew[i].move();
      turns++;
    }
    results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`)
  }
  return results
}

console.log(fitnessTest(crew));



