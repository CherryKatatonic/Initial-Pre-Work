// Already known

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  var pts = strokes - par;
  if (strokes === 1) {
    return names[0];
  } else if(pts <= -2) {
    return names[1];
  } else if(pts == -1) {
    return names[2];
  } else if(pts == 0) {
    return names[3];
  } else if(pts == 1) {
    return names[4];
  } else if(pts == 2) {
    return names[5];
  } else {
    return names[6];
  }

  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
