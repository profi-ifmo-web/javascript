'use strict';

// строки заключаются в одинарные, двойные или обратные кавычки
// строки хранятся в кодировке UTF-16 в виде массива символов
// Поезд -> ['П', 'o', 'e', 'з', 'д']
// строки в JavaScript неизменны, можно лишь создать
// новую строку на основе существующей

// длина строки
let train = "Поезд";
console.log(train.length);

// каждый символ хранится под индексом,
// нумерация начинается с 0
console.log(train[2]); // e

console.log("first" + ", " + "second");

// методы строк
train = "Поезд";

// 1. приведение к верхнему / нижнему регистру
let newStr = train.toUpperCase();
console.log(newStr);

train = train.toLowerCase();
console.log(train); // поезд

// 2. trim
train = "     Поезд        ";
console.log(train.length);
train = train.trim();
console.log(train.length);

// 3. includes / 4. startsWith / 5. endsWith
train = "Поезд";
// вернет true, если указанная последовательность содержится в строке,
// метод чувствителен к регистру
console.log(train.includes("Ез"));
// вернет true, если строка начинается с указанной последовательности
// метод чувствителен к регистру
console.log(train.startsWith("по"));
// вернет true, если строка заканчивается с указанной последовательностью
// метод чувствителен к регистру
console.log(train.endsWith("д"));

// 6. split - массив из строки / 7. join - строка из массива
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit Error nihil";
let arrFromText = text.split(" ");
console.log(arrFromText);

let textFromArr = arrFromText.join(", ");
console.log(textFromArr);

// 8. indexOf / 9. lastIndexOf
// 10. slice / 11. substring - в отличие методов ???

// 12. сравнение строк
let str1 = "Поезд";
let str2 = "поезд";

console.log(str1 === str2);
console.log(str1 !== str2);

let compareRes = str1.localeCompare(str2, undefined,
    {sensitivity: 'accent'});
// {sensitivity: 'accent'} - сравнение без учета регистра
// compareRes = str1.localeCompare(str2);
console.log(compareRes);
/*
результат работы метода localeCompare:
отрицательное число - если str1 меньше str2
положительное число - если str1 больше str2  Поезд больше, чем Автобус
0 - если строки равны
 */
