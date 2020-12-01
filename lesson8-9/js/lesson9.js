'use strict';
// функция addTextInput(inputData, where)
// добавления текстового поля в <div class="data-fields">
function addTextInput(inputData, where) {
    // inputData - объект с информацией о поле
    let divElem = document.createElement("div");
    let inputElem = document.createElement("input");
    // inputElem.setAttribute("type", inputData.type);
    // inputElem.setAttribute("placeholder", inputData.placeholder);
    // inputElem.setAttribute("name", inputData.name);
    // строки 9, 10, 11 можно заменить циклом
    for (let propName in inputData) {
        inputElem.setAttribute(propName, inputData[propName]);
    }
    divElem.append(inputElem);
    where.append(divElem);
}
let data = {
    type: 'email',
    placeholder: 'Введите email',
    name: 'email',
};
addTextInput(data, document.querySelector('.data-fields'));
addTextInput({
    type: 'text',
    value: 'Алексей',
    name: 'name',
}, document.querySelector('.data-fields'));

// функция addComment(commentText, authorInfo, where)
// добавления комментария в <div class="comments">
function addComment(commentText, authorInfo, where) {
    let date = new Date();
    // let a = 45, b = 90, c = 11;
    let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
        <div class="comment-img">
             <img src="${authorInfo.avatar}" alt="${authorInfo.name}">
        </div>
        <div class="comment-content">
             <p>
                 <span>${authorInfo.name}</span> | 
                 <span>${day}.${month}.${year} ${hours}:${minutes}</span></p>
             <p>${commentText}</p>
        </div>
        `;
    where.append(commentDiv);
}
let userInfo = {avatar: "img/avatar.jpg", name: "Ирина"};
addComment("wq eqr tt 5ywy", userInfo,
    document.querySelector(".comments"));


// функция generateField(n) генерации игрового поля из дз #8

// карусель




