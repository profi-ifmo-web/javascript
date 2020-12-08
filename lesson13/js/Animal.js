// Animal.js
export default class Animal {
    constructor(animalName, animalSpeed = 5) {
        this._name = animalName;
        this._speed = animalSpeed;
    }
}

// export default {
//     prop: "val"
// }