'use strict';

// операторы сравнения
// > | < | >= | <=
// == равентсво (с приведением типов)
// != неравенство (с приведением типов)
// === строгое равенство (без приведения типов)
// !== строгое неравенство (без приведения типов)

// результат работы операторов сравнения - тип boolean: true / false
let height = 140;
let width = '140';
console.log(height == width); // true
// если типы данных не совпадают, возвращает false
// если совпадают, сравнивает значения
console.log(height === width); // false

console.log(height != width); // false
console.log(height !== width); // true

// === и !== можно использовать для сравнения строк
// > | < | >= | <= нельзя использовать для сравнения строк
let someNum = 800;
console.log(height > someNum); // false
console.log(height < someNum); // true
console.log(height >= someNum); // false
// оператор вернет true, если значение height меньше или равно
// значения someNum, в противном случае вернет false
console.log(height <= someNum); // true

// логические операторы
// || или
// && и
// ! не
// результат работы логических операторов - тип boolean: true / false
// в основном используются для объедитения условий
// оператор || врнет true, если высота меньше ширины
// или высота больше 100
// если высота меньше ширины, || сразу вернет true и не будет
// проверять условие height > 100
console.log((height < width) || (height > 100));
// оператор && вернет true, если высота меньше ширины
// и высота меньше 100
// если высота не меньше ширины оператор && сразу вернет false
// и не будет проверять условие height > 100
console.log((height < width) && (height > 100));

let a = false, b = 12, c = null, d = "", e = " ", f;
// сначала операнд приводится к типу boolean,
// потом его значение меняется на противоположное
// 0 -> false, остальные числа -> true
// null и undefined, NaN -> false
// пустая строка "" -> false
console.log(!a, !b, !c, !d, !e, !f, !NaN);
/* !a - true, !b - false, !c - true,
 !d - true, !e - false, !f - true, !NaN - true */

// инкремент / декремент
// инкремент (++) - увеличение значения переменной на 1
// префиксная форма ++i
someNum = 2;
console.log(++someNum); // 3 сначала увеличивает, потом возвращает результат
console.log(someNum); // 3

// постфиксная форма i++
someNum = 2;
console.log(someNum++); // 2 сначала возвращает значение переменной, потом
// увеличивает
console.log(someNum); // 3

// декремент(--) - уменьшение значения переменной на 1
// префиксная форма --i
someNum = 2;
console.log(--someNum); // сначала уменьшает, потом возвращает результат
console.log(someNum); //

// постфиксная форма i--
someNum = 2;
console.log(someNum--); //  сначала возвращает значение переменной, потом
// уменьшает
console.log(someNum); //

let num = 7;
let result = num++ - num++ + num++ - --num;
// 7 - 8 + 9 - 9
console.log(result); // -1





