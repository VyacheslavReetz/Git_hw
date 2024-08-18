// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean
}

const QA: readOnlyEmployee = {
    name: 'Sergey',
    salary: 2000,
    isManager: false
}

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
type EmployeeKeys = keyof IEmployee;

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
type QaKeys = keyof typeof QA;

// 4. Создайте тип UserType из объекта QA (используйте typeof)
type UserType = typeof QA;

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
type partialEmployee  = Partial<IEmployee>;

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
type employeeCost1 = Pick<IEmployee, 'name' | 'salary'>;

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
type employeeCost2 = Omit<IEmployee, 'isManager'>;

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
type readOnlyEmployee = Readonly<IEmployee>;

// 9. Создайте тип, для массива объектов, где в ключах могут быть строки, в значениях number, string или boolean

type arrOfObj = {[key: string]: number | string | boolean}[]

let u: arrOfObj = [
    {'cost': 2000},
    {'goodboy': true},
    {'name': 'tuzik'}
]