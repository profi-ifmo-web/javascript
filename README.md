### Занятие 1
1. [Переменные, примитивные типы данных](lesson1/js/data-types.js)
2. [Арифметические операторы и операторы присваивания](lesson1/js/operators.js)

#### Домашнее задание
При решении задач пользуемся только пройденной в lesson1 информацией! 
1. Задайть высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь. 
Результат выводим в консоль.
2. В переменной n хранится двузначное число. Найти сумму цифр числа n и вывести результат в консоль. 
    
    Например, для числа 56 вывод будет:
         
          Значение n равно 56, сумма его цифр равна 11
    
    для числа 23 вывод будет:
         
         Значение n равно 23, сумма его цифр равна 5
3.  Поменять значение двух переменных, не используя третью.

### Занятие 2
1. [Операторы сравнения. Логические операторы. Инкремент/декремент](lesson2/js/operators.js)
2. [Конструкции приятия решений](lesson2/js/decision-making-statements.js)

#### Домашнее задание
1. Задача на if else

        Дана переменная sum (сумма покупки).
        В зависимости от значения переменной sum рассчитать персональную скидку и  вывести в консоль сумму к оплате с учетом скидки!:
           сумма до 1000 - скидка не предусмотрена
           сумма от 1000 до 2000 - скидка 5%
           сумма от 2000 до 3000 - скидка 10%
           сумма от 3000 - скидка 10% + подарок
           
2. Задача на if else

        Даны переменные: lang, salary
        Eсли значение lang - javascript перейти к проверке salary.
        Eсли значение salary > 100000, присвоить переменной result - Приглашаем Вас на собеседование.
        Eсли меньше, присвоить переменной result - Мы перезвоним Вам в ближайшее время.
        
3. Задача на switch
      
       Дана константа month (название месяца), в зависимости от названия месяца присвоить значение переменной season:
       декабрь / январь / февраль  -> присвоить значение "зима"    
       март / апрель / май  -> присвоить значение "весна"    
       июнь / июль / август  -> присвоить значение "лето"    
       сентябрь / окрябрь / ноябрь  -> присвоить значение "осень"
       

### Занятие 3
1. [Циклы do while, while, for](lesson3/js/looping-statements.js)
2. [Массивы](lesson3/js/arrays.js)

#### Домашнее задание
Задачи на циклы.
1. Вывести в консоль первые 20 элементов последовательности 2 4 8 16 32 64 128...N
2. Вывести в консоль все неотрицательные элементы последовательности 90 85 80 75 70 65 60...N
3. Задача на while:
    
       Дано: количество моющего средства и количество тарелок.
       Для мытья одной тарелки необходимо 0.5 моющего средства.
       Когда средство / тарелки закончатся вывести в консоль количество оставшихся тарелок / средства.
       На каждой итерации цикла (после мытья тарелки) выводить в консоль количество моющего средства.
       
Задачи на массивы.
1. Создать массив из 10 элементов и заполить его рандомными значениями. <br>
   Вывести в консоль элемент массива, индекс выбрать используя рандом. <br>
   Вывести среднее арифметическое значение. 
2. Создать массив целых чисел произвольного размера. <br>
   Найти в данном массиве такие два элемента, чтобы их сумма была равна 7. <br>
   Найденные элементы и их индексы вывести в консоль. <br>
   Для решения достаточно найти одну пару. <br>
3. На многомерный массив: 

        Дан массив: 
            [
               [23, 56, 78, 12, -900],
               [0, 0, 67, -3, 621],
               [89, 67, 12],
               [23, 56, 78, 12, -900, 89, 33, 21]
            ]
        Увеличить значение каждого элемента массива на 10.
        Найти сумму значений элементов массива.
    

*Дополнительная задача на циклы (без массивов):
    
    Пользователь загадывает число в диапазоне от [1 до 100], программа пытается его угадать.
    Программа может задавать пользователю вопросы:
        Число равно ...? / Число больше ...? / Число меньше ...? и в зависимоти от ответа пользователя принимать решения.
    Пользователь может отвечать ДА, НЕТ, ВЫХОД.
    Игра заканчивается:
        если пользователь отвечает ВЫХОД
        если программа угадала число
        
    При решении используйте метод бинарного поиска - деление отрезка на 2.    
     
     
