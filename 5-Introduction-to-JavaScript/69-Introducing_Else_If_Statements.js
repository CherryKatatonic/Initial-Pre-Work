// Already known

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  } else if (val >= 5 && val <= 10) {
    return "Between 5 and 10";
  } else {
    return 'Greater than 10';
  }
}

// Change this value to test
testElseIf(7);
