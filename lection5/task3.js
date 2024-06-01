// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

const str = 'Kalabanga'; //слово
const vowelsStr = 'aeiouy'; //гласные
let vowels = 0;
let consonants = 0;

for (let char of str) {
    if(vowelsStr.indexOf(char) > -1) {
        vowels++
      } else {
        consonants++
      }
}
console.log(`word ${str} contains ${vowels} vowels and ${consonants} consonants`);

// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';

const string = 'ZzZ';
const offset = 1;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let newIndex = 0;
let result = '';

for (let char of string) {
    let correctCase = alphabet;
    if (alphabet.indexOf(char) === -1) {
        correctCase = alphabet.toUpperCase();
    }
    newIndex = correctCase.indexOf(char) + offset;
    if (newIndex === -1 || newIndex === 26) {
        newIndex = newIndex - 26 * offset;
    }
    
    result = result + correctCase[newIndex];
}
console.log(result);