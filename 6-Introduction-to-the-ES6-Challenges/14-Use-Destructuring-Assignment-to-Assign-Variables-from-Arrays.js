// Already known

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  return [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
