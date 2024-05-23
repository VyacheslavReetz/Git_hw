"use strict";

function concatenated(n) {
    n = Number(n); // Для ввода через консоль ¯⁠\⁠_⁠(⁠ツ⁠)⁠_⁠/⁠¯
    let stringAnswer;
    const numberToString = n.toString();
    stringAnswer = n + Number(numberToString + numberToString) + Number(numberToString + numberToString + numberToString);

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