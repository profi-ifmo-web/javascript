// Cat.js
import Animal from "./Animal.js";
export default class Cat extends Animal{
    _mice = [];
    catchMouse(mouse){
        if (mouse._speed > this._speed) mouse.runFromCat();
        else this._mice.push(mouse);
    }
}