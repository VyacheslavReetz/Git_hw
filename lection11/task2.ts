import {IAddress, ItEmployee, anotherOneJun} from './task1'

// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 

const Valera: IEmployee = {
    name: 'Valera',
    surname: 'Kuzbasov',
    salary: 20000,
    address: {
        country: 'Armenia',
        street: 'Georgievskaya',
        house: '18',
        flat: '13'
    }
}

interface IEmployee {
    name: string,
    surname: string,
    readonly salary: number,
    address?: IAddress
}

function isItEmployee(employee: object): employee is ItEmployee {
    return 'grade' in employee;
}

function getEmployeeInfo(employee: IEmployee | ItEmployee) {
    const address: string = employee.address !== undefined
    ? `г. ${employee.address?.country} ул. ${employee.address?.street}, дом ${employee.address?.house} кв. ${employee.address?.flat}`
    : 'Нет информации'

    if (isItEmployee(employee)) {
        console.log(`
            Имя: ${employee.name}
            Фамилия: ${employee.surname}
            Зарплата: ${employee.salary}
            Прописка: ${address}
            Грейд: ${employee.grade}
            Специальность: ${employee.occupation}
            Проекты: ${employee.projectNames}
            `);
    } else {
        console.log(`
            Имя: ${employee.name}
            Фамилия: ${employee.surname}
            Зарплата: ${employee.salary}
            Прописка: ${address}
            `);
    }
}

getEmployeeInfo(Valera);
getEmployeeInfo(anotherOneJun);

// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве. 

let Objectus = {
    'name': true,
    'surname': 'Kuzbasov',
    'salary': 20000,
    'address': 23
}

let Objectus2 = [
    {
    'name': true,
    'surname': 'Kuzbasov',
    'salary': 20000,
    'address': 23
    },
    {
        'name': true,
        'surname': 'false',
        'salary': false,
        'address': 23
    },
]

interface ICustomObject {
    [key: string]: number | string | boolean;
}
interface ICounter {
    [key: string]: number;
}

function resultBlock(obj: ICustomObject, result: ICounter) {
    for (let objKey of Object.values(obj)) {
        for (let key in result) {
            if (key === typeof(objKey)) {
                result[key]++;
            }
        }
    }

    return result;
}

function typeCounter(obj: ICustomObject | Array<ICustomObject>) {
    let result: ICounter = {
        string: 0,
        number: 0,
        boolean: 0
    }

    if(Array.isArray(obj)) {
        for (let i in obj) {
            resultBlock(obj[i], result)
        }
    } else {
        resultBlock(obj, result)
    }
    
    console.log(result);
}

typeCounter(Objectus);
typeCounter(Objectus2);

// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
//     который будет использоваться для проверки каждого числа на соответствие требованиям. 
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.

const numbers = [1, -5, 2, 3, 4, 133];

function filter<T>(currentArray: T[], InputFunc: (value: T, index: number, array: T[]) => boolean): T[] {
    const positiveArr: T[] = currentArray.filter(function(value, index, array) {
        return InputFunc(value, index, array);
      });
      
    return positiveArr;
}

console.log(filter(numbers, (n) => n % 2 == 0));