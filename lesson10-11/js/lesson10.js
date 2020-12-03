'use strict';
let titleElems = document.querySelectorAll(".article p:first-child");
//[p, p, p]
// перебор коллекции html элементов
for (let elem of titleElems){
    // на каждой итерации в переменную elem копируется элемент коллекции
    // на первой итерации <p>Короткий текст 1</p>
    // на второй итерации <p>Короткий текст 2</p>
    // на третьей итерации <p>Короткий текст 3</p>

    // добавление обработчика события
    elem.addEventListener("click", openDescription);
}
// Array.from(titleElems).forEach(elem=>{});
function openDescription() {
    // this - элемент, на который был повешен обработчик события
    console.log("элемент, на который был повешен обработчик", this);
    this.nextElementSibling.classList.toggle("open");
}

// data-*
// Атрибут data-* используется для передачи пользовательских
// данных из HTML в JavaScript
// получение значения атрибута data-*:
// элемент.dataset.present



let presentContainer = document.getElementById("present_container");
presentContainer.addEventListener("click", showPresent);

// при клике на present_container вызывается функция showPresent,
// в нее передается объект с информацией о событии

let getPresent = () => {
    return {
        car: "Машина",
        dog: "Собака",
        book: "Книга"
    };
};

function showPresent(event) {
    // this - presentContainer
    console.log("Информация о событии", event);
    let clickElem = event.target; // элемент, на котором произошло событие
    let presentValue = clickElem.dataset.present;
    if (presentValue) { // car / book / dog
        let presents = getPresent();
        clickElem.innerText = presents[presentValue];
        clickElem.classList.add("present");
        // удаление обработчика события
        // presentContainer.addEventListener("click", showPresent)
        this.removeEventListener("click", showPresent);
    }
}

window.addEventListener("scroll", fixedMenu);
let fixedBlock = document.getElementById("fixed");
let fixedBlockOffsetTop = fixedBlock.getBoundingClientRect().top;

function fixedMenu() {
    if (window.pageYOffset > fixedBlockOffsetTop) {
        fixedBlock.classList.add("fixed");
    } else {
        fixedBlock.classList.remove("fixed");
    }
}








