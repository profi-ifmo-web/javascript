// объекты юнитов должны создаваться
// со свойствами: attack, health, name
// при создании юнитов значение attack равно 3
// при создании юнитов значение health равно 10
// значение name задается через конструктор

// методами:
// isAlive() возвращает true, если значение health больше 0
// и false, если значение health меньше и равно 0
// attackOther(enemy) при атаке здоровье enemy снижается
// на количество атаки текущего юнита
class Unit{
    _attack = 3;
    _health = 10;
    constructor(name){this._name = name}
    isAlive(){
        return this._health > 0;
    }
    attackOther(otherUnit){
        // instanceof проверяет принадлежность объекта
        // к указанному типу. Возвращает true/false
        // otherUnit instanceof Unit
        if (!(otherUnit instanceof Unit)) {
            throw new Error('Юнит не может атаковать ' +
                'данного персонажа');
        }
        if (!this.isAlive() || !otherUnit.isAlive()) {
            console.log('Атака невозможна');
            return; // прервали работу метода
        }
        otherUnit._health -= this._attack;
        console.log(`${this._name} атаковал ${otherUnit._name}`);
    }

    set attack(unitAttack) {
        if (unitAttack < 3) throw new Error("Атака не мб меньше 3");
        this._attack = unitAttack;
    }

    get attack() {
        return this._attack;
    }

    set health(unitHealth) {
        if (unitHealth < 10) throw new Error("Здоровье не мб меньше 10");
        this._health = unitHealth;
    }

    get health() {
        return this._health;
    }
}

class Knight extends Unit {
    constructor(name, addAttack){ // constructor(addAttack)
        // вызов конструктора родителя, в котором происходит
        // установка значения свойства name
        super(name); // super('Рыцарь');
        this._additionalAttack = addAttack;
    }
    // переопределение метода родителя:
    attackOther(otherUnit){
        // 1. полностью изменить реализацию метода
        // 2. расширить функционал:
        // super.attackOther(otherUnit);
        // дополнительный функционал
        super.attackOther(otherUnit);
        if (!otherUnit.isAlive()) {
            this._attack += this._additionalAttack;
        }
    }
}

export {Unit, Knight};
