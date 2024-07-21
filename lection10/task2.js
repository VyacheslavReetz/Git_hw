// 1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
//     Функция должна исполнить колбэк строго через переданное количество миллисекунд
//     Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
    
async function delay(callback, time) {
    setTimeout(callback, time);
}

delay(() => console.log('hello'), 2000);

// 2. Создайте два промиса:
//   - promise1 должен резолвать "After 3 seconds" через 3 секунды
//   - promise2 должен резолвать "After 5 seconds" через 5 секунд


const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('After 3 seconds'), 3000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve('After 5 seconds'), 5000);
});

//   Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
//   1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди

const all = Promise.all([promise1, promise2])
const allSettled = Promise.allSettled([promise1, promise2])

all.then((responses) => {
    for (const res of responses) {
        console.log(res);
    }
});
allSettled.then((responses) => {
    for (const res of responses) {
        console.log(res.value);
    }
});

//     2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке. 
//         Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
//         Вывести в консоль результат обоих промисов по очереди

async function myPromises(promiseMode) {
  try {
    const [promise1Result, promise2Result] = await promiseMode;
    return typeof promise1Result === 'object'
    ? [console.log(promise1Result.value), console.log(promise2Result.value)]
    : [console.log(promise1Result), console.log(promise2Result)];
  } catch (error) {
    console.log(error);
  }
}

myPromises(all);
myPromises(allSettled);

// 3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
//   Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
//   Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
//   Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
//   и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch

function summ(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject(new Error('Не все переданные аргументы являются цифрами'));
      }
    });
}


summ(1, 2)
.then((response) => console.log(`Результат: ${response}`))
.catch((err) => console.log(err.message))

async function tryCatch() {
    try {
        const result = await summ(1, '2');
        console.log(`Результат функции: ${result}`);
    } catch (err) {
        console.log(err.message);
    }
};

tryCatch();

// 4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
//     Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)


const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => console.log((data.filter(user => user.userId === 1))))
    .catch(err => console.log(err));



async function getResponse (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.filter(user => user.userId === 1))
  } catch (err) {
    console.log(err);
  }
}

getResponse(url);