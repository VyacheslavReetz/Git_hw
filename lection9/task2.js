const {Animal, Snake} = require('./task1.js');

// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal

class Bird extends Animal {
    #isFlying;

    constructor(type, color, weight, height, placeOfOrigin, isFlying)
        {
            super(type, color, weight, height, placeOfOrigin);
            this.#isFlying = isFlying;
        }
}

const bird = new Bird('Калибри', 'Зелёный', 0.2, 0.05, 'Чехословакия', true);
console.log(bird.getInfo());


// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal

class CatLike extends Animal{
    constructor (type, color, weight, height, placeOfOrigin, isSafeToPet) {
        super(type, color, weight, height, placeOfOrigin);
        this.isSafeToPet = isSafeToPet;
    }
}

// 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
//     class Worker
//       firstName
//       lastName
//       phone
//       getFullName()

class Worker {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }

    getFullName() {
        return `Полное имя сотрудника: ${this.firstName} ${this.lastName}`;
    }
}

const worker = new Worker('Джон', 'Доу', '8-800-555-35-35');
console.log(worker.getFullName());

// 4. Создайте класс Zoo, реализующий следующий интерфейс:
//     class Zoo
//       address
//       title
//       ticket price
//       workers: []
//       animals: [],
// 5. Добавьте геттеры и сеттеры к полям address, title, ticket price
// 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
//     На вход метод должен принимать объект класса Worker. 
//     Если объект не является инстансом класса Worker - выкинуть ошибку
// 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
//     На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
//     Если объект не является инстансом класса Animal - выкинуть ошибку
//     ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)

class Zoo {
    workers = [];
    animals = [];

    constructor(address, title, ticketPrice) {
        this.address = address;
        this.title = title;
        this.ticketPrice = ticketPrice;
    }

    get address() {
        return `Адрес зоопарка: ${this._address}`
    }
    get title() {
        return `Название зоопарка: ${this._title}`
    }
    get ticketPrice() {
        return `Цена билета: ${this._ticketPrice}`
    }

    set address(newAddress) {
        this._address = newAddress;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    set ticketPrice(newPrice) {
        this._ticketPrice = newPrice;
    }

    addWorker(worker) {
        if (worker instanceof Worker) {
            this.workers.push(worker);
        } else {
            throw new Error('Неправильный формат');
        }
    }

    addAnimal(animal) {
        if (animal instanceof Snake) {
            throw new Error('There will be no snakes, mister Potter!')
        } else if (animal instanceof Animal) {
            this.animals.push(animal)
        } else {
            throw new Error('Wrong animal info')
        }
    }

    removeWorker(phone){
        const index = this.workers.findIndex(el => el.phone === phone);
        if (index !== -1) {
            this.workers.splice(index, 1)
        } else {
            throw new Error('No such number')
        };
    }

    removeAnimal(type){
        const index = this.animals.findIndex(el => el.type === type);
        if (index !== -1) {
            this.animals.splice(index, 1)
        } else {
            throw new Error('No such animal')
        }
    }
}

const zoo = new Zoo('Ялта', 'Зоопарк имени Вернадского', 800);

zoo.addAnimal(new Bird('Гусь', 'Красный', 15, 0.33, 'Америка', false));
zoo.addWorker(new Worker('Гарри', 'Топор', '626262'));
console.log(zoo);

zoo.removeWorker('626262');
zoo.removeAnimal('Гусь');
console.log(zoo);