// 5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.

function findMissingNumber(arr = []) {
    return arr.sort((a, b) => a - b).reduce((result, value, index, array) => {
        const checker = array[index+1] - value;
        return (checker > 1 && checker !== NaN) ?  result = value + 1 : result
    }, 'Нет пропущенных значений');
}

const numbers = [5, 2, 1, 5, 3, 3, 0 , 1, 2];
console.log(findMissingNumber(numbers));

// 6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты. 
//   Вернуть массив с сугубо уникальными карточками. Реализовать методом SET. 
//   Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.

// import data from './cards.json' assert { type: 'json' };  // Загрузка без лишних шагов
const fs = require("fs");

const jsonData = [...JSON.parse(fs.readFileSync("./lection7/cards.json", "utf-8"))];

function uniqueObjects(arr =[]) {
    return [...new Set(arr.map(a => JSON.stringify(a)))]
    .map(s => JSON.parse(s));
}

console.log(uniqueObjects(jsonData));