// Имеется массив объектов (ниже). Ваше задание:
// 1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
// 2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта
// 3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${ket}, value = ${value}`.
//    Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)
// 4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..in
// 5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
//    `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

 const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

// 1
  characters.forEach(element => {
        console.log(Object.keys(element))
  });

// 2
  characters.forEach(element => {
    console.log(Object.values(element))
});

// 3
characters.forEach(element => {
    for(const [key, value] of Object.entries(element)) {
        console.log(`key = ${key}, value = ${value}`);
      }
});

// 4
characters.forEach(element => {
    for( key in element) {
        console.log(`key = ${key}, value = ${element[key]}`);
    }
});

// 5
const qa = {
    name: 'Kolyan',
    age: '56',
    salary: '45000$',
    getinfo: function () {
        return console.log(`Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`);
    },
    };

qa.getinfo();