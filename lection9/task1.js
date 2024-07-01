// 1. Создайте класс Animal

class Animal {
    constructor(
        type,
        color,
        weight,
        height,
        place_of_origin
    ) {
        this.type = type;
        this._color = color;
        this.weight = weight;
        this.height = height;
        this.place_of_origin = place_of_origin;
    }

    getInfo() {
        return `Это ${this.type}, окрас преимущественно ${this._color}. ` +
        `Вес и рост: ${this.weight} кг, ${this.height} см. Обитает преимущественно в стране ${this.place_of_origin}. `
    }

    get color() {
        return `Цвет животного: ${this._color}`
    }

    set color(color) {
        const rightColor = ['Красный', 'Черный', 'Белый', 'Синий'];
        if (rightColor.includes(color)) {
            this._color = color;
        } else {
            throw new Error('Цвет не одобрен.')
        }
    }
}

const capibara = new Animal('Капибара', 'белый', 33, 27, 'Удмуртия');

// 2. В конструкторе класс должен принимать следующие параметры:     
//   - type
//   - color
//   - weight
//   - height
//   - place of origin

// 3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
console.log(capibara.getInfo());

// 4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
console.log(capibara.color);

// 5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
//   - Красный
//   - Черный
//   - Белый
//   - Синий

// Если не является - кидаем ошибку через throw new Error('текст ошибки')
capibara.color = 'Красный';
console.log(capibara.color);

// 6. Создайте класс Snake, который будет наследовать класс Animal
// 7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous

class Snake extends Animal {
    #isPoisonous;

    constructor(type, color, weight, height, placeOfOrigin, isPoisonous)
    {
        super(type, color, weight, height, placeOfOrigin);
        this.#isPoisonous = isPoisonous;
    }

    checkPoisonous(){
        return this.#isPoisonous;
    }

    getInfo(){
        return `${super.getInfo()}` + (this.#isPoisonous ? 'Змея ядовита' : 'Змея безопасна')
    }
}

// 8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
const snake = new Snake('Питон', 'Черный', 10, 50, 'Чехословакия', true);
console.log(snake.getInfo());

// 9. В классе Snake создать метод checkPoisonous(), который возвращает true/false
console.log(snake.checkPoisonous());

// 10. Сделайте поле isPoisonous приватным в классе Snake
module.exports = {Animal, Snake};