"use strict";

function concatenated(n) {
    let stringAnswer, numberToString;
    numberToString = n.toString();
    stringAnswer = numberToString + ' + ' + numberToString + numberToString + ' + ' + numberToString + numberToString + numberToString;

    return stringAnswer;
}


// ФИКСИРОВАННОЕ ЗНАЧЕНИЕ

console.log(concatenated(6));

// ИЛИ ДЛЯ ВВОДА ИЗ КОНСОЛИ:

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('дай цифру: ', number => {
    console.log(concatenated(number));

    readline.close();
  });