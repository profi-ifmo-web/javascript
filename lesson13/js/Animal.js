// Animal.js
export default class Animal {
    constructor(animalName, animalSpeed = 5) {
        // #privateName = animalName;
        // #privateSpeed = animalSpeed;
        // this._name = animalName;
        // this._speed = animalSpeed;
        this.name = animalName; // обращение к сеттеру name
        this.speed = animalSpeed; // обращение к сеттеру speed
    }
    //сеттеры: установка значений свойств
    set name(animalName){
        if (animalName.length < 3) throw new Error('Короткое имя');
        this._name = animalName;
    }
    set speed(animalSpeed){
        if (animalSpeed < 0) throw new Error('Скорость не мб отрицательной');
        this._speed = animalSpeed;
    }
    // геттеры: получение значений свойств
    get name(){
        return this._name;
    }
    get speed(){
        return this._speed;
    }
}




// значение attack и health не меньше 0