### Занятие 4
1. [Строки](lesson4/js/strings.js)

#### Домашнее задание
1. Найти количество вхождений одной строки в другую.
Например, строка "дом" встречается в строке "дом домик домой одомашненный" 4 раза

2. Проверить строку на палиндром.
Палиндром — это число, буквосочетание, слово или текст, которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.
Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора - палиндром

3. Заменить все буквы в слове на строчные, а первую букву на заглавную
Например, дано hello, получаем Hello / дано HeLLO, получаем Hello

4. Найдите самое длинное слово в предложении, при условии, что в предложении все слова разной длины
Например, в "в предложении все слова разной длины" самое длинное слово "предложении" 


### Занятие 5/6
1. [Функции](lesson5-6/js/functions1.js)


#### Домашнее задание
1. Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
будет возвращать слово "товар" в правильной форме ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).

2. Функция range

       Напишите функцию range, принимающую три аргумента:
         два обязательных: начало и конец диапазона,
         третий аргумент - необязательный (если он не передан, то равен единице) – шаг для построения массива.
       
       Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное.
       Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]

3. Дано целое положительное число N.   
Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).

#### Домашнее задание
4. На методы массивов
        
        Дан массив:
        let numsArr = [
            [3, 5, -1, 6, 0],
            [56, -9, 111, 6],
            [11, 86, -12],
        ];
        
        1. Увеличить кажый элемент массива на 10
        2. Создать массив, в который войдут положительные элементы numsArr

5. Написать функцию проверки на спам.

       Функция принимает на вход текст и ...спам - слова (переменное количество аргументов).
       Определить по 5ти бальной шкале, как часто в тексте встречается спам.
       Результат вернуть из функции.

6. Написать функцию, которая принимает на вход массив фукций и число 
обрабатывает число каждой функцией и возвращает true, 
если число прошло проверку всеми функциями и false, если нет

       Функции для проверки:
        let more18 = возвращает true, если переданный аргумент больше 18
        let less30 = возвращает true, если переданный аргумент меньше 30
        let arr = [more18, less30];
        
       Число для проверки:
        let age = Math.floor(Math.random() * 100);
        
 
### Занятие 7
1. [Объекты](lesson7/js/objects.js)

#### Домашнее задание

Объект для задач #1 и #2

        let goods = {
            piano: {
                title: "Пианино",
                price: 3000,
                count: 25
            },
            guitar: {
                title: "Гитара",
                price: 1200,
                count: 40
            },
            drum: {
                title: "Барабаны",
                price: 2700,
                count: 12
            },
            flute: {
                title: "Флейта",
                price: 900,
                count: 50
            },
            harp: {
                title: "Арфа",
                price: 3400,
                count: 5
            }
        };
        
Объект для задачи #3 и #4
        
        let books = [
            { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
            { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
            { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
            { author: 'Гончаров', title: 'Обломов', pageCount: 610},
            { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
            { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
            { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
        ];


1. Написать функцию getGoodsByPrice.

         Функция принимает на вход: from, to и obj:
            * from, to - числа, если переданы не числа, необходимо прервать работу функции;
            * obj - объект. 
         Функция возвращает новый объект с товарами из obj, стоимость которых находится в диапазоне (from;  to]

2. Написать функцию getByTitle.

        Функция принимает на вход: title, countToCart и obj:
            * title - название товара, который хочет купить пользователь;
            * countToCart - кодичество товара, который хочет приобрести пользователь;
            * obj - объект.
            
        Необходимо найти товар с названием (title):
            если количество позволяет, то уменьшить количество товара в объекте obj на countToCart,
            вывести в консоль информацию, что данного товара достаточно на складе,
            если не позволяет, то вывести информацию об этом в консоль.    
        Если товар с названием (title) не был найден вывести сообщение об этом в консоль
        
        Функция ничего не возвращает.
        
3. Написать функцию getBooks.

        Функция принимает на вход: автора и массив:
        Функция возвращает новый массив с книгами , в который войдут все книги указанного автора,
        если такого автора нет, вернуть пустой массив.
        
4. Написать sortByParam.

        Функция принимает на вход имя свойства и массив объектов.
        Функция сортирует объекты в массиве в порядке возрастания по указанному свойству.
        

