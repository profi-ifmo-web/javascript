'use strict';

let cat = {
    name: "Tom",
    speed: 23,
    mice: [],
    catchMouse(mouse) {
        if (this.speed > mouse.speed) this.mice.push(mouse);
        else mouse.runFromCat();
    }
};

let mouse = {
   name: "Jerry",
   speed: 25,
    runFromCat(){ console.log(`${this.name} убежал`); }
};

export {cat, mouse};