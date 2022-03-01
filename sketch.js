
/***********************************************************************************
  ClickableAllocator
  by Scott Kildall
  
  Start your localhost before running this, otherwise no PNGs will display

  Shows an example of how to use allocation tables with the
  modified p5.clickable class. This uses a ClickableManager class to
  (1) allocate and set variables from a .csv file
  (2) draw all the clickables that are visible in a single function


***********************************************************************************/

// the manager class
var clickablesManager;

// an array of clickable objects
var clickables;

// indexes into the array (constants)
const yellowIndex = 0;
const pinkIndex = 1;
const greenIndex = 2;
const purpleIndex = 3;
const blueIndex = 4;

// ALWAYS allocate the ClickableManager in the preload() function
// if you get an error here, it is likely the .csv file that is not the
// correct filename or path
function preload(){
  clickablesManager = new ClickableManager('assets/clickableLayout.csv');
}

// ALWAYS call the setup() funciton for ClickableManager in the setup(), after
// the class has been allocated in the preload() function.
function setup() {
  createCanvas(1280,600);


  // setup the clickables = this will allocate the array
  clickables = clickablesManager.setup();

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 

  // start with a safe mode
  newTechnology(greenIndex);

  // output to the message window
  console.log(clickables);
}

// Just draw the button
function draw() {
  background(128);
  //background image 
  
}

// change individual fields of the clickables
function setupClickables() {
  // These are the CALLBACK functions. Right now, we do the SAME function for all of the clickables
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onPress = clickableButtonPressed;
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;
  }
}

//--- CLICKABLE CALLBACK FUNCTIONS ----

clickableButtonPressed = function () {
// NEW TECHNOLOGY
  if( this.id === yellowIndex || this.id === pinkIndex || this.id === greenIndex || this.id === purpleIndex || this.id === blueIndex ) {
    newTechnology(this.id);
  }
// tint when mouse is over
clickableButtonHover = function () {
  this.color = "#006ba6";
  this.noTint = false;
  this.tint = "#FFFFFF";
}

//--- TECHNOLOGY FUNCTIONS --
  if( idNum === yellowIndex) {
    img = loadImage('assets/alert.jpg'); // Load the image
    }
  else if( idNum === pinkIndex) {
    img = loadImage('assets/warning.jpg'); // Load the image
  }
  else if( idNum === greenIndex) {
    img = loadImage('assets/alert.jpg'); // Load the image
  }
  else if( idNum === purpleIndex) {
    img = loadImage('assets/status.jpg'); // Load the image
  }
  else if( idNum === blueIndex) {
      img = loadImage('assets/deliver.jpg'); // Load the image
  }
}