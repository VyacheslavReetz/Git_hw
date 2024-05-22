"use strict";

// 1) x2 - 6x + 9 = 0
// 2) x2 - 4x - 5 = 0

function calculate(a, b, c) {
    let radical1, radical2, discriminant, answer;
    discriminant = b*b - (4*a*c);
    radical1 = (- b - Math.sqrt(discriminant))/2;
    radical2 = (- b + Math.sqrt(discriminant))/2;
    if (radical1 === radical2){answer = radical1} 
        else {answer = radical1 + ' и ' + radical2};

    return answer;
}

console.log(`Ответ к уравнению 1: ${calculate(1, -6, 9)}, Ответ к уравнению 2: ${calculate(1, -4, -5)}`);