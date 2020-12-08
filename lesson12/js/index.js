'use strict';
import {getSum, getNumsSum} from "./math-func.js";
import {cat as tom, mouse as jerry} from './animals.js';

console.log(getSum(4, 4));
console.log(getNumsSum(2, 5, 90));

tom.catchMouse(jerry);
console.log(tom);

