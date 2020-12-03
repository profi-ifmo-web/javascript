'use strict'; // this.js

let someObj = {
    someProp: "Свойство объекта",
    someVoid(){
        console.log("контекст someVoid", this);
        // console.log("Свойство", this.someProp);
    },
    someVoidWithArgs: function (count) {
        console.log("контекст someVoidWithArgs", this);
        console.log("count", count);
    }
};

let user = {
    name: 'Олег'
};

function someFunc(func){
    func();
}

someObj.someVoid(); // someObj с 'use strict' / someObj без 'use strict'
// потеря контекста
// someFunc(someObj.someVoid); // undefined с 'use strict' / window без 'use strict'
// setInterval(someObj.someVoid, 2000); // window / window

// привязка контекста
// метод bind(контекст, аргументы) - метод функций
someFunc(someObj.someVoid.bind(someObj));
someFunc(someObj.someVoid.bind(user));
setInterval(someObj.someVoid.bind(someObj), 2000);

// передача аргументов
someObj.someVoidWithArgs(100); // someObj
someFunc(someObj.someVoidWithArgs.bind(someObj, 100)); // undefined
someFunc(someObj.someVoidWithArgs.bind(100));
// this - 100
// count - undefined
someFunc(someObj.someVoidWithArgs.bind(null, 100));
// this - null
// count - 100
// контекст - user,  someNums - [2, 5, -10]
function newFunc(someNums) {
    console.log(this);
    console.log(someNums);
}
someFunc(newFunc.bind(user, [2, 5, -10]));
