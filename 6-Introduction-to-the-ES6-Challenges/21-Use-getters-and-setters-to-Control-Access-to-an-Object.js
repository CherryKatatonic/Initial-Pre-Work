// Already known

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(tempF) {
      this.temperature = tempF;
    }

    get celsius() {
      return 5/9 * (f - 32);
    }

    set celsius(temp) {
      this.temperature = temp * 9 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
