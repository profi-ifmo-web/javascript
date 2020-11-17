'use strict';
// пустой массив
let arr = [];
console.log(arr);

// массив с элементами
let colors = ["red", "blue", "yellow", "green"];
console.log(colors);

// доступ к элементам массива осуществляется по его имени через []
console.log(colors[2]); // yellow
console.log(colors[0]); // red
console.log(colors[10]); // undefined

// изменение значения элемента массива
colors[3] = "black";
colors[30] = "white";
console.log(colors);

// разряженный массив - массив, в котором данные представлены
// не непрерывно, а фрагментарно
colors = ["red", , "blue", , , , "yellow"];
console.log(colors);

// длина массива (совоство length есть у всех массивов)
let colorLength = colors.length; // значение последнего индекса + 1
console.log(colorLength);

colors.length = 2;
console.log(colors);

let nums = [34, 67, -100];
console.log(nums[2]); // -100

nums = [
    [34, 67, -100],
    [-2, 45, 12],
    [-700, 281, -152]
];
console.log(nums[0]); // [34, 67, -100]
console.log(nums[0][2]); // -100
console.log(nums[1][1]); // 45
console.log(nums[2][0]); // -700

// значение свойства length массива [-700, 281, -152]
console.log(nums[2].length); // 3

// последовательно обращение к элементам массива -
// - перебор массива:
// 1. с возможностью изменить значения элементов массива
// for (let i = 0; i < arr.length; i++) { элемент массива - arr[i] }
// 2. без возможности изменить значения элементов массива
// for (let elem of arr) { элемент массива - elem }
// 3. arr.foreach() - метод массива

// увеличить значение каждого четного элемента массива в 2 раза
nums = [2, 56, 66, -123, 0, 45, 45];

for (let index = 0; index < nums.length; index++) {
    if (nums[index] % 2 === 0) nums[index] *= 2;
}
console.log(nums);

/*
if (nums[0] % 2 === 0) nums[0] *= 2;
if (nums[1] % 2 === 0) nums[1] *= 2;
if (nums[2] % 2 === 0) nums[2] *= 2;
if (nums[3] % 2 === 0) nums[3] *= 2;
*/

// найти сумму значений элементов массива
// 2 + 56 + 66 + -123 + 0 + 45 + 45
let sum = 0;
nums = [2, 56, 66, -123, 0, 45, 45];

// на каждой итерации в переменную elem копируется!!!
// значение значение элемента массива,
// на первой итерации значение elem будет равно 2, на второй 56 и тд
for (let elem of nums) { // nums - имя массива
    sum += elem;
}
console.log(sum);


// деструктуризация массива
let sizes = [18, 190];
// let height = 18, width = 90;
let [height, width] = sizes; // <-- деструктуризация массива

console.log(height, width); // 18 190

let info = ["Илья", "Тарасов", "23 года", "родился в Москве"];
// оператор ... используется после остальных переменных
let [name, surname, ...others] = info;
// переменной name будет присвоено значение "Илья"
// переменной surname будет присвоено значение "Тарасов"
// переменной others будет присвоено значение ["23 года", "родился в Москве"]
console.log(name, surname, others);

// задать значения по умолчанию
let elemMargins = [10, 40, 10];
let [topM = 0, rightM = 20, bottomM = 0, leftM = 20] = elemMargins;
console.log(topM, rightM, leftM, bottomM);

// let [без_значений_по_умолчанию, со_значениями_по_умолчанию, ...переменная] = [];

/*
let top = elemMargins[0];
let right = elemMargins[1];
let bottom = elemMargins[2];
*/

let someArr = [2, 6, 8];
console.log(someArr[someArr.length - 1]);
console.log(someArr[Math.floor(Math.random() * someArr.length)]);

// методы массивов
colors = ["red", "blue", "yellow", "green"];
// 1. добавление/удаление первого/последнего элемента
let lastColor = colors.pop(); // удаляет и возвращает последний элемент
// добавление 1го или нескольких элементов в конец массива
colors.push("white", "black");

// удаляет и возвращает первый элемент
let firstColor = colors.shift();
// добавление 1го или нескольких элементов в начало массива
colors.unshift("orange", "purple");
// ["orange", "purple", "blue", "yellow", "white", "black"];

// 2. splice / 3. slice
colors = ["red", "blue", "yellow", "green", "orange", "purple"];
// colors.splice(index, count, elem1, elem2)
// измеяет содержимое массива, удаляет count элементов,
// начиная c элемента с индексом index,
// добавляет указанное количество элементов (elem1, elem2),
// начиная c элемента с индексом index
// colors.splice(index, count, elem1, elem2) - если нужно только добавить
// colors.splice(index, 0) - если нужно только удалить
let removedColors = colors.splice(1, 2, "greenyellow", "gold");
console.log(colors);
console.log(removedColors);

arr = [-3, 56, 78, 90, 97];
// удалить элемент, если он четный
for (let i = arr.length - 1; i >= 0; i--){}

for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) {
        arr.splice(i, 1); // console.log(colors);
        i--;
    }
}
console.log(arr);
// возвращает новый массив, содержащий копию части исходного
// массива [индекс_от; индекс_до)
let newColors = colors.slice(1, 4); // не изменяет содержимое массива
console.log(newColors);

// 4. includes
// 5. reverse
// 6. concat
// 7. indexOf / lastIndexOf

nums = [
    [34, 67, -100],
    [-2, 45, 12],
    [-700, 281, -152]
];
// [34, 67, -100]
// [-2, 45, 12]
// [-700, 281, -152]

// // for (let i = 0; i < nums.length; i++) nums[i]
for (let elemArr of nums) {
    // // for (let j = 0; j < nums[i].length; j++) nums[i][j]
    for (let elem of elemArr) {
        console.log("elem = " + elem);
    }
}
