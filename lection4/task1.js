"use strict";

const age_1 = 'aaa';
const age_2 = 18;
const age_3 = 60;

if (typeof age_1 === 'number') {
  if (age_1 < age_2 && age_1 > 0) {
    console.log('You don’t have access cause your age is ' + age_1 + '. It’s less then ' + age_2);
  } else if (age_1 >= age_2 && age_1 < age_3) {
    console.log('Welcome!');
  } else if (age_1 >= age_3 && age_1 <= 127) {
      console.log('Keep calm and look Culture channel');
  } else {
    console.log('Technical work');
  }
} else {
  console.log('FATAL ERROR! YOUR INPUT IS INVALID');
}