'use strict';
import {default as Cat} from './Cat.js';
import {default as Mouse} from './Mouse.js';

// создание объектов
let cat = new Cat('Tom', 7);


let mouse1 = new Mouse('Jerry', 10);
let mouse2 = new Mouse('Mickey', 3);
let mouse3 = new Mouse('Pinkey', 6);

cat.catchMouse(mouse1);
cat.catchMouse(mouse2);
cat.catchMouse(mouse3);

console.log(cat);
console.log(mouse1);
console.log(cat._mice);


// export default class {}
// export default {}
// import {default as AliasName} from './file.js'

// export default class ClassName {}
// import {default as AliasName} from './file.js'
// import ClassName from './file.js'