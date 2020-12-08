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


### Занятия 5/6
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
        
4. Написать функцию sortByParam. Задача на метод 'sort' массива.

        Функция принимает на вход имя свойства и массив объектов.
        Функция сортирует объекты в массиве в порядке возрастания по указанному свойству.
        
### Занятия 8/9
1. [DOM дерево](lesson8-9/js)
2. [Дата и время](lesson8-9/js/date-time.js)

#### Домашнее задание        
1. Написать функцию генерации карточек с информацией о животных. Выглядеть должно, как на изображении в телеграмм

        function getCats() {
            return [
                {
                    "name": "Люся",
                    "age": "1 год",
                    "color": "трехцветная",
                    "additional_info": {"vaccinations": true, "passport": true}
                },
                {
                    "name": "Том",
                    "age": "3 месяца",
                    "color": "белый",
                    "additional_info": {"vaccinations": false, "passport": false}
                },
                {
                    "name": "Макс",
                    "age": 2,
                    "color": "серый",
                    "additional_info": {"vaccinations": false, "passport": true}
                },
                {
                    "name": "Василий",
                    "age": 3,
                    "color": "черный",
                    "additional_info": {"vaccinations": true, "passport": true}
                }
            ];
        }

2. Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу. <br>
Функция не должна быть привязаны к конкретным значениям. <br>
Заголовки ячеек - названия свойств. <br>
Например, для articles заголавками будут: id, title, text, author; для goods заголавками будут: title, price, count.

        Массивы для тестирования:
        let articles = [
            {
                id: 1,
                title: "JS",
                text: "Статья про JS",
                author: "Александр"
            },
            {
                id: 2,
                title: "PHP",
                text: "Статья про PHP",
                author: "Виталий"
            },
            {
                id: 3,
                title: "Базы Данных",
                text: "Статья про Базы Данных",
                author: "Евгения"
            },
            {
                id: 4,
                title: "HTML",
                text: "Статья про HTML",
                author: "Виталий"
            }
        ];
        
        let goods = [
            {
                title: "Пианино",
                price: 3000,
                count: 25
            },
            {
                title: "Гитара",
                price: 1200,
                count: 40
            },
            {
                title: "Барабаны",
                price: 2700,
                count: 12
            },
            {
                title: "Флейта",
                price: 900,
                count: 50
            },
            {
                title: "Арфа",
                price: 3400,
                count: 5
            }
        ];
        
        Примеры вызова функции:
        generateTable(articles); // генерация таблицы со статьями
        generateTable(goods); // генерация таблицы с товарами
            

3. [Доделать задачу на генерацию поля: generateField](lesson8-9/js/lesson9.js).

            Дан объект {
                cat: "Кот",
                book: "Книга",
                car: "Машина"
            }
            
            Написать функцию generateField(n) по генерации игрового поля размером n x n.
            Значение n не может быть меньше 3.
            Для 3х ячеек поля (для выбора конкретной ячейки использовать random) 
            добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
            Для 1й ячейки значение атрибута prise="cat",
            для 2й ячейки значение атрибута prise="book",
            для 3й ячейки значение атрибута prise="car"    
            
            
### Занятия 10/11
1. [Обработка событий](lesson10-11)
 
#### Домашнее задание     
1. Необходимо изменить функцию openDescription из lesson10.js так, чтобы при нажатии на 'p' связанная с ним информация открывалась, 
а информация, связанная с остальными 'p' скрывалась. Повторное нажатие на 'p' приводит к скрытию связанной с ним информации.
2. Задача на генерацию игрового поля (часть 2): 

        Пользователю дается определенное количество попыток, чтобы найти приз, 
        если ему удается найти спрятанный приз за указанное количество попыток, 
        то отобразить пользователю его приз, если не удалось, то вывести информацию об этом.
        
        После каждой попытки отображать, сколько попыток осталось.
        Если пользователь получил приз или закончились попытки, он не может продолжить игру (удалить обработчик события).
      
3. Задача на генерацию таблицы (часть 2):    
при нажатии на заголовок ячейки должна происходить сортировка по соответствующему столбцу, например: 
      
         Например, для массива goods из файла таблица будет следующего вида:
          TITLE     PRICE   COUNT
         Пианино    3000     25
         Гитара     1200     40
         Барабаны   2700     12
         и тд
         Вывод после нажатия на COUNT:
          TITLE     PRICE   COUNT
         Барабаны   2700     12
         Пианино    3000     25
         Гитара     1200     40
         и тд        
            
4. Дан чекбокс и текстовый инпут (см. файл form-events.js). Если флажок на чекбоксе установлен, 
то поле доступно для редактирования, если снят, то то поле нельзя редиктировать.

5. Необходимо реализовать возможность добавления комментариев к статье. Пользователь вводит текст в textarea,
нажимает 'Добавить', комментарий появляется в соответствующем блоке.

6. Задача на вывод книг:

        let books = [
            { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5, count: 10},
            { author: 'Гоголь', title: 'Мертвые души', pageCount: 470, count: 0},
            { author: 'Лермонтов', title: 'Тамань', pageCount: 190, count: 6},
            { author: 'Гончаров', title: 'Обломов', pageCount: 610, count: 2},
            { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191, count: 17},
            { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50, count: 0},
            { author: 'Лермонтов', title: 'Бородино', pageCount: 2, count: 5},
        ];
        
        Вывести информацию о товаре: название, автор, количество страниц и поле вида + 0 -, 
        где 0 изначальное количество.
        Нажате на + приводит к увеличению изначального количества (но не больше значения свойства count),
        нажате на - приводит к уменьшению количества (но не меньше 0).
        Если значение свойства count равно 0, кнопки + и - должны быть неактивны.
        Реализовать возможность вводить желаемое количество с клавиаруты, при этом:
            числа превышающие значение свойства count, заменяются  значением свойства count,
            отрицательные числа заменяются 0.
            
                
### Занятие 12
1. [Модули](lesson12/js)
                       
           
            
        
Занятие 13 ООП (10 декабря)        
Занятие 14 Использование библиотек. JQuery (12 декабря)        
Занятие 15 Webpack (15 декабря)        
Занятие 16/17 Vue (17, 19 декабря)     

Базы данных: 22, 24, 26, 29 декабря, 9 января   
PHP: с 12 января 

