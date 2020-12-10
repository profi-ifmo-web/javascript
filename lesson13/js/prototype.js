'use strict';
// Object <- Unit <- Knight
function Unit(unitName) { // функция конструктор
    this._name = unitName;
    this._attack = 3;
    this._health = 10;
    // this._addProp = null;
}
Unit.prototype.isAlive = function(){
    return this._health > 0;
};
Unit.prototype.attackOther = function(otherUnit){};

let unit1 = new Unit('Пехотинец #1');
unit1.isAlive();
let unit2 = new Unit('Пехотинец #2');
unit2.isAlive();
console.log(unit1, unit2);

// наследование
// Knight extends Unit
function Knight(unitName, addAttack) {
    Unit.call(this, unitName); // вместо super(unitName)
    this._addAttack = addAttack;
}
//Knight.prototype[prototype[isAlive, attackOther]]
//Unit.prototype[isAlive, attackOther]

// наследование прототипа
Knight.prototype = Object.create(Unit.prototype); // extends
Knight.prototype.constructor = Knight;

Knight.prototype.attackOther = function (otherUnit) {
    // вызов метода родителя:
    Unit.prototype.attackOther.call(this, otherUnit);
};

let knight = new Knight('Рыцарь', 2);
knight.attackOther(unit1);
console.log(knight);
console.log(knight.isAlive());