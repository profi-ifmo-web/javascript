'use strict';
let loginForm = document.forms['login-form'];
let pwdIcon = document.getElementById('password-icon');

pwdIcon.addEventListener('click', changeIcon);

function changeIcon() {
    if (this.innerText === 'visibility_off'){
        loginForm.elements.password
            .setAttribute('type', 'text');
        this.innerText = 'visibility';
    } else {
        loginForm.elements.password
            .setAttribute('type', 'password');
        this.innerText = 'visibility_off';
    }
}

let loginRules = {
    elem: loginForm.elements.login,
    minLength: 6,
    errorField: document.getElementById('login-error'),
};

let pwdRules = {
    elem: loginForm.elements.password,
    minLength: 10,
    errorField: document.getElementById('password-error'),
};

let validator = {
   checkMinLen(rule){
       if (rule.elem.value.length <= rule.minLength) {
           rule.errorField.innerText =
               'Минимальное количество символов: ' + rule.minLength;
           return false;
       }
       rule.errorField.innerText = "";
       return true;
   }
};

loginForm.elements.login
    .addEventListener("keyup", validator.checkMinLen.bind(null, loginRules));
loginForm.elements.password
    .addEventListener("keyup", validator.checkMinLen.bind(null, pwdRules));

// отправка
loginForm.addEventListener("submit", submitForm);
function submitForm(event) {
    event.preventDefault();
    if (!validator.checkMinLen(loginRules) ||
        !validator.checkMinLen(pwdRules)) console.log("Нельзя отправить на сервер");
    else console.log("Можно отправлять на сервер");

}
// validator.checkMinLen.bind(null, loginRules)
// validator.checkMinLen(loginRules)

/*
let someVar = ;
someVar = ;
function namedFunc() {}
if () {}
if () {} else {}
if () {} else if () {}
switch () {}
for (){}
while () {}
do {} while ();
loginForm.elements.password.setAttribute('type', 'text');
*/
