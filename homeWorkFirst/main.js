// 1. Task One

let masOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
let masTwo = [-1, -8, -2];
let masThree = [1, 7, 3];
let masFour = [1, undefined, 3, 5, -3];
let masFive = [1, NaN, 3, 5, -3];

function maxElementArr(array) {
    let max = undefined;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (typeof number === 'number' && !isNaN(number)) {
            if (typeof max === 'undefined' || max < number) {
                max = number;
            }
        }
    }
    return max;
}

console.log(maxElementArr(masOne));
console.log(maxElementArr(masTwo));
console.log(maxElementArr(masThree));
console.log(maxElementArr(masFour));
console.log(maxElementArr(masFive));

function minElementArr(array) {
    let min = undefined;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (typeof number === 'number' && !isNaN(number)) {
            if (typeof min === 'undefined' || min > number) {
                min = number;
            }
        }
    }
    return min;
}

console.log(minElementArr(masOne));
console.log(minElementArr(masTwo));
console.log(minElementArr(masThree));
console.log(minElementArr(masFour));
console.log(minElementArr(masFive));

function sumElementMas(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let number = array[i]
        if (typeof number === 'number' && !isNaN(number)) {
            sum = sum + number;
        }

    }
    return sum;
}

console.log(sumElementMas(masOne));
console.log(sumElementMas(masTwo));
console.log(sumElementMas(masThree));
console.log(sumElementMas(masFour));
console.log(sumElementMas(masFive));

// 2. Task Two

let arrayOne = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

function calculate(array) {
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = array.length - 1;
    let result = 0;

    while (left < right) {
        if (array[left] > leftMax) {
            leftMax = array[left];
        }
        if (array[right] > rightMax) {
            rightMax = array[right];
        }
        if (leftMax >= rightMax) {
            result = result + rightMax - array[right];
            right = right - 1;
        } else {
            result += leftMax - array[left];
            left = left + 1;
        }
    }
    return result;
}

console.log(calculate(arrayOne))