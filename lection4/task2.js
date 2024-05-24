"use strict";

let age_1 = 'dsa';
const age_2 = 18;
const age_3 = 60;

if (typeof age_1 === 'string' && !isNaN(+age_1)) {
    age_1 = +age_1;
}

switch (true) {
  case age_1 < age_2 && age_1 > 0: {
    console.log('You don’t have access cause your age is ' + age_1 + '. It’s less then ' + age_2);
    break;
  }
  case age_1 >= age_2 && age_1 < age_3: {
    console.log('Welcome!');
    break;
  }
  case age_1 >= age_3: {
    console.log('Keep calm and look Culture channel');
    break;
  }
  default: {
    console.log('Technical work');
  }
}