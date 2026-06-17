// See 'N' Say Storymaker
// Client-Side JavaScript Assignment 1

// Arrays for each part of the story
let whoWords = [
  "The funny dog",
  "A little robot",
  "The sleepy cat",
  "My best friend",
  "A brave princess"
];

let actionWords = [
  "jumped over",
  "danced beside",
  "ran around",
  "laughed at",
  "played with"
];

let placeWords = [
  "the school",
  "the park",
  "the zoo",
  "the beach",
  "the kitchen"
];

let objectWords = [
  "a red ball",
  "a magic hat",
  "a tiny car",
  "a big cake",
  "a yellow kite"
];

let endingWords = [
  "and everyone laughed.",
  "before dinner.",
  "on a sunny day.",
  "and then went home.",
  "with a big smile."
];

// Index counters
let whoIndex = 0;
let actionIndex = 0;
let placeIndex = 0;
let objectIndex = 0;
let endingIndex = 0;

// Selected words
let selectedWho = "";
let selectedAction = "";
let selectedPlace = "";
let selectedObject = "";
let selectedEnding = "";

// HTML elements
let whoBtn = document.getElementById("whoBtn");
let actionBtn = document.getElementById("actionBtn");
let placeBtn = document.getElementById("placeBtn");
let objectBtn = document.getElementById("objectBtn");
let endingBtn = document.getElementById("endingBtn");

let storyBtn = document.getElementById("storyBtn");
let randomBtn = document.getElementById("randomBtn");
let resetBtn = document.getElementById("resetBtn");
let output = document.getElementById("output");

// Cycle through first array
function chooseWho() {
  selectedWho = whoWords[whoIndex];
  whoBtn.textContent = selectedWho;

  whoIndex++;

  if (whoIndex >= whoWords.length) {
    whoIndex = 0;
  }
}

// Cycle through second array
function chooseAction() {
  selectedAction = actionWords[actionIndex];
  actionBtn.textContent = selectedAction;

  actionIndex++;

  if (actionIndex >= actionWords.length) {
    actionIndex = 0;
  }
}

// Cycle through third array
function choosePlace() {
  selectedPlace = placeWords[placeIndex];
  placeBtn.textContent = selectedPlace;

  placeIndex++;

  if (placeIndex >= placeWords.length) {
    placeIndex = 0;
  }
}

// Cycle through fourth array
function chooseObject() {
  selectedObject = objectWords[objectIndex];
  objectBtn.textContent = selectedObject;

  objectIndex++;

  if (objectIndex >= objectWords.length) {
    objectIndex = 0;
  }
}

// Cycle through fifth array
function chooseEnding() {
  selectedEnding = endingWords[endingIndex];
  endingBtn.textContent = selectedEnding;

  endingIndex++;

  if (endingIndex >= endingWords.length) {
    endingIndex = 0;
  }
}

// Return the completed story
function buildStory() {
  return selectedWho + " " + selectedAction + " " + selectedPlace + " with " + selectedObject + " " + selectedEnding;
}

// Show the completed story
function showStory() {
  if (
    selectedWho === "" ||
    selectedAction === "" ||
    selectedPlace === "" ||
    selectedObject === "" ||
    selectedEnding === ""
  ) {
    output.textContent = "Please choose one option from each button first.";
  } else {
    output.textContent = buildStory();
  }
}

// Create a random story
function randomStory() {
  selectedWho = whoWords[Math.floor(Math.random() * whoWords.length)];
  selectedAction = actionWords[Math.floor(Math.random() * actionWords.length)];
  selectedPlace = placeWords[Math.floor(Math.random() * placeWords.length)];
  selectedObject = objectWords[Math.floor(Math.random() * objectWords.length)];
  selectedEnding = endingWords[Math.floor(Math.random() * endingWords.length)];

  whoBtn.textContent = selectedWho;
  actionBtn.textContent = selectedAction;
  placeBtn.textContent = selectedPlace;
  objectBtn.textContent = selectedObject;
  endingBtn.textContent = selectedEnding;

  output.textContent = buildStory();
}

// Reset the storymaker
function resetStory() {
  selectedWho = "";
  selectedAction = "";
  selectedPlace = "";
  selectedObject = "";
  selectedEnding = "";

  whoIndex = 0;
  actionIndex = 0;
  placeIndex = 0;
  objectIndex = 0;
  endingIndex = 0;

  whoBtn.textContent = "Who?";
  actionBtn.textContent = "Did what?";
  placeBtn.textContent = "Where?";
  objectBtn.textContent = "With what?";
  endingBtn.textContent = "Ending";

  output.textContent = "Your story will appear here.";
}

// Event handlers
whoBtn.onclick = chooseWho;
actionBtn.onclick = chooseAction;
placeBtn.onclick = choosePlace;
objectBtn.onclick = chooseObject;
endingBtn.onclick = chooseEnding;

storyBtn.onclick = showStory;
randomBtn.onclick = randomStory;
resetBtn.onclick = resetStory;