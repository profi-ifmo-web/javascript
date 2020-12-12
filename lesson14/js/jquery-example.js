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

    // добавление свойств через атрибут style -  метод css
    //css('style', 'value') / css({style: value, style2: value2})
    jQuery('#table tr:odd').css('background', 'orange');
    jQuery('#table tr:first-child').css('background', 'red');

    // работа с атрибутами
    let table = jQuery('#table');
    // установка атрибута
    table.attr('some-attr', 'attr-value');
    // получение значения атрибута
    console.log(table.attr('some-attr'));
    // удаление атрибута
    table.removeAttr('some-attr');
    table.attr('border', 1);

    let cardsDiv = jQuery('#cards div');
    cardsDiv
        .last() // возвращает последний элемент из набора
        .css('border-bottom', '3px solid green')
        .end()
        .first() // возвращает первый элемент из набора
        .css('border-top', '3px solid yellow');

    // атрибут data-*
    // id='elem' data-art=23190 data-year=2017
    // добавление
    // $('#elem').data('art', '23190')
    // $('#elem').data({art: '23190', year: 2017})
    // получение значений
    // $('#elem').data('art'); -> 23190
    // $('#elem').data('year'); -> 2017
    // удаление атрибута
    // $('#elem').removeData('year'); -> id='elem' data-art=23190

    // добавление - удаление обработчика
    // cardsDiv = jQuery('#cards div');
    // обработчик добавится каждому div из набора
    // jQuery('#cards').on('click', ()=>{});
    cardsDiv.on('click', function () {
        // this div, на который был добавлен обработчик
        // this - не jQuery объект
        // jQuery(this) - jQuery объект
        // <div data-present=pig>PIG</div>
        jQuery(this).text(this.dataset.present.toUpperCase());
        if (jQuery(this).data('present') === 'pig') {
            jQuery(this).css('background', 'pink');
        } else {
            jQuery(this).css('background', 'green');
        }
        // удаление обработчика
        cardsDiv.off();
        // cardsDiv.off('название_обработчика');
    });

    // text() - возвращает текст
    // text('значение') - устанавливает текст
    // elem.innerText = 'значение'
    // elem.innerText
    // событие на элементе будет обработано один раз
    // cardsDiv = jQuery('#cards div');
// <div id="cards">
//   <div data-present="cat">Подарок</div>
//   <div data-present="dog">DOG</div>
//   <div data-present="pig">Подарок</div>
//   <div data-present="cow">Подарок</div>
// </div>
// <div id="cards_info">
//    <h5>Информация по подаркам</h5>
// </div>
    jQuery('#cards_info').one('click', function () {
        // перебирает коллекцию, на каждой итерации вызывает
        // функцию, в которую передает индекс элемента и сам элемент
        cardsDiv.each((index, elem)=>{ // elem - не jQuery объект
            if (jQuery(elem).text() !== 'Подарок') {
                jQuery('#cards_info h5').after( // добавление после
                    `<p>Подарок: <b>${elem.dataset.present}</b></p>`
                );
            } else { // append добавление в конец
                jQuery(this).append(`
                    <p>Могли бы получить: <b>${elem.dataset.present}</b></p>
                `);
            }
            cardsDiv.off();
         });
    });

    // jQuery('nav li') - li, вложенные в nav
    // jQuery('nav li').has('.submenu'); из li в nav оставили только те,
    // в которые вложен элемент с class submenu
    let liWithSubmenu = jQuery('nav li').has('.submenu');
    liWithSubmenu.find('ul').hide();
    liWithSubmenu.find('li').css('background', 'yellow');


    liWithSubmenu.on('click', function () {
        // toggle - скрывает, если открыт и наоборот
        jQuery(this).children().toggle();
    });

    // .hide() скрытие  -> style='display: none'
    // .show() открытие -> style
    // .toggle() скрывает, если открыт и наоборот

    // .flex { display: flex }
    // hide() Добавил style='display:none'
    // <div style='display:none' class='flex'></div>
    // .show() Удалил style='display:none'
    // <div style class='flex'></div>
    // .on('click') / .click()
    jQuery('#info h2').click(function () {
        // jQuery(this).siblings().toggle('slow');
        jQuery(this).siblings().toggle('slow', function(){
            console.log(this);
            if (this.display) console.log('Открыли элемент');
            else console.log('Скрыли элемент');
            this.display = !this.display;
        });
    });


    let task = {done:false};
    console.log(task.done); // false
    task.done = !task.done; // изменение значения свойства на противоположное
    console.log(task.done); // true

    let colorDiv = jQuery('#color-div');
    colorDiv.width('100%').height(200).text('Текст элемента');
    console.log(colorDiv.width());
    console.log(colorDiv.height());
    console.log(colorDiv.text());

    // Разобрать метод animate

    let animationP = jQuery('#animation p');
    let plusSize = fontSize => parseInt(fontSize)/16 < 5 ? '+=16px' : '5em';
    let minusSize = fontSize => parseInt(fontSize)/16 > 1 ? '-=1em' : '1em';

    let change = jQuery("#change");
    animationP.first().click(()=>{
        change.animate({fontSize: plusSize(change.css("font-size"))}, 500)});
    animationP.last().click(()=>{
        change.animate({fontSize: minusSize(change.css("font-size"))}, 500)});
});