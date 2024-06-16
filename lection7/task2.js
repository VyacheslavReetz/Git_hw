// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

function numberOfRepetitions(string){
    const arrSymbols = string.toLowerCase().split('').map(function(name, i, arr) {
        return 'abcdefghijklmnopqrstuvwxyz'.includes(name) ? arr.filter(item => item === name).length : name;
    });

    return (arrSymbols.join(''));
}

console.log(numberOfRepetitions('I am the best AQA ever!'));

// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
//   const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

function priceAgregator(allPurchases) {
    const sum = allPurchases.reduce(function(sum, current) {
        return sum + current;
      }, 0);

    return typeof(sum) === 'number' && !isNaN(sum) 
    ? `Итого: ${sum} $, средняя цена товара ${sum/allPurchases.length} $` 
    : 'Цены вписаны некоректно'
}

console.log(priceAgregator([
        64, 7556, 345, 7556, 345, 7556,
        345, 7556, 433, 345, 756, 123,
        942, 3112, 421, 9341, 1212, 8,
        43, 41, 345, 341, 21, 321, 123
    ]));

// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возврастанию количества гласных букв в слове.

// function sortByVowels(wordArray){
//     const vowelsStr = 'aeiouy';
//     wordArray.sort(function (a, b) {
//         for (let i = 0; i < a.length; i++) {
            
//         }
//         return b.length - a.length;
//     });;
// }

function vowelsNum(word) {
    return /[aeiouy]/g.test(word) ? word.match(/[aeiouy]/g).length : 0
};

function sortByVowels(sentence) {
    return sentence.sort((a, b) => vowelsNum(a) - vowelsNum(b));
};

console.log(sortByVowels(['apple', 'orange', 'watermellon', 'cucumber', 'carrot', 'lime', 'sok']));


// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
//   Пример:
 const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]

function doAllHavePair(array) {
    flat = array.flat(Infinity);
    const bracketSum = (bracket) => {
        return flat.filter(function(symbol) {
            return symbol === bracket;
        }).length;
    }

    return bracketSum('(') === bracketSum(')');
}

console.log(doAllHavePair(arr));