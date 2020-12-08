'use strict'; // math-func.js

function getSum(a, b) {
    return a + b;
}
// getNumsSum(1, 2, 3)
function getNumsSum(...nums) {
    // [1, 2, 3]
    // 1. 0, 1 => 0 + 1 результат первой итерации 1
    // 2. 1, 2 => 1 + 2 результат второй итерации 3
    // 3. 3, 3 => 3 + 3 результат reduce 6
    return nums.reduce((sum, current) => sum + current);
}

export {getSum, getNumsSum};