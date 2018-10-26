checkSpeed (); //add speed here

function checkSpeed (speed) {
  speedLimit = 70; //add value here, remember to initialize with constant not let for security purposes
  kmPerPoint = 5; //add value here
  if (speed <= ) return console.log ('Ok'); //Add formula for calculating the acceptable speed from above variables
  //after return, none of the other code will run, there is no need to report demerit points

  // This variable and formula are const (constant) for security so it cannot be changed, for example when cross-scripting
  const points = Math.floor (speed-70); //Add formula for calculating the point demerits
  if (points >= 12) return console.log ('License Suspended'); //Add conditional to check for points to suspend license
  else console.log ('Points', points)
}
