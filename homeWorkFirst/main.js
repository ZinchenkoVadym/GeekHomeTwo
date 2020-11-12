// 1. Задание №1

let masOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
let masTwo = [-1, -8, -2];
let masThree = [1, 7, 3];
let masFour = [1, undefined, 3, 5, -3];
let masFive = [1, NaN, 3, 5, -3];

function maximalElementArr(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++)
        if (max < array[i]) {
            max = array[i];
        }
    return max;
}

let maxElementOne = maximalElementArr(masOne);
let maxElementTwo = maximalElementArr(masTwo);
let maxElementThree = maximalElementArr(masThree);
let maxElementFour = maximalElementArr(masFour);
let maxElementFive = maximalElementArr(masFive);
console.log(maxElementOne);
console.log(maxElementTwo);
console.log(maxElementThree);
console.log(maxElementFour);
console.log(maxElementFive);

function minElementArr(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++)
        if (min > array[i]) {
            min = array[i]
        }
    return min;
}

let minElementOne = minElementArr(masOne);
let minElementTwo = minElementArr(masTwo);
let minElementThree = minElementArr(masThree);
let minElementFour = minElementArr(masFour);
let minElementFive = minElementArr(masFive);
console.log(minElementOne);
console.log(minElementTwo);
console.log(minElementThree);
console.log(minElementFour);
console.log(minElementFive);

function sumElementMas(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let sumElementOne = sumElementMas(masOne);
let sumElementTwo = sumElementMas(masTwo);
let sumElementThree = sumElementMas(masThree);
let sumElementFour = sumElementMas(masFour);
let sumElementFive = sumElementMas(masFive);
console.log(sumElementOne);
console.log(sumElementTwo);
console.log(sumElementThree);
console.log(sumElementFour);
console.log(sumElementFive);

// 2. Задание №2

let arrayOne = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

function calcualate(array) {
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = array.length - 1;
    let result = 0;

    while(left < right) {
        if(array[left] > leftMax) {
            leftMax = array[left];
        }
        if(array[right] > rightMax) {
            rightMax = array[right];
        }
        if(leftMax >= rightMax) {
            result = result + rightMax - array[right];
            right = right - 1;
        } else {
            result += leftMax - array[left];
            left = left + 1;
        }
    }
    return result;
}

let resultOne = calcualate(arrayOne);
console.log(resultOne)
