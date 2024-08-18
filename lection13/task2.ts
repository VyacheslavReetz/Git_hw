// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
// Задача класса - хранить объекты типа Т в приватном массиве
// Реализуйте в классе следующие методы:
//   - constructor должен принимать необзятельный массив объектов соответствующего типа. 
//     Если массив пришел - объекты запушить в хранилище.
//   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
//     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
//     Если на вход подан объект с айди - запушить его в хранилище
//     Для типизации используйте Utility Types
//   - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 
//   - remove, принимающий на вход id и удаляющий объект из массива
//   - getById(id), возвращающий объект по айди если найден
//   - getAll(), возвращает все объекты в хранилище

interface ID {
    id: number
}

class MyStorage<T extends ID> {
    private storage: T[] = [];
    
    private makeUniqueId(): number {
        let newId = 1;
		return this.storage.length === 0 ? newId : (Math.max(...this.storage.map(obj => obj.id)) + 1);
    }
    private isIdExist(id: number) {
        return this.storage.map(obj => obj.id).includes(id);
    }    
    private validateIdAndRun(
        id: number,
        callback: Function = function() {}
    ): T {
        if (this.isIdExist(id)) {
            const index = this.storage.map(obj => obj.id).indexOf(id);
            
            return callback(index);
        } else throw new Error (`Object with id=${id} not found`);
    }

    constructor(info?: T[]) {
        if (info) {
            this.storage.push(...info);
        }
    }

	add(info: T): void;
	add(info: Omit<T, 'id'>): void;
    add(info: T | Omit<T, 'id'>): void {
        if ('id' in info && !this.isIdExist(info['id'])) {
            this.storage.push(info);
        } else if ('id' in info) {
            info.id = this.makeUniqueId();
            this.storage.push(info);
        } else {
            const id = this.makeUniqueId();
            this.storage.push({id, ...info} as T);
        }
    }

    update(info: T): void {
        this.validateIdAndRun(info.id, (index: number) => this.storage[index] = {...this.storage[index], ...info});
    }

    remove(id: number): void {
        this.validateIdAndRun(id, (index: number) => this.storage.splice(index, 1));
    }

    getById(id: number): T {
        return this.validateIdAndRun(id, (index: number) => this.storage[index]);
    }

    getAll() {
		return this.storage;
	}
}

interface IUser {
	id: number,
	name?: string,
	age?: number,
}

const storage = new MyStorage<IUser>();

// Пример использования
  storage.add({ id: 1, name: 'Anatoly', age: 33 }); // valid
  storage.add({ id: 1, name: 'Elena', age: 25 }); // valid, created with id === 2

  storage.update({ id: 1, name: 'Egor' });
  storage.update({ id: 2, name: 'Tatiana', age: 33 });

  console.log(storage.getById(1)); // { id: 1, name: 'Egor', age: 33 }
  console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }, { id: 2, name: 'Tatiana', age: 33 }]

  storage.remove(2);

  console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }]