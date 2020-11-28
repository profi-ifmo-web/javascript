'use strict';

// объекты используются для хранения набора свойств,
// например, данные о статье, товаре и тд

let userData = {}; // создали пустой объект
console.log(userData);

// обращение к свойствам объекта:
// имяОбъекта.имяСвойства
// свойствами могут быть строки (все, что преобразуется к строке)
// или тип Symbol
// в качестве значений можно использовать любые типы данных
// (примитывы и ссылочные типы)

// в объект userData добавили свойство name со значением Павел
userData.name = 'Павел';
console.log(userData);
// получили значение свойства name
console.log(userData.name);

// в объект userData добавили свойство age со значением 26
userData.age = 26;
console.log(userData);

// изменили значение свойства age объекта userData
userData.age = 31;

// в объект userData добавили свойство favouriteColors
// со значением ["red", "orange", "yellow"]
userData.favouriteColors = ["red", "orange", "yellow"];


for (let color of userData.favouriteColors) {
    console.log(color);
}
userData.favouriteColors.forEach(color => console.log(color));

console.log(userData);

console.log(userData.avatar); // undefined

// способы проверки существования свойства в объекте
// 1. сравнение с undefined
if (userData.avatar === undefined) userData.avatar = "default.png";
// если есть необходимость добавить свойство в объект,
// но значение свойству собираетесь присвоить позже,
// то такое свойство должно быть равно null (или 0, false, '', [])
userData.login = null;

// 2. проверка оператором in
// если в объекте нет свойства githubLink,
// добавить его со значением null
// if ("githubLink" in userData) если свойство githubLink содержится
// в объекте userData, оператор in вернет true,
// если такого свойства в объекте нет, вернет false

if (!("githubLink" in userData)) userData.githubLink = null;

console.log(userData.githubLink); // обращение к свойству через .
// обращение к свойству через ["имяСвойства"],
// когда имя свойства записано строкой
console.log(userData["githubLink"]);

let link = "githubLink";
console.log(userData[link]); // -> userData["githubLink"]

// создали объект jsBook со следующими свойствами:
// свойством title и значением About JS
// свойством author и значением JS Junior
// свойством pageCount и значением 341
let jsBook = {
    title: "About JS",
    author: "JS Junior",
    pageCount: 341
};
// ключ, свойство  / свойство, поле, атрибут
jsBook.pics = ["array.png", "objects.png"];

let phpBook = {
    title: "About PHP 7.4",
    author: "PHP Middle",
    pageCount: 712,
    pics: ["session.png", "orm.png"]
};

// вывести значение свойства title, если оно есть в объекте
if ("title" in jsBook) console.log(jsBook.title);
if ("title" in phpBook) console.log(phpBook.title);

userData.books = [jsBook, phpBook];
console.log(userData);

console.log(jsBook.pics[0]); // "session.png"
console.log(userData.books);
console.log(userData.books[1]);
console.log(userData.books[1].pics);
console.log(userData.books[1].pics[0]);
console.log(userData.books[1]["pics"][0]);

// для перебора объектов используется цикл for ... in ...
// переберем phpBook
phpBook = {
    title: "About PHP 7.4",
    author: "PHP Middle",
    pageCount: 712,
    pics: ["session.png", "orm.png"]
};
// на каждой итерации цикла в propName будет свойство объекта
// for (let свойство in объект)
for (let propName in phpBook) {
    // console.log(`имя свойства ${propName},
    // значение свойства ${phpBook[propName]}`);

    console.log(propName, phpBook[propName]);
}

let info = {
    "additional_info":
        {"vaccinations": false, "passport": false}
};

for (let propName in info) {
    for (let prop2Name in info[propName]){
        console.log(prop2Name, info[propName][prop2Name]);
    }
}

// удаление свойства из объекта
delete userData.login;
console.log(userData.login);

// вывести в консоль названия книг объекта userData
// с количеством страниц больше 500

for (let book of userData.books) { //[phpBook, jsBook]
    console.log(book);
    if (book.pageCount > 500) {
        console.log(book.title);
    }
}
// получим массив книг, у которых количество страниц > 500
let arr = userData.books.filter(book => book.pageCount > 500);
console.log(arr);


let messages = [
    {
        text: "some text",
        priority: "high",
        code: 231
    },
    {
        text: "message text",
        priority: "low",
        code: 23
    },
    {
        text: "text",
        priority: "high",
        code: 1000
    }
];

let someMess = [
    {
        text: "some text",
        code: 231
    },
    {
        text: "message text",
        code: 23
    },
    {
        text: "text",
        code: 1000
    }
];
// написать функцию, которая принимает на вход число (messageCode) и массив сообщений
// и возвращает объект сообщения, код, которого равен messageCode
function one(messageCode, messagesArr) {
    for (let mess of messagesArr) { // for (let mess of messages)
        if (messageCode === mess.code) return mess;
    }
}
console.log(one(1000, messages));
console.log(one(1000, someMess));

function getCode(code, arr) {
    for (let i = 0; i < arr.length; i++) { // for (let obj of messages)
        if (code === arr[i].code) {
            return arr[i];
        }
    }
}
console.log(getCode(1000, messages));

// Деструктуризация объекта
phpBook = {
    title: "About PHP 7.4",
    author: "PHP Middle",
    pageCount: 712,
};
// let {title: переменная1, price: переменная2} = phpBook;
// объявили переменную titleVar, ей будет присвоено значение
// свойства title объекта phpBook, те
// let titleVar = "About PHP 7.4"
let {title: titleVar, price: priceVar = 5000, ...others} = phpBook;
console.log(titleVar, priceVar);
console.log(others); // {author: "PHP Middle", pageCount: 712}

phpBook = {
    title: "About PHP 7.4",
    author: "PHP Middle"
};
// Дескрипторы свойств объекта
// У каждого свойства объекта кроме значения есть флаги:
// writable:
//   если значение true, свойство можно изменить
//   если значение false, свойство доступно только для чтения
// enumerable:
//   если значение true, свойство будет доступно в цикле
//   если значение false, свойство будет игнорироваться циклом
// configurable:
//   если значение true, свойство можно удалить, а флаги можно менять,
//   если значение false свойство нельзя удалить, а флаги нельзя менять

// получим описание свойства title объекта phpBook
let titleDesc = Object.getOwnPropertyDescriptor(phpBook, "title");
console.log(titleDesc);

let authorDesc = Object.getOwnPropertyDescriptor(phpBook, "author");
console.log(authorDesc);

// изменим флаги
Object.defineProperty(phpBook, "title", {
    writable: false // свойство title будет доступно только для чтения
});
console.log(phpBook.title);
phpBook.title = "PHP 7.0"; // не можем изменить значение, тк writable: false

Object.defineProperty(phpBook, "author", {
    enumerable: false  // свойство "author" будет игнорироваться циклом
});



















