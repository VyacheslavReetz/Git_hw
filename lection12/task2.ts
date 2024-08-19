// 1. Напишите функцию, реализующую методы массивов map. Функции принимают на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type Callback <T, P> = (val: T, index?: number, array?: readonly T[]) => P;

function mapping<T, P> (arr: T[], callback: Callback<T, P>) : P[] {
    const newArr: P[] = [];

    arr.forEach((element, index, arr) => {
        newArr.push(callback(element, index, arr))
    });

    return newArr;
}

const testArray = [1,2,3,4,5];
console.log(mapping(testArray, (element, index: any) => element * index));



// 2. Напишите дженерик функцию generateObject, которая принимает массив пар [string, T] 
//   и возвращает объект, где каждая пара ключ-значение из массива превращается в соответствующую пару ключ-значение в объекте. 
//   В случае если ключи повторяются, значение в объекте должно быть последним из встречающихся.

//   Требования:
//     - Функция должна быть дженерик и работать с любыми типами значений.
//     - Функция должна корректно обрабатывать массив пар, включая случаи, когда ключи повторяются.

type arrOfArrays<T> = [
    arg1: string,
    arg2: T
][]

type resultObject<T> = {[key: string]: T}

function generateObject<T>(array: arrOfArrays<T>): resultObject<T> {
    const resultObj: resultObject<T> = {};

    // only with es2019
    return Object.fromEntries(array); 
}

//   Пример:
const result = generateObject([
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["4", 5], // повторяющийся ключ, значит это значение должно быть в результирующем объекте
]);

console.log(result); //{ '1': 1, '2': 2, '3': 3, '4': 5 }
