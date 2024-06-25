// Task 2. Перед вами структура компании, и ниже представлены задания, относящиеся к ней. 
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const { log } = require("console");

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]


// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

lookAtMyOrganization(enterprises);

function lookAtMyOrganization(organization) {
    return organization.forEach((company) => {
        companyInfo(company);
        departmetsInfo(company.departments);
    });
}

function companyInfo(company) {
    return console.log(`${company.name} (${countEmployees(company.departments)} сотрудников)`);
}

function countEmployees(departments) {
    return isNull(departments.reduce((result, value) => result + value.employees_count, 0));
};

function departmetsInfo(departments) {
    return departments.forEach((department) => 
        console.log(`- ${department.name} (${isNull(department.employees_count)} сотрудников)`)
    );
};

function isNull(number) {
    return number !== 0 ? number : 'Нет';
}

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

function getEnterpriseName(askBody) {
    return typeof(askBody) === 'number' ? findById(askBody) : findByDepartment(askBody)
}

function findById(askedId) {
    const [result] = enterprises.filter(company => company.departments.find(department => department.id === askedId));
    return result !== undefined ? result.name : 'Совпадений не найдено';
}

function findByDepartment(askedDepartment) {
    const result = enterprises.filter(company => company.departments.find(department => department.name === askedDepartment));
    return result !== undefined ? result.reduce((string, company) => string + ' ' + company.name, '') : 'Совпадений не найдено';
}

console.log(getEnterpriseName("Отдел маркетинга"));

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
function getMaxId() {
    return enterprises.reduce((newId, company) => (company.id > newId) ? newId = company.id : newId, 0)
}

function isCompanyExist(potencialCompany) {
    const result = enterprises.find(department => department.name === potencialCompany);
    return (result === undefined);
}

function newCompany(companyName) {
    if (!isCompanyExist(companyName)) {
        return console.log('Такая компания уже существует')
    } else {
        enterprises.push({
            id: getMaxId() + 1,
            name: companyName
        })
        return console.log(enterprises[enterprises.length-1])
    }
}

newCompany('Предприятие 4');

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

function addDepartment(id, name) {
    const updatedCompany = enterprises.find(company => {
        return company.id === id ? company.departments.push({id: getMaxId() + 1, name: name}) : false;
    })
    return updatedCompany ? console.log(updatedCompany) : console.log('Компании с таким id не существует');
}

addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

function editEnterprise(id, name) {
    const updatedCompany = enterprises.find(company => {
        return company.id === id ? company.name = name : false;
    })

    return updatedCompany ? console.log(updatedCompany) : console.log('Компании с таким id не существует');
}

editEnterprise(1, "Новое название предприятия")


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

function editDepartment(id, name) {
    const result = enterprises.reduce((state, company) => {
        let idDep = company.departments?.find(department => {
            return department.id === id ? department.name = name : false
        })

        return idDep ? state = 1 : state;
    }, 0)

    return result ? console.log('Название отдела изменено успешно') : console.log('Не найдена компания с таким id');
}

editDepartment(7, "Новое название отдела");



// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

function deleteEnterprise(id) {
    const deletedEnterpriseId = enterprises.findIndex(company => company.id === id);

    if (deletedEnterpriseId) {
        return console.log('Компании с таким id не существует');
    } else {
        enterprises.splice(0, 1);
        return console.log('Компания успешно удалена')
    }
}

deleteEnterprise(3)


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
function findDeleteIds(id) {
    const searchedIds = enterprises.reduce((index = [], element, companyIndex) => {
        const findIndex = element.departments?.findIndex(department => department.id === id);

        return (findIndex !== -1 && findIndex !== undefined) 
        ? [companyIndex, findIndex] 
        : index;
    }, []);

    return searchedIds.length === 2 ? searchedIds : false;
}
    
function checkEmployeesCount (targetIds) {
    const employeesCount = enterprises[targetIds[0]].departments[targetIds[1]].employees_count;
 
    return  employeesCount !== 0 && employeesCount !== undefined
    ? console.log('В отделе ещё остались живые люди!')
    : true
}
      
function deleteDepartment(id) {
    const targetIds = findDeleteIds(id);

    if (targetIds && checkEmployeesCount(targetIds)) {
        enterprises[targetIds[0]].departments.splice(targetIds[1], 1)
    
        console.log('Отдел успешно удалён'); 
    } else {
        console.log('Не корректные данные, свяжитесь с администратором');
    }
}
    
// Пример:
deleteDepartment(10);
console.log(enterprises)
      
// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

function findMoveEmployeesIds(ids) {
    const searchedIds = enterprises.reduce((index, element, companyIndex) => {
        const findIndex = element.departments?.findIndex(department => department.id == ids[0]);

        return (findIndex !== -1 && findIndex !== undefined) 
        ? [companyIndex, findIndex, element.departments?.findIndex(department => department.id === ids[1])] 
        : index;
    }, []);

    return (searchedIds.length === 3 && !searchedIds.includes(undefined)) ? searchedIds : false;
}
    
function moveEmployees(fromDepartment, targetDepartment) {
    const targetIds = findMoveEmployeesIds([fromDepartment, targetDepartment]);
    if (!targetIds) {
        return console.log('Не корректные данные, свяжитесь с администратором');
    } else {
        const employeeBus = enterprises[targetIds[0]].departments[targetIds[1]].employees_count;
        enterprises[targetIds[0]].departments[targetIds[1]].employees_count = 0;
        enterprises[targetIds[0]].departments[targetIds[2]].employees_count = enterprises[targetIds[0]].departments[targetIds[2]].employees_count + employeeBus;
        
        return console.log(enterprises[targetIds[0]]);
    }
}
    
//   Пример:
moveEmployees(20, 3)