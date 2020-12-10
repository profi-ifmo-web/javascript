'use strict';
import {default as Cat} from './Cat.js';
import {default as Mouse} from './Mouse.js';
import {Unit, Knight} from "./Unit.js";

// создание объектов
let cat = new Cat('Tom', 7);
// использование сеттеров и геттеров
cat.speed = 5; // обращение к сеттеру
console.log(cat.speed); // обращение к геттеру

let mouse1 = new Mouse('Jerry', 10);
let mouse2 = new Mouse('Mickey', 3);
let mouse3 = new Mouse('Pinkey', 6);


cat.catchMouse(mouse1);
cat.catchMouse(mouse2);
cat.catchMouse(mouse3);

console.log(cat);
console.log(mouse1);
console.log(cat.mice);

let knight = new Knight('Рыцарь', 2);
knight.attack = 7;
knight.health = 18;

let infantry = new Unit('Пехотинец');
infantry.attack = 10;
infantry.health = 10;

knight.attackOther(infantry);
infantry.attackOther(knight);

// export default class {}
// export default {}
// import {default as AliasName} from './file.js'

// export default class ClassName {}
// import {default as AliasName} from './file.js'
// import ClassName from './file.js'









