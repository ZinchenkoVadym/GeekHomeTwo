// 3. Task three

function sum(a) {
    let number = a;

    function result(b) {
        number = number + b;
        return result;
    }

    result.toString = function () {
        return number;
    }
    return result;
}
console.log(sum(1)(2)(3));