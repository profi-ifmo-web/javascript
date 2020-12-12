'use strict';
// библиотека jQuery - набор функций для работы с DOM деревом
// jQuery(document).ready(function(){ Ваш код })
// создание объекта jQuery:
// 1. jQuery(document);
// 2. $(document); $ приведет к конфликту имен, если другие
// библиотеки тоже используют доллар
// у объеков jQuery нет методов и свойств html объектов
// и наоборот
jQuery(document).ready(function(){
    // jquery объекты по css селектору
    // jQuery('*') все элементы
    // jQuery('p') все теги p
    // jQuery('.some-class') все элементы с классом .some-class
    // jQuery('#elem_id') элемент с id = elem_id
    // jQuery('ul > li') все li внутри ul
    // jQuery('.border, #btn, h2')

    // jquery объект из html элемента
    // let elem = document.getElementById('elem');
    // jQuery(elem)

    // вместо повторяющегося поиска по селектору
    // jQuery('p').method1()
    // jQuery('p').method2()
    // jQuery('p').method3()

    // необходимо сохранять элементы в переменную
    // let jP = jQuery('p');
    // jP.method1()
    // jP.method2()
    // jP.method3()

    // 1. методы, которые возвращают преобразованный jQuery
    // объект можно вызывать по цепочке
    // jQuery(селектор).method1().method2().method3()

    // 2. методы, возвращающие информацию по элементу
    // let data = jQuery(селектор).method4()

    

});