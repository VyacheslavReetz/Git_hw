// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function isMyPizzaUnique(myPizzas) {
    const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
    let result = [];

    myPizzas.forEach(element => {
        if (!competitorPizzas.includes(element)) {
            result.push(element);
        }
    });

    return (result.length !== 0 ? result : null);
}

console.log(isMyPizzaUnique(['4 cheeses', 'hawai', 'Gimalai']));



// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

function longestWord(string) {
    let wordArray = string.split(' ');
    
    wordArray.sort(function (a, b) {
        return b.length - a.length;
    });

    for (let i = 1; i < wordArray.length; i++) {
        if (wordArray[i].length < wordArray[i-1].length) {
            wordArray.splice(i, wordArray.length-i);
            break;
        }
    };
    const result = wordArray.join(', ');

    return result;
}

console.log(longestWord('Caprichosa Diablo Peperonida cheeses hawai'));

// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

function isMyNumbersUnique(myNumbers) {
    if (!Array.isArray(myNumbers) || myNumbers.length === 0) {
        return null
    }
    const result = myNumbers.reduce((seenNumber, digit) => {
        if (seenNumber.includes(digit)) {
            return seenNumber;
        }
        return [...seenNumber, digit];
    }, []);

    return (result.length !== 0 ? result : null);
}

console.log(isMyNumbersUnique([1, 3, 1, 8, 8, 22, 45, 1, 8, 44]));

// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function palindrome(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('') 
          ? `Палиндром` : 'Не палиндром';
  }
  
  console.log(palindrome('Abraka-akarba'));