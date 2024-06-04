// 1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb

//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb

//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

const sizeInBytes = 45482132131231;
let result = sizeInBytes;
let units = 'bytes';
let i = 0;

while (i < 4 && result > 1024 ) {
    result = result / 1024;
    i++;
}

switch (i) {
    case 1: 
        units = 'Kb';
        break;
    case 2: 
        units = 'Mb';
        break;
    case 3:
        units = 'Gb';
        break;
    case 4:
        units = 'Tb';
}   

console.log(sizeInBytes + ' = ' + result.toFixed(1) + ' ' + units);

// 2. Сделать из "*" в консоли равнобедренный треугольник и ромб

// равнобедренный треугольник
let stars = '*';
let spaces = '      ';
for (let i = 0; i<5; i++) {
    console.log(spaces + stars);
    stars = stars + ' *';
    spaces = spaces.slice(0, spaces.length - 1);
 }

// ромб
let edge = 5; // регулятор размера, для тех кто хочет большой ромб
let stars2 = '';
let spaces2 = ' '.repeat(edge);
for (let i = 0; i < edge*2; i++) {
    if (i < edge) {
        stars2 = stars2 + ' *';
        spaces2 = spaces2.slice(0, spaces2.length - 1);
        console.log(spaces2 + stars2);
    } else {
        stars2 = stars2.slice(0, stars2.length - 2);
        spaces2 = spaces2 + ' ';
        console.log(spaces2 + stars2);
    }
 }


// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Число ${i} делится без остатка на 3 и на 5`);
        continue;
    }
    if (i % 3 === 0) {
        console.log(`Число ${i} делится без остатка на 3`);
        continue;
    }
    if (i % 5 === 0) {
        console.log(`Число ${i} делится без остатка 5`);
        continue;
    }
    console.log(i);
}

// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

const sentence = 'I am super engineer';
let arr = sentence.toLowerCase().split(' ');
let camelCased = arr[0];
for (let i = 1; i < arr.length; i++) {
    let word = arr[i];
    camelCased = camelCased + word[0].toUpperCase() + word.slice(1, word.length);
}
console.log(camelCased);