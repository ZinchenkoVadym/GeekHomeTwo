// Task 4

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        } else {
            return true
        }
    }
}

console.log(isPrime(21))


function factorial(n) {
    if (n !== 1) {
        return  n * factorial(n - 1)
    } else {
        return  n = 1;
    }
}

console.log((factorial(12)));



function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log((fib(22)));

function isSorted(array) {
    let result;
    for (let i = 0; i < array.length; i++){
        let element = array[i];
        if (element > i){
            result = true;
        } else  {
            result = false;
        }
    }
    return result;
}

console.log(isSorted([-2, 2, 5, 6, 23, 44, 55]))



function reverse(str){
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverse('qwerty'));

function indexOf (array, searchElement) {
    let index;
    for (let i = 0; i < array.length; i++) {
        let element  = array[i];
        if (searchElement === element) {
            index = i;
            break
        }
        else   index = -1;
    }
    return index;
}

console.log(indexOf([1, 3, 5, 1124, 6, 123, 12345, 12, 34 ,123 , 5123 ,5, false], false));



function missing(array) {
    let sum = 0;
    let result;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        let arrSum = number * (number + 1) / 2;
        sum = sum + number;
        result = arrSum - sum
    }
    return result;
}

console.log(missing([1, 2, 3, 4, 6]))


