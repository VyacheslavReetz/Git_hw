"use strict";

let age_1 = prompt('Hi there! Enter your age below');
const age_2 = 18;
const age_3 = 60;

// null для случая когда нажали "Отмена"
if (typeof age_1 === 'string' || age_1 === null) {
    age_1 = +age_1;
}

switch (true) {
  case age_1 < age_2 && age_1 > 0: {
    alert('You don’t have access cause your age is ' + age_1 + '. It’s less then ' + age_2);
    break;
  }
  case age_1 >= age_2 && age_1 < age_3: {
    alert('Welcome!');
    break;
  }
  case age_1 >= age_3: {
    alert('Keep calm and look Culture channel');
    break;
  }
  default: {
    alert('Technical work');
  }
}