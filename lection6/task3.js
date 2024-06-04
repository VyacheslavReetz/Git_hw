// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

function recursion(number) {
    if (number <= 9) {
        return number;
    } else {
        let sum = 0;
        const array = number.toString().split('');

        array.forEach(element => {
            sum = sum + +element;
        });

        return recursion(sum);
    }
  }
  
  console.log(recursion(19123));

// 6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару стоящих подряд идентичных букв на одну следующую в алфавите, 
//     и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
//     Пример: aabc => bbc => cc => d

function transformer(string) {  // работает и с верхним регистром
    let charArray = string.split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < charArray.length; i++) {

        if (charArray[i] === charArray[i+1] 
            && (alphabet.indexOf(charArray[i]) !== -1 || alphabet.toUpperCase().indexOf(charArray[i]) !== -1)
        ) {
            let correctCase = alphabet;
            if (alphabet.indexOf(charArray[i]) === -1) {
                correctCase = alphabet.toUpperCase();
            }
            let newCharIndex = correctCase.indexOf(charArray[i]) + 1;
            if (newCharIndex === 26) {
                newCharIndex = 0;
            }
            charArray[i] = correctCase[newCharIndex];
            charArray.splice(i+1, 1);
            i--;
        }
    };

    return charArray.join('');
}

console.log(transformer('aabc--ZZA'));