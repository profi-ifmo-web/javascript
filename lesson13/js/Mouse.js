// Mouse.js
// import {default as Animal} from "./Animal.js";
import Animal from "./Animal.js";
// класс Mouse наследует (расширяет) класс Animal
export default class Mouse extends Animal{
    runFromCat(){
        console.log(`${this._name} убежал`);
    }
}