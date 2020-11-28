'use strict';

let cities = ["Москва", "Тверь", "Анапа", "Владивосток"];
// меняет массив
// по умолчанию сортирует элементы как строки
cities.sort();
console.log(cities);

let nums = [7, 40, 600, 6];
nums.sort();
console.log(nums);

// должна возвращать:
// 0, если first === second
// отрицательное число, если first < second
// положительное число, если first > second
function sortArr(first, second) {
    //либо if (first === second) return 0; и тд, либо:
    return first - second;
}

nums.sort(sortArr);
console.log(nums);

let users = [
    {
        login: "qwe",
        age: 23,
        city: "Анапа",
    },
    {
        login: "asd",
        age: 34,
        city: "Москва",
    },
    {
        login: "rty56",
        age: 34,
        city: "Тверь",
    }
];

function sortUsers(first, second) { // по возрасту, по городу
    // return first.age - second.age; // по возрасту
    return first.city.localeCompare(second.city); // по городу
}
users.sort(sortUsers);


